import React, { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { 
  Database, 
  Github, 
  ExternalLink, 
  Table2, 
  Code2, 
  Layers, 
  Check, 
  Copy, 
  FolderGit2,
  FileCode2,
  GitBranch,
  Terminal,
  Sparkles,
  ArrowUpRight,
  RotateCcw,
  Rows3,
  Activity,
  LineChart
} from "lucide-react";
import { motion } from "motion/react";

interface QueryResultPreview {
  columns: string[];
  rows: (string | number)[][];
  executionTime: string;
  rowCount: number;
}

interface SampleQuery {
  id: string;
  title: string;
  description: string;
  concept: string;
  sql: string;
  preview: QueryResultPreview;
}

export const Projects: React.FC = () => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"code" | "preview">("code");
  const [isExecuting, setIsExecuting] = useState(false);
  const [copied, setCopied] = useState(false);

  const databaseTables = [
    {
      name: "Customers",
      description: "Stores customer profiles, contact info, and registration details.",
      keys: "PK: customer_id",
    },
    {
      name: "Books",
      description: "Catalog of books with genre, unit pricing, and stock inventory.",
      keys: "PK: book_id",
    },
    {
      name: "Orders",
      description: "Records customer purchases, timestamps, and order statuses.",
      keys: "PK: order_id | FK: customer_id",
    },
    {
      name: "Order_Items",
      description: "Junction line items linking orders and books with quantities and prices.",
      keys: "PK: item_id | FK: order_id, book_id",
    },
    {
      name: "Reviews",
      description: "Customer feedback, star ratings (1-5), and review text.",
      keys: "PK: review_id | FK: book_id, customer_id",
    },
  ];

  const sqlConceptsCol1 = [
    { name: "DDL", desc: "Create databases & tables" },
    { name: "DML", desc: "Insert & modify data" },
    { name: "DQL", desc: "Retrieve & query data" },
    { name: "Joins", desc: "Combine multiple tables" },
  ];

  const sqlConceptsCol2 = [
    { name: "Aggregate Functions", desc: "SUM, AVG & COUNT" },
    { name: "GROUP BY", desc: "Group query results" },
    { name: "ORDER BY", desc: "Sort result sets" },
    { name: "Database Relationships", desc: "Primary & Foreign keys" },
  ];

  const sampleQueries: SampleQuery[] = [
    {
      id: "revenue-sales",
      title: "Top-Selling Books & Revenue",
      concept: "JOIN + GROUP BY + Aggregation",
      description: "Calculates total units sold and gross revenue generated for each title.",
      sql: `-- Calculate total units sold and gross revenue per book
SELECT 
    b.book_id,
    b.title,
    b.author,
    SUM(oi.quantity) AS total_units_sold,
    ROUND(SUM(oi.quantity * oi.unit_price), 2) AS total_revenue
FROM Books b
INNER JOIN Order_Items oi ON b.book_id = oi.book_id
GROUP BY b.book_id, b.title, b.author
ORDER BY total_revenue DESC;`,
      preview: {
        columns: ["book_id", "title", "author", "total_units_sold", "total_revenue"],
        rows: [
          [101, "The Great Gatsby", "F. Scott Fitzgerald", 142, "$2,128.58"],
          [104, "Clean Code", "Robert C. Martin", 118, "$4,718.82"],
          [102, "1984", "George Orwell", 95, "$1,234.05"],
          [105, "Python Crash Course", "Eric Matthes", 87, "$3,044.13"],
          [103, "To Kill a Mockingbird", "Harper Lee", 74, "$961.26"],
        ],
        executionTime: "12ms",
        rowCount: 5,
      },
    },
    {
      id: "customer-history",
      title: "Customer Order Summary",
      concept: "Multi-Table JOIN",
      description: "Retrieves complete purchase history with customer credentials and order totals.",
      sql: `-- Multi-table report uniting Customers, Orders, and Items
SELECT 
    c.customer_id,
    c.customer_name,
    c.email,
    o.order_id,
    o.order_date,
    SUM(oi.quantity * oi.unit_price) AS order_total
FROM Customers c
INNER JOIN Orders o ON c.customer_id = o.customer_id
INNER JOIN Order_Items oi ON o.order_id = oi.order_id
GROUP BY c.customer_id, c.customer_name, c.email, o.order_id, o.order_date
ORDER BY o.order_date DESC;`,
      preview: {
        columns: ["customer_id", "customer_name", "email", "order_id", "order_date", "order_total"],
        rows: [
          [1, "Aisha Sharma", "aisha.s@example.com", 501, "2026-08-14", "$79.98"],
          [4, "Rohan Mehta", "rohan.m@example.com", 504, "2026-08-12", "$112.50"],
          [2, "Vikram Patel", "vikram.p@example.com", 502, "2026-08-10", "$45.00"],
          [5, "Neha Gupta", "neha.g@example.com", 505, "2026-08-08", "$135.20"],
          [3, "Pooja Verma", "pooja.v@example.com", 503, "2026-08-05", "$62.40"],
        ],
        executionTime: "16ms",
        rowCount: 5,
      },
    },
    {
      id: "book-ratings",
      title: "Average Customer Ratings",
      concept: "LEFT JOIN + AVG() + HAVING",
      description: "Computes average star ratings and review volume for each book.",
      sql: `-- Evaluate customer sentiment and review distribution
SELECT 
    b.book_id,
    b.title,
    ROUND(AVG(r.rating), 2) AS avg_rating,
    COUNT(r.review_id) AS total_reviews
FROM Books b
LEFT JOIN Reviews r ON b.book_id = r.book_id
GROUP BY b.book_id, b.title
HAVING COUNT(r.review_id) > 0
ORDER BY avg_rating DESC, total_reviews DESC;`,
      preview: {
        columns: ["book_id", "title", "avg_rating", "total_reviews"],
        rows: [
          [104, "Clean Code", "4.85 ★", "64 reviews"],
          [105, "Python Crash Course", "4.78 ★", "48 reviews"],
          [102, "1984", "4.65 ★", "92 reviews"],
          [101, "The Great Gatsby", "4.40 ★", "57 reviews"],
          [103, "To Kill a Mockingbird", "4.35 ★", "39 reviews"],
        ],
        executionTime: "14ms",
        rowCount: 5,
      },
    },
    {
      id: "schema-ddl",
      title: "Relational Schema Definition",
      concept: "DDL & Foreign Keys",
      description: "Defines normalized tables with primary keys and foreign key constraints.",
      sql: `-- Create normalized relational table with integrity constraints
CREATE TABLE Order_Items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    book_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(8, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Books(book_id)
);`,
      preview: {
        columns: ["column_name", "data_type", "nullable", "key_type", "extra / constraint"],
        rows: [
          ["item_id", "INT", "NO", "PRI", "AUTO_INCREMENT"],
          ["order_id", "INT", "NO", "MUL", "FK -> Orders(order_id)"],
          ["book_id", "INT", "NO", "MUL", "FK -> Books(book_id)"],
          ["quantity", "INT", "NO", "—", "CHECK (quantity > 0)"],
          ["unit_price", "DECIMAL(8,2)", "NO", "—", "NOT NULL"],
        ],
        executionTime: "9ms",
        rowCount: 5,
      },
    },
  ];

  const handleCopy = (sqlText: string) => {
    navigator.clipboard.writeText(sqlText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunQuery = () => {
    setIsExecuting(true);
    setViewMode("preview");
    setTimeout(() => {
      setIsExecuting(false);
    }, 280);
  };

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-20 border-b border-[#E4DFD3] dark:border-[#383834]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Bold Green Line */}
        <SectionHeading title="Projects" id="projects" />

        {/* PRIMARY FEATURED PROJECT: Online Bookstore Database */}
        <motion.div 
          id="project-online-bookstore"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-xl bg-white/90 dark:bg-[#20201D] p-6 sm:p-8 shadow-2xs hover:shadow-md transition-all duration-300 text-left mb-8"
        >
          {/* Header Row: Title, Badges, and GitHub Action Button */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[#E4DFD3] dark:border-[#383834]">
            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-lg bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 transition-colors duration-200">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2B2B28] dark:text-[#F5F3EC]">
                    Online Bookstore Database
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FAF7F0] dark:bg-[#262622] text-[#3F5D4E] dark:text-[#6EE7B7] border border-[#E4DFD3] dark:border-[#383834]">
                    <Sparkles className="w-3 h-3" />
                    Featured SQL Project
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#3F5D4E] dark:text-[#6EE7B7]">
                  Relational Database Architecture &amp; SQL Query Engineering
                </p>
              </div>
            </div>

            {/* GitHub Primary Button */}
            <motion.a
              id="btn-github-bookstore"
              href="https://github.com/ibrahimkhan-data/online-bookstore-sql"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs sm:text-sm text-white bg-[#3F5D4E] hover:bg-[#2F4739] hover:shadow-sm transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-xs group/btn"
            >
              <Github className="w-4 h-4 group-hover/btn:rotate-6 transition-transform" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Project Overview & Narrative */}
          <div className="py-5 border-b border-[#E4DFD3] dark:border-[#383834]">
            <p className="text-sm sm:text-base text-[#2B2B28] dark:text-[#F5F3EC] leading-relaxed mb-3 text-justify">
              An end-to-end SQL project modeling a relational bookstore ecosystem, featuring structured database design, data integrity enforcement, table relationships, and complex analytical queries to solve practical business problems.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#6B6B63] dark:text-[#A6A49B]">
              <span className="flex items-center gap-1.5 font-medium">
                <FileCode2 className="w-3.5 h-3.5 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                <code className="text-[#2B2B28] dark:text-[#F5F3EC]">Online_Bookstore_Database_Project.sql</code>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <GitBranch className="w-3.5 h-3.5 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                Repository: <span className="text-[#2B2B28] dark:text-[#F5F3EC] font-semibold">ibrahimkhan-data / online-bookstore-sql</span>
              </span>
            </div>
          </div>

          {/* Database Tables Section */}
          <div className="py-5 border-b border-[#E4DFD3] dark:border-[#383834]">
            <div className="flex items-center space-x-2 mb-3">
              <Table2 className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7]" />
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7]">
                Normalized Database Tables (5 Relational Entities)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {databaseTables.map((table) => (
                <div
                  key={table.name}
                  className="p-3 rounded-lg bg-[#FAF7F0] dark:bg-[#1C1C19] border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-[#2B2B28] dark:text-[#F5F3EC] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7]" />
                      {table.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6B63] dark:text-[#A6A49B] mb-2 leading-snug">
                    {table.description}
                  </p>
                  <span className="text-[11px] font-mono font-medium text-[#3F5D4E] dark:text-[#6EE7B7] bg-[#F3EEE3] dark:bg-[#282824] px-1.5 py-0.5 rounded border border-[#E4DFD3] dark:border-[#383834] inline-block">
                    {table.keys}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SQL Concepts: 2 Columns & 4 Rows */}
          <div className="py-5 border-b border-[#E4DFD3] dark:border-[#383834]">
            <div className="flex items-center space-x-2 mb-3">
              <Layers className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7]" />
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7]">
                SQL Concepts &amp; Query Mechanisms Applied
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {/* Column 1: 4 Rows */}
              <div className="space-y-2">
                {sqlConceptsCol1.map((concept) => (
                  <div 
                    key={concept.name}
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-xs hover:border-[#3F5D4E]/50 transition-colors"
                  >
                    <div className="flex items-center space-x-2 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] shrink-0" aria-hidden="true" />
                      <span className="font-bold text-[#3F5D4E] dark:text-[#6EE7B7]">{concept.name}</span>
                    </div>
                    <span className="text-[#2B2B28] dark:text-[#F5F3EC] text-right font-medium text-[11.5px] sm:text-xs">
                      {concept.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2: 4 Rows (Remaining) */}
              <div className="space-y-2">
                {sqlConceptsCol2.map((concept) => (
                  <div 
                    key={concept.name}
                    className="flex items-center justify-between px-3 py-2 rounded-md bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-xs hover:border-[#3F5D4E]/50 transition-colors"
                  >
                    <div className="flex items-center space-x-2 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] shrink-0" aria-hidden="true" />
                      <span className="font-bold text-[#3F5D4E] dark:text-[#6EE7B7]">{concept.name}</span>
                    </div>
                    <span className="text-[#2B2B28] dark:text-[#F5F3EC] text-right font-medium text-[11.5px] sm:text-xs">
                      {concept.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive SQL Query Showcase */}
          <div className="pt-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#3F5D4E] dark:text-[#6EE7B7]">
                  Interactive Query Showcase
                </h4>
              </div>
              <span className="text-xs text-[#6B6B63] dark:text-[#A6A49B]">
                Sample analytical queries implemented in the project
              </span>
            </div>

            {/* Query Selection Tabs */}
            <div className="flex flex-wrap gap-1.5 mb-3 p-1 rounded-lg bg-[#FAF7F0] dark:bg-[#1C1C19] border border-[#E4DFD3] dark:border-[#383834]">
              {sampleQueries.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setActiveQueryIndex(idx)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    activeQueryIndex === idx
                      ? "bg-[#3F5D4E] text-white shadow-2xs"
                      : "text-[#6B6B63] dark:text-[#A6A49B] hover:text-[#2B2B28] dark:hover:text-[#F5F3EC] hover:bg-white/60 dark:hover:bg-[#282824]"
                  }`}
                >
                  {q.title}
                </button>
              ))}
            </div>

            {/* Active Query Box with SQL Code and Interactive Result Preview */}
            <div className="relative rounded-lg overflow-hidden border border-[#E4DFD3] dark:border-[#383834] bg-[#1E1E1C] text-[#FAF7F0] shadow-md">
              {/* Box Header Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-[#171715] border-b border-[#2C2C28] text-xs">
                {/* Query Info & Concept */}
                <div className="flex items-center space-x-2 text-[#A6A49B] mr-4 min-w-0">
                  <Code2 className="w-3.5 h-3.5 text-[#6EE7B7] shrink-0" />
                  <span className="font-semibold text-white whitespace-nowrap">
                    {sampleQueries[activeQueryIndex].title}
                  </span>
                  <span className="text-[#6B6B63]">•</span>
                  <span className="text-[#6EE7B7] font-mono text-[11px] whitespace-nowrap">
                    {sampleQueries[activeQueryIndex].concept}
                  </span>
                </div>
                
                {/* Actions & View Switcher - Aligned to right */}
                <div className="ml-auto flex items-center gap-2 shrink-0">
                  {/* View Mode Switcher */}
                  <div className="inline-flex p-0.5 rounded-md bg-[#252522] border border-[#383834]">
                    <button
                      onClick={() => setViewMode("code")}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                        viewMode === "code"
                          ? "bg-[#3F5D4E] text-white shadow-2xs"
                          : "text-[#A6A49B] hover:text-white"
                      }`}
                    >
                      <Code2 className="w-3 h-3" />
                      <span>SQL Query</span>
                    </button>

                    <button
                      onClick={() => setViewMode("preview")}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-all cursor-pointer ${
                        viewMode === "preview"
                          ? "bg-[#3F5D4E] text-white shadow-2xs"
                          : "text-[#A6A49B] hover:text-white"
                      }`}
                    >
                      <Rows3 className="w-3 h-3 text-[#6EE7B7]" />
                      <span>Result Preview</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6EE7B7] animate-pulse" />
                    </button>
                  </div>

                  {/* Copy icon-only button */}
                  {viewMode === "code" ? (
                    <button
                      onClick={() => handleCopy(sampleQueries[activeQueryIndex].sql)}
                      className="inline-flex items-center justify-center p-1.5 rounded bg-[#252522] hover:bg-[#2F2F2B] text-[#A6A49B] hover:text-white border border-[#383834] transition-colors cursor-pointer"
                      title={copied ? "Copied to clipboard!" : "Copy SQL Query"}
                      aria-label="Copy SQL Query"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={handleRunQuery}
                      disabled={isExecuting}
                      className="inline-flex items-center justify-center p-1.5 rounded bg-[#252522] hover:bg-[#32322D] text-[#6EE7B7] border border-[#383834] transition-colors cursor-pointer"
                      title="Re-run query"
                      aria-label="Re-run query"
                    >
                      <RotateCcw className={`w-3.5 h-3.5 ${isExecuting ? "animate-spin" : ""}`} />
                    </button>
                  )}
                </div>
              </div>

              {/* View Mode 1: SQL Code */}
              {viewMode === "code" && (
                <div>
                  <div className="p-4 font-mono text-xs overflow-x-auto leading-relaxed text-[#EAE3D5]">
                    <pre>
                      <code>{sampleQueries[activeQueryIndex].sql}</code>
                    </pre>
                  </div>
                  <div className="flex items-center justify-between px-4 py-2 bg-[#171715]/70 border-t border-[#2C2C28] text-[11px] text-[#A6A49B]">
                    <span>{sampleQueries[activeQueryIndex].description}</span>
                    <button
                      onClick={handleRunQuery}
                      className="text-[#6EE7B7] hover:underline font-semibold cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>View live result table</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}

              {/* View Mode 2: Interactive Query Output / Result Preview */}
              {viewMode === "preview" && (
                <div>
                  {isExecuting ? (
                    <div className="py-12 flex flex-col items-center justify-center space-y-3 text-[#A6A49B]">
                      <RotateCcw className="w-6 h-6 animate-spin text-[#6EE7B7]" />
                      <p className="text-xs font-mono">Executing query &amp; compiling relational result set...</p>
                    </div>
                  ) : (
                    <div>
                      {/* Live Status Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 bg-[#151513] border-b border-[#2C2C28] text-[11px] font-mono text-[#A6A49B]">
                        <div className="flex items-center space-x-2">
                          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            Status: 200 OK
                          </span>
                          <span className="text-[#4E4E46]">•</span>
                          <span>Execution: {sampleQueries[activeQueryIndex].preview.executionTime}</span>
                          <span className="text-[#4E4E46]">•</span>
                          <span>{sampleQueries[activeQueryIndex].preview.rowCount} rows returned</span>
                        </div>
                        <div className="text-[10px] text-[#787870] uppercase tracking-wider">
                          Dialect: MySQL 8.0 / PostgreSQL
                        </div>
                      </div>

                      {/* Interactive Result Table */}
                      <div className="overflow-x-auto max-h-72">
                        <table className="w-full text-left font-mono text-xs border-collapse">
                          <thead>
                            <tr className="bg-[#181815] border-b border-[#2C2C28]">
                              {sampleQueries[activeQueryIndex].preview.columns.map((col, cIdx) => (
                                <th 
                                  key={cIdx}
                                  className="py-2.5 px-3.5 text-[11px] uppercase tracking-wider font-bold text-[#6EE7B7] whitespace-nowrap"
                                >
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#262622]">
                            {sampleQueries[activeQueryIndex].preview.rows.map((row, rIdx) => (
                              <tr 
                                key={rIdx}
                                className="hover:bg-[#252522] transition-colors"
                              >
                                {row.map((cell, cIdx) => (
                                  <td 
                                    key={cIdx}
                                    className="py-2 px-3.5 text-[#FAF7F0] whitespace-nowrap text-[11.5px]"
                                  >
                                    {typeof cell === "string" && cell.startsWith("$") ? (
                                      <span className="text-emerald-300 font-semibold">{cell}</span>
                                    ) : typeof cell === "string" && cell.includes("★") ? (
                                      <span className="text-amber-300 font-semibold">{cell}</span>
                                    ) : (
                                      cell
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Result Footer */}
                      <div className="flex items-center justify-between px-4 py-2 bg-[#171715] border-t border-[#2C2C28] text-[11px] text-[#A6A49B]">
                        <span className="truncate pr-2">
                          Output produced by <span className="text-white font-mono">{sampleQueries[activeQueryIndex].title}</span>
                        </span>
                        <button
                          onClick={() => setViewMode("code")}
                          className="text-[#6EE7B7] hover:underline font-semibold cursor-pointer shrink-0"
                        >
                          Switch back to SQL code &rarr;
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* MACHINE LEARNING PROJECT: Customer Churn Prediction */}
        <motion.div 
          id="project-customer-churn-prediction"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-xl bg-white/90 dark:bg-[#20201D] p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-300 text-left mb-8"
        >
          {/* Header Row: Title, Subtitle, Badges & GitHub Button */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#E4DFD3] dark:border-[#383834]">
            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-lg bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 transition-colors duration-200">
                <LineChart className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2B2B28] dark:text-[#F5F3EC]">
                    Customer Churn Prediction
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FAF7F0] dark:bg-[#262622] text-[#3F5D4E] dark:text-[#6EE7B7] border border-[#E4DFD3] dark:border-[#383834]">
                    <Sparkles className="w-3 h-3 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                    Machine Learning · Streamlit
                  </span>
                  <span className="text-xs text-[#6B6B63] dark:text-[#A6A49B] font-mono">
                    17-9-2026 – 19-9-2026
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#3F5D4E] dark:text-[#6EE7B7]">
                  Telco Churn Modeling, Risk Scoring &amp; Explainable AI Dashboard
                </p>
              </div>
            </div>

            {/* GitHub Primary Button */}
            <motion.a
              id="btn-github-customer-churn"
              href="https://github.com/ibrahimkhan-data/Customer-Churn-Prediction"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs sm:text-sm text-white bg-[#3F5D4E] hover:bg-[#2F4739] hover:shadow-sm transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-xs group/btn"
            >
              <Github className="w-4 h-4 group-hover/btn:rotate-6 transition-transform" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Project Overview & Concise Description */}
          <div className="pt-4 space-y-3.5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#6B6B63] dark:text-[#A6A49B]">
              <span className="px-2.5 py-1 rounded bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] font-semibold text-[#2B2B28] dark:text-[#F5F3EC]">
                Stack: Python · Scikit-Learn · Streamlit · Logistic Regression · XGBoost · Pandas
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#2B2B28] dark:text-[#F5F3EC] leading-relaxed text-justify">
              Predicted churn across ~7,000 telecommunications customers utilizing Logistic Regression (ROC-AUC ~0.84). Deployed an interactive Streamlit application serving real-time 0–100% risk predictions with explainable positive and negative risk factors, outperforming Random Forest (~0.83) and XGBoost (~0.82) while preserving full model interpretability.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-[#3F5D4E] dark:text-[#6EE7B7] font-semibold">
                ✓ ROC-AUC ~0.84 with Logistic Regression
              </span>
              <span className="px-2.5 py-1 rounded bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-[#3F5D4E] dark:text-[#6EE7B7] font-semibold">
                ✓ Real-Time 0–100% Risk Scoring App
              </span>
              <span className="px-2.5 py-1 rounded bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-[#3F5D4E] dark:text-[#6EE7B7] font-semibold">
                ✓ Model Interpretability &amp; Factor Breakdown
              </span>
            </div>
          </div>
        </motion.div>

        {/* DATA SCIENCE PROJECT: Heart Disease Exploratory Data Analysis (EDA) */}
        <motion.div 
          id="project-heart-disease-eda"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-xl bg-white/90 dark:bg-[#20201D] p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-300 text-left mb-8"
        >
          {/* Header Row: Title, Subtitle, Badges & GitHub Button */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-[#E4DFD3] dark:border-[#383834]">
            <div className="flex items-start space-x-3.5">
              <div className="p-3 rounded-lg bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 transition-colors duration-200">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#2B2B28] dark:text-[#F5F3EC]">
                    Heart Disease Exploratory Data Analysis (EDA)
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FAF7F0] dark:bg-[#262622] text-[#3F5D4E] dark:text-[#6EE7B7] border border-[#E4DFD3] dark:border-[#383834]">
                    <Sparkles className="w-3 h-3 text-[#3F5D4E] dark:text-[#6EE7B7]" />
                    Data Science · EDA
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#3F5D4E] dark:text-[#6EE7B7]">
                  Clinical Risk Factor Analysis &amp; Statistical Visualization
                </p>
              </div>
            </div>

            {/* GitHub Primary Button */}
            <motion.a
              id="btn-github-heart-disease-eda"
              href="https://github.com/ibrahimkhan-data/Heart-Disease-EDA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-xs sm:text-sm text-white bg-[#3F5D4E] hover:bg-[#2F4739] hover:shadow-sm transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-xs group/btn"
            >
              <Github className="w-4 h-4 group-hover/btn:rotate-6 transition-transform" />
              <span>View on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Project Overview & Concise Description */}
          <div className="pt-4 space-y-3.5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#6B6B63] dark:text-[#A6A49B]">
              <span className="px-2.5 py-1 rounded bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] font-semibold text-[#2B2B28] dark:text-[#F5F3EC]">
                Stack: Python · Pandas · NumPy · Seaborn · Matplotlib · Jupyter
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#2B2B28] dark:text-[#F5F3EC] leading-relaxed text-justify">
              An exploratory data analysis of clinical heart disease metrics. Analyzes key indicators—including cholesterol, resting blood pressure, chest pain types, and maximum heart rate—to identify primary risk patterns, outlier distributions, and feature correlations through statistical visualization.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-[#3F5D4E] dark:text-[#6EE7B7] font-semibold">
                ✓ Data Cleaning &amp; Missing Value Treatment
              </span>
              <span className="px-2.5 py-1 rounded bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-[#3F5D4E] dark:text-[#6EE7B7] font-semibold">
                ✓ Distribution Analysis &amp; Correlation Heatmaps
              </span>
              <span className="px-2.5 py-1 rounded bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-[#3F5D4E] dark:text-[#6EE7B7] font-semibold">
                ✓ Cardiovascular Risk Factor Insights
              </span>
            </div>
          </div>
        </motion.div>

        {/* Development Pipeline & Upcoming Projects Box */}
        <motion.div 
          id="projects-pipeline-card"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -2 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group border border-[#E4DFD3] dark:border-[#383834] hover:border-[#3F5D4E]/60 dark:hover:border-[#4E7260] rounded-lg bg-white/70 dark:bg-[#20201D] p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300 text-left"
        >
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-md bg-[#F3EEE3] dark:bg-[#2C2C28] text-[#3F5D4E] dark:text-[#6EE7B7] group-hover:bg-[#3F5D4E] group-hover:text-white dark:group-hover:bg-[#6EE7B7] dark:group-hover:text-[#171715] shrink-0 mt-0.5 transition-colors duration-200">
                <FolderGit2 className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#2B2B28] dark:text-[#F5F3EC]">
                  Project Pipeline &amp; Active Development
                </h4>
                <p className="text-xs sm:text-sm text-[#6B6B63] dark:text-[#A6A49B] mt-0.5">
                  Currently building machine learning pipelines and exploratory data analysis repositories.
                </p>
              </div>
            </div>

            {/* Stages Flow: strictly in ONE line across all screens */}
            <div 
              id="projects-pipeline-row"
              className="grid grid-cols-4 gap-1.5 sm:gap-3 text-xs font-semibold pt-1"
            >
              {[
                { stage: "Learning", step: "01" },
                { stage: "Building", step: "02" },
                { stage: "Testing", step: "03" },
                { stage: "Publishing", step: "04" },
              ].map((item, idx) => (
                <div key={item.stage} className="relative flex items-center">
                  <div className="w-full flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 sm:px-2.5 rounded-md bg-[#FAF7F0] dark:bg-[#262622] border border-[#E4DFD3] dark:border-[#383834] text-[#3F5D4E] dark:text-[#6EE7B7] hover:bg-[#3F5D4E] hover:text-white dark:hover:bg-[#6EE7B7] dark:hover:text-[#171715] hover:border-transparent transition-all cursor-default shadow-2xs text-center">
                    <span className="text-[10px] font-mono opacity-70 hidden sm:inline">{item.step}</span>
                    <span className="truncate text-xs sm:text-sm font-semibold">{item.stage}</span>
                  </div>
                  {idx < 3 && (
                    <span 
                      className="hidden md:inline-block absolute -right-2 text-[#6B6B63] dark:text-[#A6A49B] select-none text-xs z-10 font-bold pointer-events-none" 
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

