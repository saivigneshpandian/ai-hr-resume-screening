# AI HR Resume Screening System

An end-to-end AI-powered HR recruitment system. Candidates upload resumes through a React portal, the n8n workflow extracts data using Google Gemini, scores candidates automatically against job requirements, and logs results to Google Sheets — zero manual effort.

🔗 **Live Demo:** [ai-hr-resume-screening.vercel.app](https://ai-hr-resume-screening.vercel.app)

---

## System Overview

```
Candidate visits portal
        ↓
Fills form + uploads resume (PDF/DOC)
        ↓
React frontend → POST to n8n webhook
        ↓
Google Gemini analyzes resume document
        ↓
AI Agent extracts structured data
        ↓
HR AI scores candidate (0–100)
        ↓
Decision: Shortlist / Hold / Reject
        ↓
Results logged to Google Sheets
```

---

## Screenshots

### Website — Candidate Portal
![HR Portal](Website_image.png)

### n8n Workflow
![n8n Workflow](screenshot.png)

---

## Features

- **React frontend** — clean dark UI, drag and drop resume upload
- **Supports PDF, DOC, DOCX** — up to 10MB
- **AI document analysis** — Google Gemini 2.5 Flash extracts all resume data
- **Automated scoring** — skill match (0–60), experience (0–30), bonus (0–10)
- **Smart decisions** — Shortlist ≥80, Hold 60–79, Reject <60
- **Google Sheets logging** — every candidate scored and tracked automatically
- **Multi-role support** — Full Stack Developer, AI Automation Engineer, ML Engineer

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + Vite + Tailwind CSS |
| Workflow | n8n |
| AI Model | Google Gemini 2.5 Flash |
| Data Storage | Google Sheets |
| Deployment | Vercel |

---

## Scoring Rules

**Skill Match: 0–60**
Evaluated against role-specific required skills

**Experience: 0–30**
- Fresher / internship → 5–10
- 1–2 years → 20–25
- 3+ years → 30

**Bonus: 0–10**
Projects, certifications, extra tools

**Decision:**
- Total ≥ 80 → Shortlisted
- Total 60–79 → Hold
- Total < 60 → Rejected

---

## How to Run Locally

```bash
# Clone the repo
git clone https://github.com/saivigneshpandian/ai-hr-resume-screening.git

# Install dependencies
cd ai-hr-resume-screening
npm install

# Start development server
npm run dev
```

Update the webhook URL in `src/components/ResumeUpload.jsx`:
```js
const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
```

---

## n8n Workflow Setup

1. Import `Hr_AI.json` into your n8n instance
2. Connect Google Gemini API credentials
3. Connect Google Sheets OAuth2 credentials
4. Create a Google Sheet with columns: Name, Email, Job, About, Skill_Match_Score, Experience_Score, Bonus_Score, Total_Score, Status
5. Update the Sheet ID in the Google Sheets node
6. Activate the workflow and copy the webhook URL into the frontend

---

## Built By

**Saivignesh P** — Agentic AI Engineer
[LinkedIn](https://linkedin.com/in/saivignesh-pandian) · [GitHub](https://github.com/saivigneshpandian)
