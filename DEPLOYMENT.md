# SMB: Story Maker and Baker - Deployment Guide

## Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Google Gemini API Key (optional - app works with mock data without it)

### Local Development

1. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Set up environment variables** (optional for Gemini API)
   
   Create `.env.local` in the root directory:
   \`\`\`
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Getting Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Click "Create API Key"
3. Copy the key and add to `.env.local`

## Features

### Story Generator
- Select from 9 genres: Sci-Fi, Fantasy, Drama, Horror, Romance, Thriller, Comedy, Adventure, Wild West
- Add custom context for personalized stories
- AI-powered generation using Gemini API (or mock data)
- Genre-specific animations

### Script Baker
- Convert stories to professional scripts
- Use generated stories or input custom stories
- AI-powered character and dialogue generation
- Download scripts as HTML files

### Design
- Retro cinema + wild west aesthetic
- Animated background with tumbleweeds and dust particles
- Responsive design for all devices
- No glowing effects - pure classic cinema look

## Deployment Options

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Add Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `NEXT_PUBLIC_GEMINI_API_KEY` with your API key
   - Click "Save"

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your app is live!

### Deploy to Other Platforms

#### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables in Site settings
5. Deploy

#### Docker
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

#### Traditional Server (Ubuntu/Debian)
\`\`\`bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone <your-repo-url>
cd smb-story-maker-baker

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
npm install -g pm2
pm2 start npm --name "smb" -- start
pm2 startup
pm2 save
\`\`\`

## Environment Variables

### Required (for Gemini API)
- `NEXT_PUBLIC_GEMINI_API_KEY` - Your Google Gemini API key

### Optional
- `NODE_ENV` - Set to `production` for production builds

## Troubleshooting

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Next.js cache: `rm -rf .next && npm run build`

### API Key Issues
- Verify key is valid at [Google AI Studio](https://aistudio.google.com/app/apikey)
- Check environment variable is set correctly
- Ensure key has access to Gemini API

### Performance Issues
- Enable caching in Next.js config
- Use CDN for static assets
- Optimize images

## Monitoring

### Vercel Analytics
- Built-in analytics in Vercel dashboard
- Monitor performance and errors

### Custom Monitoring
- Add error tracking (Sentry, LogRocket)
- Monitor API usage
- Track user engagement

## Security

- Never commit `.env.local` to git
- Use `.env.local` for local development only
- Set environment variables in deployment platform
- Keep dependencies updated: `npm audit fix`
- Use HTTPS in production

## Performance Optimization

- Next.js automatically optimizes images
- CSS is minified and bundled
- JavaScript is code-split automatically
- Static pages are pre-rendered

## Scaling

For high traffic:
- Use Vercel's auto-scaling
- Enable caching headers
- Optimize database queries (if added)
- Use CDN for static assets

## Support

For issues:
1. Check browser console for errors
2. Check server logs
3. Verify environment variables
4. Check API key validity
5. Review deployment platform logs

## License

MIT
