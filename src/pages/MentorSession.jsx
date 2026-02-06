import { useState, useEffect, useRef } from "react";
import { sendMentorMessage } from "../api/mentorApi";
import { useMentorStore } from "../store/mentorStore";
import { useLocation } from "react-router-dom";

export default function MentorSession() {
  const { sessionId, skill, mode, updateProgress } = useMentorStore();
  const location = useLocation();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Initial mentor message
  useEffect(() => {
    if (location.state?.initialMessage) {
      setMessages([{ role: "mentor", text: location.state.initialMessage }]);
    }
  }, [location]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");
    setMessages((m) => [...m, { role: "student", text: userMsg }]);
    setLoading(true);

    try {
      const res = await sendMentorMessage(sessionId, userMsg);
      setMessages((m) => [...m, { role: "mentor", text: res.mentor_message }]);
      updateProgress(res);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-gray-200 flex flex-col">

      {/* ================= STICKY TOP BAR ================= */}
      <div className="sticky top-0 z-30 bg-[#0B0F1A] border-b border-gray-800">
        <div className="flex items-center gap-4 px-6 py-4">
          <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            M
          </div>

          <div>
            <h1 className="text-white text-lg font-semibold">AI Mentor</h1>
            <p className="text-sm text-gray-400">
              {skill} · {mode}
            </p>
          </div>
        </div>
      </div>

      {/* ================= CHAT MESSAGES ================= */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-xl p-4 rounded-2xl ${
              m.role === "mentor"
                ? "bg-gray-900 border border-gray-800"
                : "bg-indigo-600 text-white ml-auto"
            }`}
          >
            {m.text}
          </div>
        ))}

        {loading && (
          <div className="text-gray-400 text-sm animate-pulse">
            Mentor is thinking…
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* ================= STICKY INPUT BAR ================= */}
      <div className="sticky bottom-0 z-30 bg-[#0B0F1A] border-t border-gray-800 p-5 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Your answer…"
          className="
            flex-1
            bg-gray-900
            border border-gray-700
            text-gray-200
            placeholder-gray-500
            px-4 py-3
            rounded-lg
            focus:outline-none
            focus:border-indigo-500
          "
        />
        <button
          onClick={send}
          className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
