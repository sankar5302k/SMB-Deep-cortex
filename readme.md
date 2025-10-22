# SMB: Story Maker & Baker (Deep Cortex)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Groq] (https://groq.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

An AI-powered application for generating multi-genre stories and instantly transforming them into production-ready scripts. Powered by the high-speed GPT oss 120b model.

![SMB Hero Page](./public/SMB.png) 
*(Note: Please replace this with a full screenshot of your app's hero page)*

## 🎬 Overview

SMB (Story Maker & Baker) provides a stunning, cinematic interface for creative writers, filmmakers, and hobbyists. Go from a simple idea to a full-fledged story, and then "bake" that story into a formatted script complete with characters, scenes, and dialogue.

The entire experience is wrapped in a "retro cinema + wild west" theme, built with Next.js and Tailwind CSS.

## ✨ Features

* **Multi-Genre Story Generation:** Craft stories in any genre: Sci-Fi, Fantasy, Horror, Romance, Western, and more.
* **High-Speed AI Engine:** Powered by the **Groq API** for incredibly fast, real-time story and script generation.
* **Instant Script Baking:** Convert your generated story into a professional screenplay format with a single click.
* **Intelligent Scriptwriting:** The AI automatically identifies characters, creates scene headings, and writes natural-sounding dialogue based on the story's plot.
* **Cinematic UI:** A beautiful, responsive theme built with Tailwind CSS, featuring a video background and film-strip aesthetics.
* **Export Ready:** Download your final scripts as professional PDFs. *(This is a planned feature as seen on the UI)*

## 🛠️ Tech Stack

* **Frontend:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **AI Backend:** [Groq API](https://groq.com/) (for high-speed inference)
* **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v18.x or later)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/sankar5302k/SMB-Deep-cortex.git](https://github.com/sankar5302k/SMB-Deep-cortex.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd SMB-Deep-cortex
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4.  **Set up environment variables:**

    Create a file named `.env.local` in the root of the project. **Add your new, secret Groq API key here.**

    ```.env.local
    # API key for the Groq AI service
    # Get your key from [https://console.groq.com/keys](https://console.groq.com/keys)
    GROQ_API_KEY="your_new_groq_api_key_here"
    ```
    
    **WARNING:** Never commit your `.env.local` file to GitHub. It is already included in the `.gitignore` file to prevent this.

5.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

6.  Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1.  **Navigate** to the homepage.
2.  Click **"Generate Story"** to go to the story creation page.
3.  Enter your prompts (e.g., genre, characters, a brief plot idea).
4.  The GPT-powered AI will generate a complete story with high speed.
5.  Once you are happy with the story, click **"Bake Script"**.
6.  The application will process the story and present you with a fully formatted script, including scenes, character dialogue, and action descriptions.

