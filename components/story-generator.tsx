"use client"

import { useState } from "react"
import { Sparkles, Loader } from "lucide-react"
import StoryDisplay from "./story-display"
import { generateStoryAction } from "@/app/actions" // Make sure this path is correct

const GENRES = [
  "Sci-Fi",
  "Fantasy",
  "Drama",
  "Horror",
  "Romance",
  "Thriller",
  "Comedy",
  "Adventure",
  "Wild West",
]

const COMBINATIONS = [
  "Sci-Fi + Fantasy",
  "Horror + Comedy",
  "Drama + Romance",
  "Thriller + Mystery",
  "Fantasy + Adventure",
  "Sci-Fi + Horror",
  "Wild West + Drama",
]

// Add Language options
const LANGUAGES = ["English", "Tamil", "Hindi"]

interface StoryGeneratorProps {
  onStoryGenerated: (story: string | null) => void // Allow null for clearing
  generatedStory: string | null
}

export default function StoryGenerator({
  onStoryGenerated,
  generatedStory,
}: StoryGeneratorProps) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>(["Sci-Fi"])
  const [context, setContext] = useState("")
  const [loading, setLoading] = useState(false)
  const [story, setStory] = useState<string | null>(generatedStory)
  const [language, setLanguage] = useState<string>("English") // New state for language

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    )
  }

  const handleGenerateStory = async () => {
    setLoading(true)
    try {
      // Pass language to the server action
      const generatedText = await generateStoryAction(
        selectedGenres.join(", "),
        context,
        language,
      )
      setStory(generatedText)
      onStoryGenerated(generatedText)
    } catch (error) {
      console.error("Error generating story:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleClearStory = () => {
    setStory(null)
    onStoryGenerated(null) // Also clear the story in the parent component
  }

  if (story) {
    return (
      <StoryDisplay story={story} genres={selectedGenres} onClear={handleClearStory} />
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">
          Story Generator
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Select genres and let AI craft your story
        </p>

        {/* Genre Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Single Genres
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {GENRES.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreToggle(genre)}
                className={`p-3 rounded-sm font-semibold transition ${
                  selectedGenres.includes(genre)
                    ? "bg-primary text-primary-foreground border-2 border-primary"
                    : "bg-card text-foreground border-2 border-border hover:border-primary"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          <h3 className="text-xl font-bold text-foreground mb-4">
            Genre Combinations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {COMBINATIONS.map((combo) => (
              <button
                key={combo}
                onClick={() => handleGenreToggle(combo)}
                className={`p-3 rounded-sm font-semibold transition ${
                  selectedGenres.includes(combo)
                    ? "bg-secondary text-secondary-foreground border-2 border-secondary"
                    : "bg-card text-foreground border-2 border-border hover:border-secondary"
                }`}
              >
                {combo}
              </button>
            ))}
          </div>
        </div>

        {/* Story Context */}
        <div className="mb-12 bg-card border-2 border-border p-6 rounded-sm">
          <label className="block text-lg font-bold text-foreground mb-3">
            Story Context (Optional)
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Add any additional context or details... (e.g., 'A detective solving a murder in a small town')"
            className="w-full p-4 bg-background text-foreground border-2 border-border rounded-sm focus:outline-none focus:border-primary resize-none"
            rows={4}
          />
          <p className="text-sm text-muted-foreground mt-2">
            This context will be used by the AI to generate a more personalized
            story
          </p>
        </div>

        {/* Language Selection */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-foreground mb-4">Language</h3>
          <div className="grid grid-cols-3 gap-3">
            {LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`p-3 rounded-sm font-semibold transition ${
                  language === lang
                    ? "bg-primary text-primary-foreground border-2 border-primary"
                    : "bg-card text-foreground border-2 border-border hover:border-primary"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex justify-center">
          <button
            onClick={handleGenerateStory}
            disabled={loading || selectedGenres.length === 0}
            className="px-8 py-4 bg-primary hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-bold rounded-sm flex items-center gap-2 transition border-2 border-primary hover:border-accent"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Story
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}