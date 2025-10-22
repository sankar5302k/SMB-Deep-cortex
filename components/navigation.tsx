"use client"
import Image from "next/image"
import { Film, BookOpen, FileText } from "lucide-react"

interface NavigationProps {
  currentPage: "home" | "story" | "script"
  setCurrentPage: (page: "home" | "story" | "script") => void
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-2 text-2xl font-bold cursor-pointer hover:text-primary transition"
        >

<Image
  src="/SMB.png" // Assumes the logo is in /public/SMB.png
  alt="SMB Logo"
  width={120}    // You can adjust this
  height={120}   // You can adjust this
  className="object-contain"
/>
        </button>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setCurrentPage("story")}
            className={`flex items-center gap-2 px-4 py-2 transition border-2 ${
              currentPage === "story"
                ? "bg-primary text-primary-foreground border-primary"
                : "text-foreground border-primary/30 hover:border-primary"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Story Maker
          </button>

          <button
            onClick={() => setCurrentPage("script")}
            className={`flex items-center gap-2 px-4 py-2 transition border-2 ${
              currentPage === "script"
                ? "bg-accent text-accent-foreground border-accent"
                : "text-foreground border-accent/30 hover:border-accent"
            }`}
          >
            <FileText className="w-5 h-5" />
            Script Baker
          </button>
        </div>
      </div>
    </nav>
  )
}
