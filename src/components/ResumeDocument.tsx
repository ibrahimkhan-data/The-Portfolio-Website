import React from "react";

export const ResumeDocument: React.FC = () => {
  return (
    <div className="w-full max-w-[760px] bg-white text-[#1A1A1A] shadow-xl sm:rounded-sm p-6 sm:p-10 font-serif border border-[#D5CFBF] leading-relaxed text-xs sm:text-[13px] print:border-none print:shadow-none print:p-0 print:max-w-none print:m-0">
      {/* Header */}
      <div className="text-left pb-1">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
          Khan Mohammad Ibrahim Shadab
        </h1>
        <p className="text-sm font-normal text-[#1A1A1A] mt-0.5">
          Data Scientist
        </p>
        <p className="text-[11px] sm:text-xs text-[#333333] mt-1 flex flex-wrap gap-x-2">
          <span>ibrahimcorelab@gmail.com</span>
          <span>&middot;</span>
          <span>+91 7208757380</span>
          <span>&middot;</span>
          <span>Mumbra, Maharashtra, India</span>
        </p>
        <p className="text-[11px] sm:text-xs text-[#333333] mt-0.5 flex flex-wrap gap-x-2">
          <span>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/ibrahimkhan-data"
              target="_blank"
              rel="noreferrer"
              className="text-[#8A1923] underline"
            >
              linkedin.com/in/ibrahimkhan-data
            </a>
          </span>
          <span>&middot;</span>
          <span>
            GitHub:{" "}
            <a
              href="https://github.com/ibrahimkhan-data"
              target="_blank"
              rel="noreferrer"
              className="text-[#8A1923] underline"
            >
              github.com/ibrahimkhan-data
            </a>
          </span>
        </p>
      </div>

      {/* Section: SUMMARY */}
      <div className="mt-4">
        <div className="border-b border-[#8A1923] pb-0.5">
          <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A1923]">
            Summary
          </h2>
        </div>
        <p className="mt-1.5 text-justify text-[#262626] leading-relaxed">
          Final-year AI &amp; Data Science student skilled in Python, SQL, Pandas, and Power BI, with internship experience at IRABOT. Passionate about solving real-world data problems and extracting actionable insights. Eager to contribute as a Data Science or ML Engineer Intern.
        </p>
      </div>

      {/* Section: PROJECTS */}
      <div className="mt-4">
        <div className="border-b border-[#8A1923] pb-0.5">
          <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A1923]">
            Projects
          </h2>
        </div>

        {/* Project 1 */}
        <div className="mt-2 text-left">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-[#1A1A1A]">Online Bookstore Database</span>
            <span className="text-[11px] text-[#444]">5-9-2026 &ndash; 12-9-2026</span>
          </div>
          <a
            href="https://github.com/ibrahimkhan-data/online-bookstore-sql"
            target="_blank"
            rel="noreferrer"
            className="italic text-[11px] text-[#555] hover:text-[#8A1923] block"
          >
            https://github.com/ibrahimkhan-data/online-bookstore-sql
          </a>
          <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[#262626]">
            <li>A beginner-friendly SQL project for managing an online bookstore database.</li>
            <li>This project demonstrates database design and SQL concepts using an online bookstore scenario.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="mt-3 text-left">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-[#1A1A1A]">Customer Churn Prediction</span>
            <span className="text-[11px] text-[#444]">17-9-2026 &ndash; 19-9-2026</span>
          </div>
          <a
            href="https://github.com/ibrahimkhan-data/Customer-Churn-Prediction"
            target="_blank"
            rel="noreferrer"
            className="italic text-[11px] text-[#555] hover:text-[#8A1923] block"
          >
            https://github.com/ibrahimkhan-data/Customer-Churn-Prediction
          </a>
          <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[#262626]">
            <li>Predicted churn for ~7,000 telco customers with Logistic Regression (ROC-AUC ~0.84).</li>
            <li>Served real-time 0&ndash;100% risk scores and explainable +/- factors in a Streamlit app.</li>
            <li>Beat Random Forest (~0.83) and XGBoost (~0.82) while keeping the model fully interpretable.</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="mt-3 text-left">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-[#1A1A1A]">Heart Disease EDA</span>
            <span className="text-[11px] text-[#444]">20-9-2026 &ndash; 21-9-2026</span>
          </div>
          <a
            href="https://github.com/ibrahimkhan-data/Heart-Disease-EDA"
            target="_blank"
            rel="noreferrer"
            className="italic text-[11px] text-[#555] hover:text-[#8A1923] block"
          >
            https://github.com/ibrahimkhan-data/Heart-Disease-EDA
          </a>
          <ul className="list-disc pl-4 mt-1 space-y-0.5 text-[#262626]">
            <li>EDA on 303 UCI heart disease records with pandas and seaborn.</li>
            <li>Compared clinical features to disease status and mapped correlations.</li>
          </ul>
        </div>
      </div>

      {/* Section: EDUCATION */}
      <div className="mt-4">
        <div className="border-b border-[#8A1923] pb-0.5">
          <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A1923]">
            Education
          </h2>
        </div>

        {/* B.Tech */}
        <div className="mt-2 text-left">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-[#1A1A1A]">B.Tech, AI &amp; Data Science</span>
            <span className="text-[11px] text-[#444]">2024 &ndash; 2027</span>
          </div>
          <p className="italic text-[11px] text-[#444]">
            Datta Meghe College of Engineering &middot; Grade: 8.4
          </p>
        </div>

        {/* Diploma */}
        <div className="mt-2.5 text-left">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-[#1A1A1A]">Diploma, Automation &amp; Robotics</span>
            <span className="text-[11px] text-[#444]">2021 &ndash; 2024</span>
          </div>
          <p className="italic text-[11px] text-[#444]">
            Abdul Razzak Kalsekar Polytechnic &middot; Grade: 86.91%
          </p>
        </div>

        {/* SSC */}
        <div className="mt-2.5 text-left">
          <div className="flex justify-between items-baseline">
            <span className="font-bold text-[#1A1A1A]">SSC</span>
            <span className="text-[11px] text-[#444]">2008 &ndash; 2021</span>
          </div>
          <p className="italic text-[11px] text-[#444]">
            Angel&apos;s Paradise English School &middot; Grade: 64.00%
          </p>
        </div>
      </div>

      {/* Section: SKILLS */}
      <div className="mt-4">
        <div className="border-b border-[#8A1923] pb-0.5">
          <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A1923]">
            Skills
          </h2>
        </div>
        <p className="mt-1.5 text-left text-[#262626]">
          Python, SQL, pandas, NumPy, Matplotlib, PowerBI, scikit-learn
        </p>
      </div>

      {/* Section: CERTIFICATIONS */}
      <div className="mt-4">
        <div className="border-b border-[#8A1923] pb-0.5">
          <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A1923]">
            Certifications
          </h2>
        </div>
        <ul className="list-disc pl-4 mt-1.5 space-y-0.5 text-left text-[#262626]">
          <li>Agentic AI Certified Foundations Associate &middot; Oracle &middot; August 29, 2026</li>
          <li>Python Basics &middot; Unstop &middot; August 03, 2026</li>
          <li>AWS Academy Graduate - Cloud Foundations - Training Badge &middot; AWS Academy &middot; March 21, 2026</li>
        </ul>
      </div>

      {/* Section: LANGUAGES */}
      <div className="mt-4">
        <div className="border-b border-[#8A1923] pb-0.5">
          <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8A1923]">
            Languages
          </h2>
        </div>
        <p className="mt-1.5 text-left text-[#262626]">
          English (Fluent), Hindi (Fluent), Urdu (Native)
        </p>
      </div>
    </div>
  );
};
