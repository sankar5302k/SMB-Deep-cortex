// PDF generation and download service for scripts

interface Character {
  name: string
  role: string
  description: string
}

interface Dialogue {
  character: string
  dialogue: string
}

interface Scene {
  sceneNumber: number
  setting: string
  characters: string[]
  dialogues: Dialogue[]
}

interface ScriptData {
  title: string
  characters: Character[]
  scenes: Scene[]
}

export function downloadScriptAsPDF(script: ScriptData) {
  // Create a formatted text version of the script
  let content = ""

  // Title
  content += `${script.title}\n`
  content += "=".repeat(script.title.length) + "\n\n"

  // Cast
  content += "CAST\n"
  content += "-".repeat(40) + "\n"
  script.characters.forEach((char) => {
    content += `${char.name} - ${char.role}\n`
    content += `${char.description}\n\n`
  })

  content += "\n" + "=".repeat(40) + "\n\n"

  // Scenes
  content += "SCENES\n"
  content += "=".repeat(40) + "\n\n"

  script.scenes.forEach((scene) => {
    content += `SCENE ${scene.sceneNumber}\n`
    content += `Setting: ${scene.setting}\n`
    content += `Characters: ${scene.characters.join(", ")}\n`
    content += "-".repeat(40) + "\n\n"

    scene.dialogues.forEach((dialogue) => {
      content += `${dialogue.character}\n`
      content += `${dialogue.dialogue}\n\n`
    })

    content += "\n"
  })

  // Create blob and download
  const blob = new Blob([content], { type: "text/plain" })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${script.title.replace(/\s+/g, "_")}_script.txt`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}
