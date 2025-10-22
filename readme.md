# SMB: Story Maker & Baker (Deep Cortex)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Groq](https://img.shields.io/badge/Powered%20by-Groq-00B589?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDBDNS4zNzI1OCAwIDAgNS4zNzI1OCAwIDEyQzAgMTguNjI3NCA1LjM3MjU4IDI0IDEyIDI0QzE4LjYyNzQgMjQgMjQgMTguNjI3NCAyNCAxMkMyNCA1LjM3MjU4IDE4LjYyNzQgMCAxMiAwWk0xMS45OTUgMjEuNjA4OEM2LjY5NDQxIDIxLjYwODggMi4zOTEzNyAxNy4zMDU4IDIuMzkxMzcgMTJDMS43MDk0MiA5LjI1ODY3IDMuMDc2MDMgNi41NzYyNyA1LjQ2ODIzIDQuODMyODJDNy4yMjAxMyAzLjYwMjgyIDkuMzY4MTkgMi44MTE2OCAxMS42OTk1IDIuNTc0ODZMMTQuMDk1MyA1LjM0MTY0QzEyLjkxMjQgNS41MDM0NCAxMS43NjEyIDUuODI1ODkgMTAuNzE1MyA2LjQwMjM0QzkuNDA4NTkgNy4yMDE3NyA4LjMxODk3IDguMjM1MzEgNy41NjcyMyA5LjQxNDc5QzYuOTE4MDggMTAuMjU1MyA2LjUyNzE2IDExLjIxMzcgNi41MjcxNiAxMi4yMTc1QzYuNTI3MTYgMTMuMjIxMyA2Ljg0NTYxIDE0LjE1NjkgNy40MjQ4IDE0LjkzMDNDOC4zODEzNiAxNi4yMDc0IDEwLjAwNDIgMTcuMDM5NiAxMS44MDk0IDE3LjMzMDRMMTAuNjEwMyAxOS45MDM4QzEwLjYyNzUgMTkuOTA3NCAxMC42NDQ3IDE5LjkwNzQgMTAuNjYxOCAxOS45MDc0QzExLjA5NiAxOS45MDc0IDExLjUyNjUgMTkuNzY2MSAxMS44Mjk5IDE5LjQ4MzRMMTUuNDk2OSAxMy45NTM4QzE1LjcyMjIgMTQuMTk4MiAxNS44OTU5IDE0LjQ3NDQgMTYuMDQ0OSAxNC43NTQ0QzE2LjQ3MjcgMTUuNTU0NyAxNi42OTAyIDE2LjQ0NTcgMTYuNjkwMiAxNy4zNzQ0QzE2LjY5MDIgMTcuODQ5MSAxNi42MzUxIDE4LjMwNjIgMTYuNTM4MSAxOC43NDU3QzE2LjQ0NDcgMTkuMTgwNyAxNi4zMDk0IDE5LjU5ODMgMTYuMTQwMyAyMC4wMTU4QzE1LjU1NzQgMjEuMjUwNiAxNC40NDEzIDIyLjIwNjkgMTMuMTA4MiAyMi4zNTA2QzEyLjc1MjUgMjIuMzk1NSAxMi4zNzU5IDIyLjQxNjQgMTIgMjIuNDE2NEMxMS45OTgzIDIyLjQxNjQgMTEuOTk2NyAyMi40xNjQgMTEuOTk1IDIyLjQxNjRMMTEuOTk1IDIxLjYwODhaTTE4LjM3ODggMTUuNTcxNUMxOC42NzYgMTUuMDI3MyAxOC45MTgzIDE0LjQ0MTIgMTkuMTE4NyAxMy44Mjc1QzIwLjE3MDggMTAuNzQ4OCAxOC41MDIzIDcuNDk4MjkgMTUuNTQ4MyA2LjE2NjAyQzE0LjM5MDMgNS42MzM0MSAxMy4xMzI0IDUuNDE5NzggMTEuODk1MyA1LjQzNjA0TDkuNTIzMDcgMi43NjU2NUMxMC4zMTU5IDIuNTg1MjYgMTEuMTM3MSAyLjUwNDE0IDEyIDIuNTA0MTRDMTIuMDA4MyAyLjUwNDE0IDEyLjAxNjcgMi41MDQxNCAxMi4wMjUgMi41MDQxNEMxNy4zMjU2IDIuNTA0MTQgMjEuNjM4NiA2LjcxNzEzIDIxLjYzODYgMTJDMS42Mzg2IDE0LjMwNjEgMjAuNzc1IDE2LjM4ODQgMTguOTI1MiAxNy45MTA5QzE4LjczMDQgMTcuNTU1MiAxOC41NTY3IDE3LjE4MjEgMTguMzk5NyAxNi43OTgxQzE4LjM3ODggMTYuNzU2MyAxOC4zNTE2IDE2LjcxNDYgMTguMzMxOCAxNi42NzY1QzE4LjA4MTUgMTYuMTY5MyAxNy44NjY1IDE1LjY5NzQgMTcuNjc2MyAxNS4yNDQ1QzE3Ljk2MyAxNS4xMjc2IDE4LjIyODggMTQuOTgxOSAxOC40Nzc0IDE0LjgyNDdDMTguNDg0OCAxNC44MjQ3IDE4LjQ5MjIgMTQuODI4MyAxOC40OTk2IDE0LjgyODNMMTguMzc4OCAxNS41NzE1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+)](https://groq.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

An AI-powered application for generating multi-genre stories and instantly transforming them into production-ready scripts. Powered by the high-speed GPT oss 120b model.

![SMB Hero Page](./public/SMB.png) 


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

