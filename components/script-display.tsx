"use client"

import { useState } from "react"
import { Download, ChevronDown, ChevronUp } from "lucide-react"

function downloadScriptAsPDF(script: any) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${script.title}</title>
      <style>
        body {
          font-family: 'Courier New', monospace;
          line-height: 1.5;
          margin: 40px;
          color: #333;
        }
        h1 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 30px;
          border-bottom: 2px solid #000;
          padding-bottom: 10px;
        }
        h2 {
          font-size: 16px;
          margin-top: 20px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        .cast {
          margin-bottom: 30px;
        }
        .character {
          margin-bottom: 15px;
          page-break-inside: avoid;
        }
        .character-name {
          font-weight: bold;
          text-transform: uppercase;
        }
        .character-role {
          font-style: italic;
          margin-left: 20px;
        }
        .character-description {
          margin-left: 20px;
          font-size: 12px;
        }
        .scene {
          margin-top: 30px;
          page-break-inside: avoid;
        }
        .scene-heading {
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .dialogue-block {
          margin-bottom: 15px;
        }
        .character-name-dialogue {
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 5px;
        }
        .dialogue-text {
          margin-left: 40px;
          font-style: italic;
        }
        .page-break {
          page-break-after: always;
        }
      </style>
    </head>
    <body>
      <h1>${script.title}</h1>
      
      <div class="cast">
        <h2>Cast of Characters</h2>
        ${script.characters
          .map(
            (char: any) => `
          <div class="character">
            <div class="character-name">${char.name}</div>
            <div class="character-role">${char.role}</div>
            <div class="character-description">${char.description}</div>
          </div>
        `,
          )
          .join("")}
      </div>

      <div class="page-break"></div>

      <h2>Scenes</h2>
      ${script.scenes
        .map(
          (scene: any) => `
        <div class="scene">
          <div class="scene-heading">Scene ${scene.sceneNumber}: ${scene.setting}</div>
          ${scene.dialogues
            .map(
              (dialogue: any) => `
            <div class="dialogue-block">
              <div class="character-name-dialogue">${dialogue.character}</div>
              <div class="dialogue-text">${dialogue.dialogue}</div>
            </div>
          `,
            )
            .join("")}
        </div>
      `,
        )
        .join("")}
    </body>
    </html>
  `

  const blob = new Blob([htmlContent], { type: "text/html" })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `${script.title.replace(/\s+/g, "-")}.html`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

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

interface ScriptDisplayProps {
  script: ScriptData
}

export default function ScriptDisplay({ script }: ScriptDisplayProps) {
  const [expandedScenes, setExpandedScenes] = useState<number[]>([0])

  const toggleScene = (sceneNumber: number) => {
    setExpandedScenes((prev) =>
      prev.includes(sceneNumber) ? prev.filter((s) => s !== sceneNumber) : [...prev, sceneNumber],
    )
  }

  const handleDownload = () => {
    downloadScriptAsPDF(script)
  }

  const getCharacterColor = (index: number) => {
    const colors = [
      "text-primary",
      "text-secondary",
      "text-accent",
      "text-destructive",
      "text-muted-foreground",
      "text-foreground",
    ]
    return colors[index % colors.length]
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-primary">{script.title}</h1>
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-primary hover:bg-accent text-primary-foreground font-bold rounded-sm flex items-center gap-2 mx-auto transition border-2 border-primary hover:border-accent"
          >
            <Download className="w-5 h-5" />
            Download as HTML
          </button>
        </div>

        {/* Characters */}
        <div className="mb-12 p-6 bg-card border-4 border-secondary rounded-sm">
          <h2 className="text-2xl font-bold text-secondary mb-6">Cast</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {script.characters.map((character, index) => (
              <div
                key={character.name}
                className="p-4 bg-background border-2 border-border rounded-sm hover:border-primary transition"
              >
                <h3 className={`text-lg font-bold ${getCharacterColor(index)} mb-1`}>{character.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{character.role}</p>
                <p className="text-foreground text-sm">{character.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scenes */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary mb-6">Scenes</h2>
          {script.scenes.map((scene) => (
            <div
              key={scene.sceneNumber}
              className="border-2 border-primary rounded-sm overflow-hidden hover:border-accent transition"
            >
              <button
                onClick={() => toggleScene(scene.sceneNumber)}
                className="w-full p-4 bg-card hover:bg-muted flex items-center justify-between transition"
              >
                <div className="text-left">
                  <h3 className="text-lg font-bold text-primary">Scene {scene.sceneNumber}</h3>
                  <p className="text-muted-foreground">{scene.setting}</p>
                </div>
                {expandedScenes.includes(scene.sceneNumber) ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {expandedScenes.includes(scene.sceneNumber) && (
                <div className="p-6 bg-background border-t-2 border-primary space-y-4">
                  {scene.dialogues.map((dialogue, index) => (
                    <div key={index} className="mb-4">
                      <p
                        className={`font-bold text-sm mb-1 ${getCharacterColor(
                          script.characters.findIndex((c) => c.name === dialogue.character),
                        )}`}
                      >
                        {dialogue.character}
                      </p>
                      <p className="text-foreground italic pl-4 border-l-2 border-border">{dialogue.dialogue}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
