"use client"

import { Film, Sparkles, Zap } from "lucide-react"

interface HeroProps {
  setCurrentPage: (page: "story" | "script") => void
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    //  👇 THE ONLY CHANGE IS HERE: Added 'pb-20'
    <div className="min-h-screen pt-20 pb-20 bg-background flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Video & Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/bg_video.mp4" // Assumes bg_video.mp4 is in the /public folder
        />
        {/* Dark overlay to make text more readable */}
        <div className="absolute top-0 left-0 w-full h-full bg-background/70"></div>
      </div>

      {/* Film strip top - Added z-10 */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-primary/20 border-b-2 border-primary flex items-center gap-4 px-4 z-10">
        <div className="flex gap-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-primary/40 border border-primary"></div>
          ))}
        </div>
      </div>

      {/* Film reel decorations - Added z-5 */}
      <div className="absolute top-32 left-10 opacity-20 z-5">

      </div>
      <div className="absolute bottom-32 right-10 opacity-20 z-5">

      </div>

      {/* Main Content - Already z-10, which is correct */}
      <div className="relative z-10 text-center max-w-4xl mt-12">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wider">
          <span className="text-primary">STORY</span>
          <span className="text-foreground"> MAKER </span>
          <span className="text-accent">&</span>
          <span className="text-foreground"> BAKER</span>
        </h1>

        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
          Craft extraordinary stories across any genre and transform them into professional scripts with AI-powered
          creativity
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => setCurrentPage("story")}
            className="px-8 py-4 bg-primary text-primary-foreground font-bold border-2 border-primary flex items-center justify-center gap-2 transition hover:bg-primary-foreground hover:text-white"
          >
            <Sparkles className="w-5 h-5" />
            GENERATE STORY
          </button>

          <button
            onClick={() => setCurrentPage("script")}
            className="px-8 py-4 bg-accent text-accent-foreground font-bold border-2 border-accent flex items-center justify-center gap-2 transition hover:bg-accent-foreground hover:text-accent"
          >
            <Zap className="w-5 h-5" />
            BAKE SCRIPT
          </button>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="p-6 bg-card border-2 border-primary/50 hover:border-primary transition">
            <h3 className="text-lg font-bold text-primary mb-2 tracking-wide">MULTI-GENRE</h3>
            <p className="text-muted-foreground">Sci-Fi, Fantasy, Drama, Horror, Romance & more</p>
          </div>

          <div className="p-6 bg-card border-2 border-accent/50 hover:border-accent transition">
            <h3 className="text-lg font-bold text-accent mb-2 tracking-wide">AI POWERED</h3>
            <p className="text-muted-foreground">Intelligent story and script generation</p>
          </div>

          <div className="p-6 bg-card border-2 border-primary/50 hover:border-primary transition">
            <h3 className="text-lg font-bold text-primary mb-2 tracking-wide">EXPORT READY</h3>
            <p className="text-muted-foreground">Download scripts as professional PDFs</p>
          </div>
        </div>
      </div>

      {/* Film strip bottom - Added z-10 */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-primary/20 border-t-2 border-primary flex items-center gap-4 px-4 z-10">
        <div className="flex gap-4">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-primary/40 border border-primary"></div>
          ))}
        </div>
      </div>
    </div>
  )
}