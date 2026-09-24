/**
 * Verified knowledge base and deterministic markdown response generator
 * Ensures portfolio questions are answered in crisp, structured markdown
 * with zero delay when upstream AI is slow or under high demand.
 */

/**
 * Verified knowledge base and deterministic markdown response generator
 * Ensures portfolio questions are answered in crisp, structured markdown
 * with zero delay when upstream AI is slow or under high demand.
 */

export interface KnowledgeTopic {
  id: string;
  keywords: string[];
  markdown: string;
}

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    id: "target-roles",
    keywords: [
      "role",
      "roles",
      "targeting",
      "target",
      "seeking",
      "looking for",
      "job",
      "jobs",
      "position",
      "positions",
      "career",
      "internship",
      "internships",
      "aspire",
      "aspiration",
      "aspirations",
      "hire",
      "hiring",
      "opportunity",
      "opportunities",
      "future",
    ],
    markdown: `### Target Roles & Career Focus

Ibrahim is actively targeting **Data Science Intern** and **Machine Learning Intern** opportunities starting **December 2026**:

* **Primary Target Roles:**
  * **Data Science Intern / Junior Data Scientist:** Conducting exploratory data analysis (EDA), cleaning complex datasets, identifying statistical trends, and building automated data workflows.
  * **Machine Learning Intern / AI Associate:** Developing predictive models, feature engineering, classification/regression algorithms, and applying modern agentic AI workflows (Oracle Certified).
  * **Data Analyst / BI Intern:** Designing SQL queries, joins, aggregations, database schemas, and creating actionable visualizations.

* **Key Strengths Ibrahim Brings:**
  * **Strong Analytical & Python Foundation:** Hands-on experience with Pandas, NumPy, Seaborn, Matplotlib, and Jupyter Notebooks on real clinical data (Heart Disease EDA).
  * **Database & Query Proficiency:** Relational database design and complex query optimization using SQL.
  * **Hardware & Systems Context:** Past internship experience at IRABOT (embedded systems and robotics), giving him practical engineering discipline and problem-solving grit.

* **Internship Availability & Preferences:**
  * **Start Date:** Available from **December 2026** (Winter / Spring cycles)
  * **Locations:** Navi Mumbai / Thane / Mumbai
  * **Work Modes:** Open to **On-site**, **Hybrid**, or **Remote** arrangements`,
  },
  {
    id: "projects",
    keywords: [
      "project",
      "projects",
      "built",
      "build",
      "work",
      "portfolio",
      "github",
      "repo",
      "repository",
      "eda",
      "heart",
      "disease",
      "sql",
      "bookstore",
      "churn",
      "customer",
      "prediction",
      "streamlit",
      "prototype",
      "prototypes",
    ],
    markdown: `### Key Projects Built by Ibrahim

* **Online Bookstore Database** *(5-9-2026 – 12-9-2026)*
  * **Focus:** A beginner-friendly SQL project for managing an online bookstore database. Demonstrates relational database design, table normalization, and SQL concepts.
  * **Tech Stack:** SQL (MySQL / PostgreSQL)
  * **GitHub:** [online-bookstore-sql](https://github.com/ibrahimkhan-data/online-bookstore-sql)

* **Customer Churn Prediction** *(17-9-2026 – 19-9-2026)*
  * **Focus:** Predicted churn for ~7,000 telco customers with Logistic Regression (ROC-AUC ~0.84). Served real-time 0–100% risk scores and explainable +/- factors in a Streamlit app. Beat Random Forest (~0.83) and XGBoost (~0.82) while keeping the model fully interpretable.
  * **Tech Stack:** Python, Scikit-Learn, Streamlit, Pandas, NumPy
  * **GitHub:** [Customer-Churn-Prediction](https://github.com/ibrahimkhan-data/Customer-Churn-Prediction)

* **Heart Disease Exploratory Data Analysis (EDA)** *(20-9-2026 – 21-9-2026)*
  * **Focus:** EDA on 303 UCI heart disease records with pandas and seaborn. Compared clinical features (cholesterol, resting BP, chest pain, max heart rate) to disease status and mapped correlations.
  * **Tech Stack:** Python, Pandas, NumPy, Seaborn, Matplotlib, Jupyter Notebook
  * **GitHub:** [Heart-Disease-EDA](https://github.com/ibrahimkhan-data/Heart-Disease-EDA)`,
  },
  {
    id: "skills",
    keywords: [
      "skill",
      "skills",
      "tech",
      "technology",
      "technologies",
      "stack",
      "python",
      "ml",
      "machine learning",
      "tools",
      "tool",
      "library",
      "libraries",
      "framework",
      "frameworks",
      "pandas",
      "numpy",
      "seaborn",
      "matplotlib",
      "powerbi",
      "scikit-learn",
      "scikit",
    ],
    markdown: `### Technical Skills & Competencies

* **Skills:** Python, SQL, pandas, NumPy, Matplotlib, PowerBI, scikit-learn
* **Data Science & ML:** Exploratory Data Analysis (EDA), Statistical Modeling, Classification Algorithms (Logistic Regression, Random Forest, XGBoost), Model Interpretability, Streamlit App Deployment
* **Databases:** Relational schema design, normal forms, joins, aggregations, query optimization
* **Developer Tools:** Git, GitHub, VS Code, Jupyter Notebook`,
  },
  {
    id: "experience",
    keywords: [
      "experience",
      "intern",
      "internship",
      "irabot",
      "company",
      "work history",
      "employment",
      "previous work",
      "past work",
      "robotics intern",
    ],
    markdown: `### Professional Experience

* **Embedded Systems & Robotics Intern** · **IRABOT** *(2 Months)*
  * Built functional hardware automation prototypes and integrated sensory feedback loops.
  * Tested, programmed, and calibrated microcontrollers (Arduino, ESP32, Raspberry Pi) for real-world deployments.
  * Developed a solid hands-on engineering foundation that directly complements his data science and analytics focus.`,
  },
  {
    id: "education",
    keywords: [
      "education",
      "college",
      "degree",
      "btech",
      "b.tech",
      "diploma",
      "cgpa",
      "marks",
      "university",
      "school",
      "dmce",
      "kalsekar",
      "academic",
      "academics",
      "grade",
      "percentage",
      "scores",
    ],
    markdown: `### Educational Background

* **B.Tech, AI & Data Science** *(2024 – 2027)*
  * **College:** Datta Meghe College of Engineering
  * **Grade:** **8.4**

* **Diploma, Automation & Robotics** *(2021 – 2024)*
  * **College:** Abdul Razzak Kalsekar Polytechnic
  * **Grade:** **86.91%**

* **SSC** *(2008 – 2021)*
  * **School:** Angel's Paradise English School
  * **Grade:** **64.00%**`,
  },
  {
    id: "certifications",
    keywords: [
      "certification",
      "certifications",
      "certificate",
      "certificates",
      "certified",
      "oci",
      "oracle",
      "credential",
      "credentials",
      "agentic",
      "unstop",
      "aws",
    ],
    markdown: `### Certifications & Credentials

* **Agentic AI Certified Foundations Associate** · Oracle · August 29, 2026
* **Python Basics** · Unstop · August 03, 2026
* **AWS Academy Graduate - Cloud Foundations - Training Badge** · AWS Academy · March 21, 2026`,
  },
  {
    id: "languages",
    keywords: [
      "language",
      "languages",
      "speak",
      "english",
      "hindi",
      "urdu",
      "fluent",
      "native",
    ],
    markdown: `### Languages Spoken

* **English:** Fluent
* **Hindi:** Fluent
* **Urdu:** Native`,
  },
  {
    id: "contact",
    keywords: [
      "contact",
      "email",
      "phone",
      "reach",
      "connect",
      "message",
      "linkedin",
      "location",
      "address",
      "call",
      "touch",
      "number",
    ],
    markdown: `### Contact & Availability

* **Name:** Khan Mohammad Ibrahim Shadab
* **Role:** Data Scientist
* **Primary Email:** [ibrahimcorelab@gmail.com](mailto:ibrahimcorelab@gmail.com)
* **Phone:** [+91 7208757380](tel:+917208757380)
* **Location:** Mumbra, Maharashtra, India
* **LinkedIn:** [linkedin.com/in/ibrahimkhan-data](https://linkedin.com/in/ibrahimkhan-data)
* **GitHub:** [github.com/ibrahimkhan-data](https://github.com/ibrahimkhan-data)
* **Availability:** Starting **December 2026** (On-site, Hybrid, or Remote)`,
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download", "pdf", "file", "document"],
    markdown: `### Resume & Credentials

* **Format:** ATS-compliant 1-page technical Data Scientist resume
* **Download:** You can download Khan Mohammad Ibrahim Shadab's verified PDF resume directly with the **Download Resume** button or preview it in the interactive viewer.
* **Key Projects:** Online Bookstore Database (SQL), Customer Churn Prediction (ML / Streamlit / Logistic Regression), Heart Disease EDA (UCI / Pandas).
* **Skills:** Python, SQL, pandas, NumPy, Matplotlib, PowerBI, scikit-learn.`,
  },
];

/**
 * Deterministically match user query against portfolio knowledge
 * Uses weighted keyword matching to return precisely relevant markdown
 */
export function getSmartPortfolioAnswer(query: string): string {
  const normalized = query.toLowerCase().trim();
  const words = normalized.split(/[^a-z0-9_#+.-]+/).filter(Boolean);

  let bestTopic: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of KNOWLEDGE_TOPICS) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (kw.includes(" ")) {
        if (normalized.includes(kw)) {
          score += 4;
        }
      } else {
        if (words.includes(kw)) {
          score += 2;
        } else if (normalized.includes(kw)) {
          score += 1;
        }
      }
    }

    // Contextual boosts
    if (topic.id === "target-roles") {
      if (normalized.includes("target") || normalized.includes("role")) {
        score += 3;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  if (bestTopic && highestScore > 0) {
    return bestTopic.markdown;
  }

  // Default summary ONLY for general "who is Ibrahim" or "tell me about yourself"
  return `### About Ibrahim Khan

Ibrahim is a final-year **Artificial Intelligence & Data Science** student at Mumbai University:

* **Academic Record:** **8.4 CGPA** (B.Tech) · **86.91%** (Diploma in Robotics, 2× Topper)
* **Core Expertise:** Python, SQL, Exploratory Data Analysis (EDA), and Machine Learning
* **Featured Projects:** [Heart Disease EDA](https://github.com/ibrahimkhan-data/Heart-Disease-EDA) and [Online Bookstore Database](https://github.com/ibrahimkhan-data/online-bookstore-sql)
* **Target Roles:** Data Science & ML Internships starting **December 2026**
* **Direct Contact:** [ibrahimcorelab@gmail.com](mailto:ibrahimcorelab@gmail.com) | [+91 7208757380](tel:+917208757380)`;
}
