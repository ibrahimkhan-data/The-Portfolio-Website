import { GoogleGenAI } from "@google/genai";
import { getSmartPortfolioAnswer } from "../src/utils/portfolioKnowledge";

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
  if (!apiKey) return null;
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

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Messages array is required." });
  }

  const lastUserMessage =
    [...messages].reverse().find((m: any) => m.role === "user")?.content || "";

  const ai = getGenAI();
  if (!ai) {
    return res.status(200).json({ reply: getSmartPortfolioAnswer(lastUserMessage) });
  }

  try {
    const contents = messages
      .map((m: { role: string; content?: string; text?: string }) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: (m.content || m.text || "").trim() }],
      }))
      .filter((item) => item.parts[0].text.length > 0);

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
      return res.status(200).json({ reply: response.text.trim() });
    }

    return res.status(200).json({ reply: getSmartPortfolioAnswer(lastUserMessage) });
  } catch (error: any) {
    console.warn("Gemini generation timed out or failed:", error?.message);
    return res.status(200).json({ reply: getSmartPortfolioAnswer(lastUserMessage) });
  }
}
