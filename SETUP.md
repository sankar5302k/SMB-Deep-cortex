# SMB: Story Maker and Baker - Setup Guide

## Overview
SMB is a retro cinema + wild west themed web application that generates stories and scripts using Google's Gemini AI API.

## Features
- **Story Generator**: Create stories across multiple genres with AI-powered generation
- **Context Input**: Add custom context to personalize story generation
- **Script Baker**: Convert stories into professional scripts with character assignments
- **PDF Export**: Download scripts as formatted text files
- **Animated Wild West Background**: Immersive retro cinema aesthetic with animated elements
- **Gemini API Integration**: Powered by Google's Generative AI

## Prerequisites
- Node.js 18+ 
- npm or yarn
- Google Gemini API Key

## Installation

1. **Clone or download the project**
   \`\`\`bash
   npm install
   \`\`\`

2. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   \`\`\`
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
   \`\`\`

   To get your Gemini API key:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Click "Create API Key"
   - Copy the key and paste it in `.env.local`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Usage

### Story Generator
1. Click "GENERATE STORY" on the home page
2. Select one or more genres (Sci-Fi, Fantasy, Drama, Horror, Romance, Thriller, Comedy, Adventure, Wild West)
3. Optionally add context in the "Story Context" field
4. Click "Generate Story"
5. The AI will generate a unique story based on your selections

### Script Baker
1. Click "SCRIPT BAKER" on the home page
2. Choose to use a generated story or input your own custom story
3. Click "Bake Script"
4. The AI will convert the story into a professional screenplay with characters and dialogues
5. Click "Download as PDF" to export the script

## Technology Stack
- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, custom animations
- **AI**: Google Generative AI SDK (Gemini)
- **UI Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React

## Project Structure
\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with wild west background
│   ├── page.tsx            # Main page with navigation
│   └── globals.css         # Global styles with animations
├── components/
│   ├── navigation.tsx      # Top navigation bar
│   ├── hero.tsx            # Home page hero section
│   ├── story-generator.tsx # Story generation interface
│   ├── story-display.tsx   # Story display component
│   ├── script-baker.tsx    # Script generation interface
│   └── script-display.tsx  # Script display component
├── lib/
│   ├── ai-service.ts       # Gemini API integration
│   └── pdf-service.ts      # PDF download functionality
└── package.json            # Dependencies
\`\`\`

## Customization

### Changing Colors
Edit the CSS variables in `app/globals.css`:
- `--primary`: Gold (#c9a961)
- `--secondary`: Brown (#8b4513)
- `--accent`: Sienna (#a0522d)
- `--background`: Dark brown (#1a1410)
- `--foreground`: Cream (#f5f1ed)

### Adding New Genres
Edit `components/story-generator.tsx`:
\`\`\`typescript
const GENRES = ["Sci-Fi", "Fantasy", "Drama", "Horror", "Romance", "Thriller", "Comedy", "Adventure", "Wild West", "YOUR_GENRE"]
\`\`\`

### Adjusting Animations
Modify the animation keyframes in `app/globals.css`:
- `tumbleweed`: Wild west tumbleweed animation
- `dustParticles`: Dust particle effects
- `swingSign`: Saloon sign swinging effect
- `sunsetGlow`: Sunset glow effect

## Troubleshooting

### API Key Issues
- Ensure `NEXT_PUBLIC_GEMINI_API_KEY` is set in `.env.local`
- Check that the API key is valid and has not expired
- Verify the key has access to the Gemini API

### Generation Failures
- Check browser console for error messages
- Ensure you have a stable internet connection
- Try with a simpler context or different genres

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Restart the development server
- Ensure Tailwind CSS is properly compiled

## Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variable `NEXT_PUBLIC_GEMINI_API_KEY` in Vercel dashboard
4. Deploy

### Deploy to Other Platforms
Ensure the platform supports:
- Node.js 18+
- Environment variables
- Next.js 16

## License
MIT

## Support
For issues or questions, please check the documentation or create an issue in the repository.
