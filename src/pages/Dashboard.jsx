import { useNavigate } from "react-router-dom";
import { useMentorStore } from "../store/mentorStore";

export default function Dashboard() {
  const navigate = useNavigate();
  const { sessionId, skill, mode, turnCount, resetSession } = useMentorStore();

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-gray-200 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">

          {/* Brand */}
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            WorkforceForge
          </h1>

          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            An AI mentor that teaches you how to{" "}
            <span className="text-indigo-400 font-medium">think</span>,
            not just what to memorize.
          </p>

          {/* Resume Session */}
          {sessionId && (
            <div className="mt-10 p-5 rounded-xl bg-gray-900/70 border border-gray-800 backdrop-blur">
              <p className="text-sm text-gray-400">
                Resume{" "}
                <span className="text-white font-medium">{skill}</span> ·{" "}
                {mode} · {turnCount} turns
              </p>

              <div className="mt-4 flex justify-center gap-4">
                <button
                  onClick={() => navigate("/mentor")}
                  className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-lg text-white"
                >
                  Resume
                </button>
                <button
                  onClick={resetSession}
                  className="border border-gray-700 hover:border-gray-500 transition px-5 py-2 rounded-lg text-gray-300"
                >
                  End
                </button>
              </div>
            </div>
          )}

          {/* Primary CTA */}
          <div className="mt-14">
            <button
              onClick={() => navigate("/skills")}
              className="
                bg-indigo-600 hover:bg-indigo-500
                text-white
                px-10 py-4
                rounded-xl
                text-lg font-semibold
                transition
                hover:scale-[1.03]
                shadow-lg shadow-indigo-600/30
              "
            >
              Start a New Mentorship
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
