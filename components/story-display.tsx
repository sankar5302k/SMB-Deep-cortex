"use client"

import { useState } from "react"

import { ChevronDown, ChevronUp, Sparkles } from "lucide-react"
interface StoryDisplayProps {
  story: string
  genres: string[]
  onClear: () => void
}

export default function StoryDisplay({ story, genres,onClear }: StoryDisplayProps) {
  const [expanded, setExpanded] = useState(true)

  const paragraphs = story.split("\n\n").filter((p) => p.trim())

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="border-4 border-primary rounded-sm p-8 bg-card shadow-lg fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Generated Story</h2>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-sm text-sm font-semibold bg-secondary text-secondary-foreground border border-accent"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <button onClick={() => setExpanded(!expanded)} className="p-2 hover:bg-muted rounded-sm transition">
              {expanded ? (
                <ChevronUp className="w-6 h-6 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-6 h-6 text-muted-foreground" />
              )}
            </button>
          </div>

          {expanded && (
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-foreground leading-relaxed text-lg fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          <div className="flex justify-center mt-8">
            <button
              onClick={onClear}
              className="px-8 py-4 bg-primary hover:bg-accent text-primary-foreground font-bold rounded-sm flex items-center gap-2 transition border-2 border-primary hover:border-accent"
            >
              <Sparkles className="w-5 h-5" />
              Generate New Story
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
