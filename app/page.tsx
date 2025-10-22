"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import StoryGenerator from "@/components/story-generator"
import ScriptBaker from "@/components/script-baker"
import Hero from "@/components/hero"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "story" | "script">("home")
  const [generatedStory, setGeneratedStory] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background relative z-10">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {currentPage === "home" && <Hero setCurrentPage={setCurrentPage} />}
      {currentPage === "story" && (
        <StoryGenerator onStoryGenerated={setGeneratedStory} generatedStory={generatedStory} />
      )}
      {currentPage === "script" && <ScriptBaker story={generatedStory} setCurrentPage={setCurrentPage} />}
    </main>
  )
}
