import React, { useState } from "react";
import { jsPDF } from "jspdf";

/**
 * Generates the exact official PDF resume for Khan Mohammad Ibrahim Shadab
 * strictly matching the authentic ATS template.
 */
export function generateResumeDocument(): jsPDF {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "letter",
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 612 pt
  const margin = 50;
  let y = 46;

  const textColor = [26, 26, 26];
  const sectionRed = [138, 25, 35]; // Deep burgundy/crimson #8A1923

  function drawBullet(x: number, baselineY: number, radius = 1.5) {
    doc.setFillColor(textColor[0], textColor[1], textColor[2]);
    doc.circle(x, baselineY - 2.8, radius, "F");
  }

  function addSectionHeader(title: string) {
    y += 22;
    doc.setFont("times", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(sectionRed[0], sectionRed[1], sectionRed[2]);
    doc.text(title.toUpperCase(), margin, y);

    y += 3.5;
    doc.setDrawColor(sectionRed[0], sectionRed[1], sectionRed[2]);
    doc.setLineWidth(0.75);
    doc.line(margin, y, pageWidth - margin, y);
    y += 14;
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  }

  // --- HEADER ---
  doc.setFont("times", "bold");
  doc.setFontSize(22);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text("Khan Mohammad Ibrahim Shadab", margin, y);

  y += 16;
  doc.setFont("times", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text("Data Scientist", margin, y);

  y += 14;
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("ibrahimcorelab@gmail.com  \u00B7  +91 7208757380  \u00B7  Mumbra, Maharashtra, India", margin, y);

  y += 13;
  doc.text("LinkedIn: linkedin.com/in/ibrahimkhan-data  \u00B7  GitHub: github.com/ibrahimkhan-data", margin, y);

  // --- SUMMARY ---
  addSectionHeader("Summary");
  doc.setFont("times", "normal");
  doc.setFontSize(9.2);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const summaryLines = [
    "Final-year AI & Data Science student skilled in Python, SQL, Pandas, and Power BI, with internship experience at",
    "IRABOT. Passionate about solving real-world data problems and extracting actionable insights. Eager to contribute as a",
    "Data Science or ML Engineer Intern.",
  ];
  summaryLines.forEach((line) => {
    doc.text(line, margin, y);
    y += 13.5;
  });

  // --- PROJECTS ---
  addSectionHeader("Projects");

  // 1. Online Bookstore Database
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text("Online Bookstore Database", margin, y);
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("5-9-2026 \u2013 12-9-2026", pageWidth - margin, y, { align: "right" });

  y += 13;
  doc.setFont("times", "italic");
  doc.setFontSize(8.8);
  doc.text("https://github.com/ibrahimkhan-data/online-bookstore-sql", margin, y);

  y += 13;
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  drawBullet(margin + 4, y, 1.5);
  doc.text("A beginner-friendly SQL project for managing an online bookstore database.", margin + 14, y);
  y += 13;
  drawBullet(margin + 4, y, 1.5);
  doc.text("This project demonstrates database design and SQL concepts using an online bookstore scenario.", margin + 14, y);
  y += 16;

  // 2. Customer Churn Prediction
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("Customer Churn Prediction", margin, y);
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("17-9-2026 \u2013 19-9-2026", pageWidth - margin, y, { align: "right" });

  y += 13;
  doc.setFont("times", "italic");
  doc.setFontSize(8.8);
  doc.text("https://github.com/ibrahimkhan-data/Customer-Churn-Prediction", margin, y);

  y += 13;
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  drawBullet(margin + 4, y, 1.5);
  doc.text("Predicted churn for ~7,000 telco customers with Logistic Regression (ROC-AUC ~0.84).", margin + 14, y);
  y += 13;
  drawBullet(margin + 4, y, 1.5);
  doc.text("Served real-time 0\u2013100% risk scores and explainable +/- factors in a Streamlit app.", margin + 14, y);
  y += 13;
  drawBullet(margin + 4, y, 1.5);
  doc.text("Beat Random Forest (~0.83) and XGBoost (~0.82) while keeping the model fully interpretable.", margin + 14, y);
  y += 16;

  // 3. Heart Disease EDA
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("Heart Disease EDA", margin, y);
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("20-9-2026 \u2013 21-9-2026", pageWidth - margin, y, { align: "right" });

  y += 13;
  doc.setFont("times", "italic");
  doc.setFontSize(8.8);
  doc.text("https://github.com/ibrahimkhan-data/Heart-Disease-EDA", margin, y);

  y += 13;
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  drawBullet(margin + 4, y, 1.5);
  doc.text("EDA on 303 UCI heart disease records with pandas and seaborn.", margin + 14, y);
  y += 13;
  drawBullet(margin + 4, y, 1.5);
  doc.text("Compared clinical features to disease status and mapped correlations.", margin + 14, y);

  // --- EDUCATION ---
  addSectionHeader("Education");

  // B.Tech
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("B.Tech, AI & Data Science", margin, y);
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("2024 \u2013 2027", pageWidth - margin, y, { align: "right" });

  y += 13;
  doc.setFont("times", "italic");
  doc.setFontSize(8.8);
  doc.text("Datta Meghe College of Engineering  \u00B7  Grade: 8.4", margin, y);

  y += 15;

  // Diploma
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("Diploma, Automation & Robotics", margin, y);
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("2021 \u2013 2024", pageWidth - margin, y, { align: "right" });

  y += 13;
  doc.setFont("times", "italic");
  doc.setFontSize(8.8);
  doc.text("Abdul Razzak Kalsekar Polytechnic  \u00B7  Grade: 86.91%", margin, y);

  y += 15;

  // SSC
  doc.setFont("times", "bold");
  doc.setFontSize(10);
  doc.text("SSC", margin, y);
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.text("2008 \u2013 2021", pageWidth - margin, y, { align: "right" });

  y += 13;
  doc.setFont("times", "italic");
  doc.setFontSize(8.8);
  doc.text("Angel\u0027s Paradise English School  \u00B7  Grade: 64.00%", margin, y);

  // --- SKILLS ---
  addSectionHeader("Skills");
  doc.setFont("times", "normal");
  doc.setFontSize(9.2);
  doc.text("Python, SQL, pandas, NumPy, Matplotlib, PowerBI, scikit-learn", margin, y);

  // --- CERTIFICATIONS ---
  addSectionHeader("Certifications");
  const certs = [
    "Agentic AI Certified Foundations Associate  \u00B7  Oracle  \u00B7  August 29, 2026",
    "Python Basics  \u00B7  Unstop  \u00B7  August 03, 2026",
    "AWS Academy Graduate - Cloud Foundations - Training Badge  \u00B7  AWS Academy  \u00B7  March 21, 2026",
  ];

  doc.setFont("times", "normal");
  doc.setFontSize(8.8);
  certs.forEach((cert) => {
    drawBullet(margin + 4, y, 1.5);
    doc.text(cert, margin + 14, y);
    y += 14;
  });

  // --- LANGUAGES ---
  addSectionHeader("Languages");
  doc.setFont("times", "normal");
  doc.setFontSize(9.2);
  doc.text("English (Fluent), Hindi (Fluent), Urdu (Native)", margin, y);

  return doc;
}

/**
 * Handles downloading Ibrahim Khan's resume as a clean .pdf file.
 * Fast, direct static download with zero latency.
 */
export async function downloadResumePdf(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  const fileName = "Khan-Mohammad-Ibrahim-Shadab-Resume.pdf";
  const filePath = `/resume/${fileName}`;

  // Direct fast download trigger
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Custom React hook that coordinates quick download state
 */
export function useResumeDownload() {
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleDownload = async (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (downloadStatus === "loading") return;

    setDownloadStatus("loading");

    try {
      await downloadResumePdf();
      setDownloadStatus("success");
      setTimeout(() => {
        setDownloadStatus("idle");
      }, 1800);
    } catch (err) {
      console.error("Resume download error:", err);
      setDownloadStatus("idle");
    }
  };

  return { downloadStatus, handleDownload };
}
