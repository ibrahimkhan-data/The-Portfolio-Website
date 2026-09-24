import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { getSmartPortfolioAnswer } from "./src/utils/portfolioKnowledge.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const SYSTEM_INSTRUCTION = `You are Ibrahim's AI Assistant on his portfolio.

## CRITICAL RELEVANCE & FORMATTING RULES:
- **Answer ONLY What Was Asked**: Directly and specifically address the user's question without dumping unrelated profile sections.
  - If asked about **roles or targeting**: Elaborate specifically on target positions (Data Science Intern, Machine Learning Intern, Data Analyst), what tasks he performs in them (EDA, statistical analysis, model development, SQL querying), what strengths he brings, and his timeline (December 2026). Do NOT dump unrelated education marks, diploma topper awards, or email/phone contacts.
  - If asked about **projects**: Focus strictly on the projects (Heart Disease EDA, Bookstore SQL, IRABOT IoT).
  - If asked about **skills**: Focus strictly on languages, libraries, and tools.
  - If asked about **education**: Focus strictly on degree, college, and grades.
  - If asked about **experience**: Focus strictly on IRABOT internship work.
- **Elaborate on the Topic**: Provide insightful, structured details on the topic inquired rather than brief superficial snippets or unrelated filler.
- **High-Density Markdown**: Use bold titles and structured bullet points with clear bold headers.
- **Concise & Direct**: Keep answers between 70–150 words. Avoid conversational fluff or introductory meta-commentary.
- **No Unsolicited Follow-ups**: Do NOT append generic questions like "Would you like to know more about...".

## Persona:
- Voice: Helpful, professional, and authentic student tone.
- Perspective: Always speak in the THIRD PERSON ("Ibrahim is targeting...", "He built...").

## Target Roles & Career Focus:
- **Primary Roles:** Data Science Intern, Machine Learning Intern, Junior Data Analyst.
- **Focus Areas:** Exploratory Data Analysis (EDA), statistical pattern recognition, data cleaning pipelines, predictive model evaluation, SQL query optimization, agentic AI fundamentals.
- **Start Timeline:** Available starting December 2026.
- **Location & Mode:** Mumbai / Navi Mumbai / Thane (Open to On-site, Hybrid, and Remote).

## Projects:
1. **Online Bookstore Database** *(5-9-2026 – 12-9-2026)*
   - **Focus:** Beginner-friendly SQL project for managing an online bookstore database, demonstrating database design and SQL concepts.
   - **Stack:** SQL (MySQL / PostgreSQL).
   - **GitHub:** [online-bookstore-sql](https://github.com/ibrahimkhan-data/online-bookstore-sql)

2. **Customer Churn Prediction** *(17-9-2026 – 19-9-2026)*
   - **Focus:** Predicted churn for ~7,000 telco customers with Logistic Regression (ROC-AUC ~0.84). Served real-time 0–100% risk scores and explainable +/- factors in a Streamlit app. Beat Random Forest (~0.83) and XGBoost (~0.82) while keeping the model fully interpretable.
   - **Stack:** Python, Scikit-Learn, Streamlit, Pandas, NumPy.
   - **GitHub:** [Customer-Churn-Prediction](https://github.com/ibrahimkhan-data/Customer-Churn-Prediction)

3. **Heart Disease EDA** *(20-9-2026 – 21-9-2026)*
   - **Focus:** EDA on 303 UCI heart disease records with pandas and seaborn. Compared clinical features (cholesterol, BP, chest pain, max heart rate) to disease status and mapped correlations.
   - **Stack:** Python, Pandas, NumPy, Seaborn, Matplotlib, Jupyter.
   - **GitHub:** [Heart-Disease-EDA](https://github.com/ibrahimkhan-data/Heart-Disease-EDA)

## Skills:
- Python, SQL, pandas, NumPy, Matplotlib, PowerBI, scikit-learn

## Education:
- **B.Tech, AI & Data Science:** Datta Meghe College of Engineering (2024–2027, Grade: 8.4).
- **Diploma, Automation & Robotics:** Abdul Razzak Kalsekar Polytechnic (2021–2024, Grade: 86.91%).
- **SSC:** Angel's Paradise English School (2008–2021, Grade: 64.00%).

## Certifications:
- **Agentic AI Certified Foundations Associate:** Oracle (August 29, 2026).
- **Python Basics:** Unstop (August 03, 2026).
- **AWS Academy Graduate - Cloud Foundations - Training Badge:** AWS Academy (March 21, 2026).

## Languages:
- English (Fluent), Hindi (Fluent), Urdu (Native)

## Experience & Contact:
- **Work Experience:** IRABOT Embedded Systems & Robotics Intern.
- **Contact:** ibrahimcorelab@gmail.com · +91 7208757380 · Mumbra, Maharashtra, India.
- **Profiles:** LinkedIn: linkedin.com/in/ibrahimkhan-data · GitHub: github.com/ibrahimkhan-data`;

let aiClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Chat API endpoint with fast timeout and structured markdown guarantees
  app.post("/api/chat", async (req, res) => {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const lastUserMessage =
      [...messages].reverse().find((m: any) => m.role === "user")?.content || "";

    const ai = getGenAI();
    if (!ai) {
      return res.json({ reply: getSmartPortfolioAnswer(lastUserMessage) });
    }

    try {
      const contents = messages
        .map((m: { role: string; content?: string; text?: string }) => ({
          role: m.role === "user" ? "user" : "model",
          parts: [{ text: (m.content || m.text || "").trim() }],
        }))
        .filter((item) => item.parts[0].text.length > 0);

      // Fast single attempt with modern model and 2800ms abort timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2800);

      const response = await Promise.race([
        ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION + "\n\nCRITICAL: Always use clear markdown formatting with bold headers and bullet points. Never reply in a single wall of text.",
            temperature: 0.5,
          },
        }),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("Gemini request timeout")), 2800)
        ),
      ]);

      clearTimeout(timeoutId);

      if (response && response.text && response.text.trim().length > 0) {
        return res.json({ reply: response.text.trim() });
      }

      // Fall back to clean structured response
      return res.json({ reply: getSmartPortfolioAnswer(lastUserMessage) });
    } catch (error: any) {
      console.warn("Gemini generation skipped or timed out, returning verified portfolio markdown:", error?.message);
      return res.json({ reply: getSmartPortfolioAnswer(lastUserMessage) });
    }
  });

  // Dedicated resume page route
  app.get(["/resume", "/resume/"], (_req, res, next) => {
    if (process.env.NODE_ENV !== "production") {
      next();
    } else {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    }
  });

  // Serve resume files with no-cache headers to prevent stale browser PDF cache
  app.use(
    "/resume",
    express.static(path.join(process.cwd(), "public", "resume"), {
      index: false,
      redirect: false,
      setHeaders: (res) => {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.setHeader("Pragma", "no-cache");
        res.setHeader("Expires", "0");
      },
    })
  );

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
