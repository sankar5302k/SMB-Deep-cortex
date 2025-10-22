"use server"

import Groq from "groq-sdk"

let groq: Groq | null = null

// Only initialize Groq if API key is available (server-side only)
if (typeof process !== "undefined" && process.env.GROQ_API_KEY) {
  try {
    groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    })
  } catch (error) {
    console.warn("Groq SDK not available, using mock data", error)
  }
}

export async function generateStoryAction(
  genres: string,
  context = "",
  language: string = "English", // New language parameter
): Promise<string> {
  // If API key is not set, use mock data immediately
  if (!groq || !process.env.GROQ_API_KEY) {
    console.log(
      `Using mock story data (API key not configured) for language: ${language}`,
    )
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate delay
    return getMockStory(genres, language) // Pass language to mock
  }

  try {
    const prompt = `You are a creative storyteller. Generate an engaging and immersive story based on the following:

Genres: ${genres}
${context ? `Additional Context: ${context}` : ""}

Write a compelling story that is 300-400 words long. Make it vivid, engaging, and appropriate for the selected genres.
Start the story directly without any introduction.

IMPORTANT: Write the entire story in the ${language} language.
` // Added language instruction

    const result = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "openai/gpt-oss-120b", // Changed back to a more common model
    })

    return result.choices[0]?.message?.content || getMockStory(genres, language)
  } catch (error) {
    console.error("Error generating story with Groq:", error)
    return getMockStory(genres, language) // Pass language to mock on error
  }
}

export async function generateScriptAction(story: string): Promise<any> {
  // If API key is not set, use mock data immediately
  if (!groq || !process.env.GROQ_API_KEY) {
    console.log("Using mock script data (API key not configured)")
    await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate delay
    return getMockScript()
  }

  try {
    const prompt = `You are a professional screenwriter. Convert the following story into a screenplay format with characters and dialogues.
 but you must parse it and create the script. give the scenes also
The character names and dialogues in the final JSON script should be in the same language as the provided story.

Story:
${story}

Generate a JSON response with this exact structure:
{
  "title": "Script Title",
  "characters": [
    {
      "name": "CHARACTER_NAME",
      "role": "Role Description",
      "description": "Character description"
    }
  ],
  "scenes": [
    {
      "sceneNumber": 1,
      "setting": "Scene setting",
      "characters": ["CHARACTER_NAME"],
      "dialogues": [
        {
          "character": "CHARACTER_NAME",
          "dialogue": "What they say"
        }
      ]
    }
  ]
}

Only output the valid JSON object, with no other text or markdown formatting.`

    const result = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that only responds in valid JSON format.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "openai/gpt-oss-120b", // Use a model that supports JSON mode
      response_format: { type: "json_object" },
    })

    const jsonText = result.choices[0]?.message?.content
    if (jsonText) {
      return JSON.parse(jsonText) // Parse the JSON string
    }

    return getMockScript()
  } catch (error) {
    console.error("Error generating script with Groq:", error)
    return getMockScript()
  }
}

// Mock data fallbacks (updated signature)
function getMockStory(genres: string, language: string): string {
  // Note: Mock data is currently only in English.
  // You could expand this to return Tamil/Hindi mocks if language !== "English"
  console.log(`Returning English mock for ${language} request.`)

  const storyTemplates: Record<string, string> = {
    "Sci-Fi": `In the year 2247, humanity had finally reached the stars. Dr. Sarah Chen stood at the observation deck of the Artemis Station, gazing at the swirling nebula before her. The discovery they'd made three weeks ago had changed everything—a signal, ancient and unmistakably artificial, emanating from the depths of space.

Her team had worked tirelessly to decode the message. What they found was both thrilling and terrifying: coordinates to a civilization that had vanished millennia ago. The Council wanted to send a probe. Sarah wanted to go herself.

As she reviewed the data one more time, her AI assistant ARIA chimed in with an anomaly. The signal was changing, becoming stronger. Whatever had sent it was no longer dormant. It was waking up.

Sarah made her decision. She would lead the expedition personally. Humanity's future depended on understanding what lay beyond the stars. The journey would take months, but the answers they sought were worth any risk.

The Artemis would launch at dawn.`,

    Fantasy: `In the kingdom of Aethermoor, where magic flowed through the very earth, a prophecy had been spoken. The ancient texts spoke of a child born under the crimson moon who would either save the realm or doom it to eternal darkness.

Elara had always known she was different. Her silver eyes marked her as one touched by the old magic, a gift that had been dormant for centuries. When the crimson moon rose on her sixteenth birthday, her powers awakened with a force that shook the castle to its foundations.

The Council of Mages arrived within hours. They spoke of destiny, of trials, of a darkness rising in the Shadowlands. Elara learned that her parents had hidden her true heritage—she was the last of the Starborn, a lineage of warriors who had once protected the realm.

With her newfound abilities and a band of unlikely companions—a rogue knight, a wise dragon, and a mysterious scholar—Elara set forth on a quest to master her powers and face the encroaching darkness.

The fate of Aethermoor rested in her hands.`,

    "Wild West": `The dust settled on Main Street as the sun dipped below the horizon, casting long shadows across the weathered buildings of Redemption Creek. Jake had ridden into town with nothing but his horse and a reputation that preceded him like a tumbleweed in the wind.

The saloon doors creaked as he pushed through, and the piano player stopped mid-note. Everyone knew who he was—the outlaw who'd turned lawman, the man who'd walked away from the darkness. But darkness had a way of following you, especially in a town like this.

Behind the bar, Sarah's eyes met his. She'd been waiting for this moment for five years. The last time they'd seen each other, he'd chosen the outlaw life over her. Now, with a marshal's badge on his chest, he was back.

"I didn't think you'd come back," she said quietly.

"Neither did I," Jake replied, his voice rough as gravel. "But some things are worth coming back for."

Outside, the wind howled through the canyon, carrying with it the promise of change. The old West was dying, and with it, the chance for redemption. Jake had one night to prove that a man could change, that love could conquer the past.

The clock was ticking.`,

    Adventure: `The map had been in Kai's family for generations, passed down through whispers and warnings. It showed the location of the Lost City of Eldoria, a place of unimaginable wealth and ancient knowledge.

Everyone said it was a myth. Kai knew better.

With a small team of adventurers—a skilled climber, a brilliant archaeologist, and a former soldier—Kai set out on an expedition that would take them through jungles, across mountains, and into caves that hadn't seen sunlight in centuries.

Each step brought new dangers: ancient traps, wild creatures, and the realization that they weren't alone. Someone else was searching for Eldoria, and they would stop at nothing to find it first.

As Kai's team drew closer to the city, they uncovered secrets that challenged everything they knew about history. The city wasn't just a place of treasure—it was a repository of knowledge that could change the world.

The race was on. The adventure of a lifetime awaited.`,
  }

  const primaryGenre = genres.split(",")[0].trim()
  return storyTemplates[primaryGenre] || storyTemplates["Adventure"]
}

function getMockScript(): any {
  return {
    title: "Untitled Script",
    characters: [
      {
        name: "PROTAGONIST",
        role: "Main Character",
        description: "The central figure driving the narrative forward",
      },
      {
        name: "MENTOR",
        role: "Supporting Character",
        description: "A wise guide who provides wisdom and direction",
      },
      {
        name: "ANTAGONIST",
        role: "Opposing Force",
        description: "The force creating conflict and tension",
      },
    ],
    scenes: [
      {
        sceneNumber: 1,
        setting: "A mysterious location at dawn",
        characters: ["PROTAGONIST", "MENTOR"],
        dialogues: [
          {
            character: "PROTAGONIST",
            dialogue:
              "I never thought I'd find myself here. Everything I believed was a lie.",
          },
          {
            character: "MENTOR",
            dialogue:
              "The truth is often hidden in plain sight. You must learn to see beyond what your eyes show you.",
          },
        ],
      },
    ],
  }
}