"use client"

import { useState } from "react"
import { Zap, Loader, AlertCircle } from "lucide-react"
import ScriptDisplay from "./script-display"
import { generateScriptAction } from "@/app/actions"

interface ScriptBakerProps {
  story: string | null
  setCurrentPage: (page: "home" | "story" | "script") => void
}

interface ScriptData {
  title: string
  characters: Array<{
    name: string
    role: string
    description: string
  }>
  scenes: Array<{
    sceneNumber: number
    setting: string
    characters: string[]
    dialogues: Array<{
      character: string
      dialogue: string
    }>
  }>
}

export default function ScriptBaker({ story, setCurrentPage }: ScriptBakerProps) {
  const [loading, setLoading] = useState(false)
  const [script, setScript] = useState<ScriptData | null>(null)
  const [inputMode, setInputMode] = useState<"generated" | "custom">(story ? "generated" : "custom")
  const [customStory, setCustomStory] = useState("")
  const [storyToProcess, setStoryToProcess] = useState(story)

  const handleBakeScript = async () => {
    const finalStory = inputMode === "generated" ? storyToProcess : customStory

    if (!finalStory || !finalStory.trim()) {
      alert("Please provide a story to bake into a script")
      return
    }

    setLoading(true)
    try {
      const generatedScript = await generateScriptAction(finalStory)
      setScript(generatedScript)
    } catch (error) {
      console.error("Error generating script:", error)
    } finally {
      setLoading(false)
    }
  }

  if (script) {
    return <ScriptDisplay script={script} />
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">Script Baker</h2>
        <p className="text-center text-muted-foreground mb-12">Transform your story into a professional script</p>

        <div className="mb-8 flex gap-4 border-b-2 border-border">
          <button
            onClick={() => setInputMode("generated")}
            className={`px-6 py-3 font-bold transition border-b-4 ${
              inputMode === "generated"
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            Use Generated Story
          </button>
          <button
            onClick={() => setInputMode("custom")}
            className={`px-6 py-3 font-bold transition border-b-4 ${
              inputMode === "custom"
                ? "text-primary border-primary"
                : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            Custom Story
          </button>
        </div>

        {inputMode === "generated" ? (
          <>
            {!storyToProcess ? (
              <div className="mb-8 p-6 bg-card border-2 border-destructive rounded-sm flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-destructive mb-2">No Story Generated</h3>
                  <p className="text-muted-foreground mb-4">
                    Please generate a story first in the Story Maker before baking a script.
                  </p>
                  <button
                    onClick={() => setCurrentPage("story")}
                    className="px-4 py-2 bg-primary hover:bg-accent text-primary-foreground font-bold rounded-sm transition border border-primary"
                  >
                    Go to Story Maker
                  </button>
                </div>
              </div>
            ) : (
              <div className="mb-8 p-6 bg-card border-2 border-primary rounded-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">Story Preview</h3>
                <p className="text-muted-foreground line-clamp-6">{storyToProcess}</p>
              </div>
            )}
          </>
        ) : (
          <div className="mb-8">
            <label className="block text-foreground font-bold mb-3">Enter Your Story</label>
            <textarea
              value={customStory}
              onChange={(e) => setCustomStory(e.target.value)}
              placeholder="Paste or type your story here..."
              className="w-full h-48 p-4 bg-card text-foreground border-2 border-border rounded-sm focus:border-primary focus:outline-none resize-none"
            />
            <p className="text-muted-foreground text-sm mt-2">{customStory.length} characters</p>
          </div>
        )}

        {/* Bake Button */}
        <div className="flex justify-center">
          <button
            onClick={handleBakeScript}
            disabled={
              loading ||
              (inputMode === "generated" && !storyToProcess) ||
              (inputMode === "custom" && !customStory.trim())
            }
            className="px-8 py-4 bg-primary hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-bold rounded-sm flex items-center gap-2 transition border-2 border-primary hover:border-accent"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Baking Script...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Bake Script
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
