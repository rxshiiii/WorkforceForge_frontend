import { useNavigate } from "react-router-dom";
import { startMentorSession } from "../api/mentorApi";
import { useMentorStore } from "../store/mentorStore";
import { useState } from "react";

export default function ModeSelect() {
  const navigate = useNavigate();
  const { skill, startSession } = useMentorStore();
  const [loading, setLoading] = useState(false);
  const [loadingMode, setLoadingMode] = useState(null);

  async function choose(mode) {
    if (loading) return;

    try {
      setLoading(true);
      setLoadingMode(mode);

      const res = await startMentorSession(skill, mode);

      startSession({
        sessionId: res.session_id,
        skill,
        mode,
      });

      navigate("/mentor", { state: { initialMessage: res.mentor_message } });
    } finally {
      setLoading(false);
      setLoadingMode(null);
    }
  }

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-gray-200 relative overflow-hidden">

      {/* ================= LOADER OVERLAY ================= */}
      {loading && (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-white text-lg font-medium">
              Mentor is preparing your{" "}
              <span className="text-indigo-400 capitalize">
                {loadingMode}
              </span>{" "}
              session…
            </p>
          </div>
        </div>
      )}

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          How do you want to learn?
        </h1>

        <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-5xl w-full">

          {/* Learn */}
          <ModeCard
            title="Learn"
            description="Understand concepts from first principles."
            onClick={() => choose("learn")}
            disabled={loading}
          />

          {/* Practice */}
          <ModeCard
            title="Practice"
            description="Solve tricky and realistic problems."
            onClick={() => choose("practice")}
            disabled={loading}
          />

          {/* Test */}
          <ModeCard
            title="Test"
            description="Hard evaluation. No hints."
            onClick={() => choose("test")}
            disabled={loading}
          />

        </div>
      </div>
    </div>
  );
}

/* ================= MODE CARD ================= */
function ModeCard({ title, description, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-8
        rounded-2xl
        text-left
        relative
        bg-gradient-to-br
        from-indigo-500/10
        via-gray-900
        to-gray-900
        border border-indigo-500/30
        shadow-lg shadow-indigo-600/20
        transition-all
        duration-300
        group
        ${disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:shadow-indigo-500/40 hover:border-indigo-400"}
      `}
    >
      <div className="absolute inset-0 rounded-2xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition" />

      <h3 className="relative text-2xl font-semibold text-white">
        {title}
      </h3>
      <p className="relative mt-2 text-gray-300">
        {description}
      </p>
    </button>
  );
}
