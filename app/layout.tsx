import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SMB: Story Maker and Baker",
  description: "Generate stories and scripts with AI-powered creativity in a wild west cinema style",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <div className="wild-west-bg">
          <div className="sunset-glow"></div>
          {/* Tumbleweeds */}
          <div className="tumbleweed" style={{ top: "20%", animationDelay: "0s" }}></div>
          <div className="tumbleweed" style={{ top: "40%", animationDelay: "5s" }}></div>
          <div className="tumbleweed" style={{ top: "60%", animationDelay: "10s" }}></div>

          {/* Dust particles */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="dust-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
              }}
            ></div>
          ))}
        </div>
        {children}
      </body>
    </html>
  )
}
