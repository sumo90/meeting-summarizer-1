# AI Meeting Summarizer

**Live Demo:** https://meeting-summarizer-1-7e0t.onrender.com/

## Introduction

AI-powered meeting summarizer that converts meeting recordings into a **speaker-labelled transcript, concise summary, and actionable tasks**.

The application uses **AssemblyAI** for transcription and **Gemini** for meeting analysis. Audio files are temporarily stored in **Cloudflare R2** and accessed through a signed URL for efficient processing.

## How to Run

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
ASSEMBLYAI_API_KEY=your_key
GEMINI_API_KEY=your_key

R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=your_bucket
```

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the local frontend URL shown in the terminal.

## Features

* Audio meeting upload
* Speaker-labelled transcription
* AI-generated meeting summary
* Action-item extraction with assignee and timestamp
* Temporary cloud audio storage
* Clean-up of temporary audio files after processing
