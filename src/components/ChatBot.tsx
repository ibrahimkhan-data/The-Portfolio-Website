import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RotateCcw,
  Copy,
  Check,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage } from "../types";
import { getSmartPortfolioAnswer } from "../utils/portfolioKnowledge";
import { CirclingBorder } from "./CirclingBorder";

const INITIAL_GREETING: ChatMessage = {
  id: "init-1",
  role: "model",
  content:
    "Hi! I'm Ibrahim's AI assistant. Ask me about his projects, skills, or what he's currently learning.",
  timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
};

const SUGGESTED_QUERIES = [
  "What projects has Ibrahim built?",
  "Tell me about his IRABOT internship",
  "What roles is Ibrahim targeting?",
  "What is his educational background?",
];

export const openChatbot = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-chatbot"));
  }
};

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-chatbot", handleOpen);
    return () => window.removeEventListener("open-chatbot", handleOpen);
  }, []);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("ibrahim_portfolio_chat");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            // Upgrade any unformatted fallback messages or misaligned generic bios to crisp structured markdown
            return parsed.map((m: ChatMessage, idx: number) => {
              if (m.role === "model") {
                const prevUserMsg = parsed
                  .slice(0, idx)
                  .reverse()
                  .find((item: ChatMessage) => item.role === "user");

                if (prevUserMsg && prevUserMsg.content) {
                  const qLower = prevUserMsg.content.toLowerCase();
                  if (
                    (qLower.includes("role") || qLower.includes("target")) &&
                    m.content.includes("About Ibrahim Khan")
                  ) {
                    return {
                      ...m,
                      content: getSmartPortfolioAnswer(prevUserMsg.content),
                    };
                  }
                  if (
                    m.content.includes(
                      "Ibrahim is currently a final-year AI & Data Science student (CGPA 8.4) with strong Python, SQL, and robotics"
                    )
                  ) {
                    return {
                      ...m,
                      content: getSmartPortfolioAnswer(prevUserMsg.content),
                    };
                  }
                }
              }
              return m;
            });
          }
        } catch {
          // ignore parsing errors
        }
      }
    }
    return [INITIAL_GREETING];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const latestModelMessageRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Save conversation history to local storage
  useEffect(() => {
    localStorage.setItem("ibrahim_portfolio_chat", JSON.stringify(messages));
  }, [messages]);

  // Intelligent auto-scroll:
  // - While loading or when user asks, scroll to bottom to show input & typing dots.
  // - When assistant response arrives, scroll directly to the START of the answer.
  useEffect(() => {
    if (!isOpen) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const lastMessage = messages[messages.length - 1];

    if (isLoading || (lastMessage && lastMessage.role === "user")) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    } else if (lastMessage && lastMessage.role === "model") {
      // Delay slightly for ReactMarkdown and DOM layout to render completely
      const timer = setTimeout(() => {
        if (latestModelMessageRef.current && container) {
          const containerRect = container.getBoundingClientRect();
          const targetRect = latestModelMessageRef.current.getBoundingClientRect();
          const targetScrollTop =
            targetRect.top - containerRect.top + container.scrollTop - 14;

          container.scrollTo({
            top: Math.max(0, targetScrollTop),
            behavior: "smooth",
          });
        }
      }, 60);

      return () => clearTimeout(timer);
    }
  }, [messages, isLoading, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageText = (textToSend ?? input).trim();
    if (!messageText || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3200);

    try {
      // Prepare history formatted for API
      const apiMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const botReply: ChatMessage = {
        id: `model-${Date.now()}`,
        role: "model",
        content: data.reply || getSmartPortfolioAnswer(messageText),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err: any) {
      clearTimeout(timeoutId);
      console.warn("Chat API timed out or errored, rendering instantaneous markdown:", err?.message);
      
      const markdownReply: ChatMessage = {
        id: `model-${Date.now()}`,
        role: "model",
        content: getSmartPortfolioAnswer(messageText),
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, markdownReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearHistory = () => {
    setMessages([INITIAL_GREETING]);
    localStorage.removeItem("ibrahim_portfolio_chat");
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {!isOpen && (
          <motion.button
            type="button"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 dark:bg-[#1C201C]/95 border border-[#2F4739]/20 dark:border-[#6EE7B7]/25 shadow-lg backdrop-blur-sm text-xs text-[#2B2B28] dark:text-[#EAE3D5] cursor-pointer hover:shadow-xl transition-all"
            aria-label="Open AI Assistant"
          >
            <CirclingBorder
              repeat={true}
              activeDurationMs={3000}
              pauseDurationMs={10000}
              strokeWidth={1.75}
            />
            <Sparkles className="w-3.5 h-3.5 text-[#2F4739] dark:text-[#6EE7B7] animate-pulse" />
            <span>Ask Ibrahim&apos;s AI</span>
          </motion.button>
        )}

        <motion.button
          id="chatbot-toggle-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`relative p-3.5 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center ${
            isOpen
              ? "bg-[#2F4739] dark:bg-[#6EE7B7] text-white dark:text-[#111A14]"
              : "bg-[#2F4739] text-white hover:bg-[#25392d] dark:bg-[#6EE7B7] dark:text-[#111A14] dark:hover:bg-[#5cd4a5]"
          }`}
          aria-label={isOpen ? "Close AI Chat" : "Open AI Chat"}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3F5D4E] dark:bg-[#6EE7B7] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#3F5D4E] dark:bg-[#6EE7B7] ring-2 ring-[#FAF7F0] dark:ring-[#171715]"></span>
              </span>
            </>
          )}
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[560px] max-h-[calc(100vh-7rem)] flex flex-col rounded-2xl bg-white dark:bg-[#161B17] border border-[#2F4739]/20 dark:border-[#6EE7B7]/25 shadow-2xl overflow-hidden backdrop-blur-md"
          >
            {/* Chat Header */}
            <div className="px-4 py-3.5 bg-gradient-to-r from-[#2F4739] to-[#1E2E25] dark:from-[#111A14] dark:to-[#1A261E] text-white flex items-center justify-between border-b border-[#2F4739]/30 dark:border-[#6EE7B7]/20">
              <div className="flex items-center gap-2.5">
                <div className="relative p-1.5 rounded-lg bg-[#6EE7B7]/15 border border-[#6EE7B7]/30 text-[#6EE7B7]">
                  <Bot className="w-5 h-5" />
                  <span className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-[#6EE7B7] ring-1 ring-[#111A14]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm tracking-wide text-white">
                      Ibrahim&apos;s AI Assistant
                    </h3>
                  </div>
                  <p className="text-[11px] text-white/70">
                    Trained on projects, skills & experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  id="chatbot-clear-button"
                  onClick={handleClearHistory}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Reset conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  id="chatbot-close-button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close chat"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conversation Thread */}
            {(() => {
              const lastModelIndex = messages.map((m) => m.role).lastIndexOf("model");
              return (
                <div
                  ref={scrollContainerRef}
                  className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm"
                >
                  {messages.map((msg, idx) => {
                    const isUser = msg.role === "user";
                    const isLatestModel = !isUser && idx === lastModelIndex;
                    return (
                      <div
                        key={msg.id}
                        ref={isLatestModel ? latestModelMessageRef : null}
                        className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                      >
                    {/* Avatar */}
                    <div
                      className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
                        isUser
                          ? "bg-[#2F4739] dark:bg-[#6EE7B7] text-white dark:text-[#111A14]"
                          : "bg-[#EAE3D5] dark:bg-[#232D24] text-[#2F4739] dark:text-[#6EE7B7] border border-[#2F4739]/15 dark:border-[#6EE7B7]/20"
                      }`}
                    >
                      {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`relative group max-w-[82%] rounded-2xl px-3.5 py-2.5 shadow-sm leading-relaxed ${
                        isUser
                          ? "bg-[#2F4739] text-white rounded-tr-xs"
                          : "bg-[#F5F3EC] dark:bg-[#1C231D] text-[#2B2B28] dark:text-[#EAE3D5] border border-[#2F4739]/10 dark:border-[#6EE7B7]/15 rounded-tl-xs"
                      }`}
                    >
                      {isUser ? (
                        <p className="whitespace-pre-wrap break-words text-xs sm:text-[13px]">{msg.content}</p>
                      ) : (
                        <div className="chat-markdown text-xs sm:text-[13px] leading-relaxed break-words space-y-1.5">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              h1: ({ children }) => (
                                <h3 className="font-bold text-sm sm:text-base mt-2 mb-1.5 text-[#2B2B28] dark:text-[#F5F3EC] pb-1 border-b border-[#E4DFD3] dark:border-[#383834]">
                                  {children}
                                </h3>
                              ),
                              h2: ({ children }) => (
                                <h4 className="font-bold text-xs sm:text-sm mt-2 mb-1 text-[#3F5D4E] dark:text-[#6EE7B7]">
                                  {children}
                                </h4>
                              ),
                              h3: ({ children }) => (
                                <h5 className="font-bold text-xs sm:text-sm mt-1.5 mb-1 text-[#2B2B28] dark:text-[#F5F3EC] pb-0.5 border-b border-[#E4DFD3]/60 dark:border-[#383834]/60">
                                  {children}
                                </h5>
                              ),
                              p: ({ children }) => (
                                <p className="my-1.5 leading-relaxed text-[#2B2B28] dark:text-[#EAE3D5]">{children}</p>
                              ),
                              ul: ({ children }) => (
                                <ul className="my-1.5 pl-4 list-disc space-y-1 marker:text-[#3F5D4E] dark:marker:text-[#6EE7B7] text-[#2B2B28] dark:text-[#EAE3D5]">{children}</ul>
                              ),
                              ol: ({ children }) => (
                                <ol className="my-1.5 pl-4 list-decimal space-y-1 marker:text-[#3F5D4E] dark:marker:text-[#6EE7B7] text-[#2B2B28] dark:text-[#EAE3D5]">{children}</ol>
                              ),
                              li: ({ children }) => (
                                <li className="pl-0.5 leading-relaxed text-[#2B2B28] dark:text-[#EAE3D5]">{children}</li>
                              ),
                              strong: ({ children }) => (
                                <strong className="font-semibold text-[#1B2920] dark:text-white">
                                  {children}
                                </strong>
                              ),
                              em: ({ children }) => (
                                <em className="italic opacity-85 text-[11px] sm:text-xs">
                                  {children}
                                </em>
                              ),
                              a: ({ href, children }) => (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-[#3F5D4E] dark:text-[#6EE7B7] underline underline-offset-2 hover:opacity-80 inline-flex items-center gap-0.5"
                                >
                                  {children}
                                </a>
                              ),
                              code: ({ children }) => (
                                <code className="px-1 py-0.5 rounded text-[11px] font-mono bg-black/5 dark:bg-white/10 text-[#3F5D4E] dark:text-[#6EE7B7]">
                                  {children}
                                </code>
                              ),
                            }}
                          >
                            {msg.content}
                          </ReactMarkdown>
                        </div>
                      )}

                      <div className="mt-1 flex items-center justify-between gap-3 text-[10px] text-[#2B2B28]/50 dark:text-[#EAE3D5]/50">
                        <span>{msg.timestamp}</span>

                        {!isUser && (
                          <button
                            onClick={() => copyToClipboard(msg.content, msg.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 hover:text-[#2F4739] dark:hover:text-[#6EE7B7]"
                            title="Copy message"
                            aria-label="Copy message"
                          >
                            {copiedId === msg.id ? (
                              <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-[#EAE3D5] dark:bg-[#232D24] text-[#2F4739] dark:text-[#6EE7B7] flex items-center justify-center border border-[#2F4739]/15 dark:border-[#6EE7B7]/20">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-[#F5F3EC] dark:bg-[#1C231D] border border-[#2F4739]/10 dark:border-[#6EE7B7]/15 rounded-2xl rounded-tl-xs px-4 py-3 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F4739] dark:bg-[#6EE7B7] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F4739] dark:bg-[#6EE7B7] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F4739] dark:bg-[#6EE7B7] animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
              );
            })()}

            {/* Quick Suggestions Chips */}
            {messages.length < 3 && (
              <div className="px-3 pb-2 pt-1 flex flex-wrap gap-1.5 border-t border-[#2F4739]/10 dark:border-[#6EE7B7]/10 bg-white/60 dark:bg-[#161B17]/60">
                {SUGGESTED_QUERIES.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendMessage(q)}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#EAE3D5]/70 hover:bg-[#EAE3D5] dark:bg-[#232D24] dark:hover:bg-[#2F3E31] text-[#2F4739] dark:text-[#6EE7B7] border border-[#2F4739]/15 dark:border-[#6EE7B7]/20 transition-all text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div className="p-3 bg-white dark:bg-[#161B17] border-t border-[#2F4739]/15 dark:border-[#6EE7B7]/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  id="chatbot-message-input"
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about skills, projects, or experience..."
                  disabled={isLoading}
                  className="flex-1 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F3EC] dark:bg-[#202721] text-[#2B2B28] dark:text-[#EAE3D5] placeholder:text-[#2B2B28]/45 dark:placeholder:text-[#EAE3D5]/45 border border-[#2F4739]/15 dark:border-[#6EE7B7]/20 focus:outline-none focus:ring-2 focus:ring-[#2F4739] dark:focus:ring-[#6EE7B7] transition-all disabled:opacity-50"
                />
                <button
                  id="chatbot-send-button"
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2.5 rounded-xl bg-[#2F4739] hover:bg-[#25392d] text-white dark:bg-[#6EE7B7] dark:hover:bg-[#5cd4a5] dark:text-[#111A14] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm flex items-center justify-center shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="mt-1.5 text-[10px] text-center text-[#2B2B28]/50 dark:text-[#EAE3D5]/50">
                Ibrahim&apos;s Assistant · Inquiries & questions:{" "}
                <a
                  href="mailto:ibrahimcorelab@gmail.com"
                  className="underline hover:text-[#2F4739] dark:hover:text-[#6EE7B7]"
                >
                  ibrahimcorelab@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
