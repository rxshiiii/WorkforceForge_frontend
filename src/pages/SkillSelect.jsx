import { useEffect, useState } from "react";
import { getTrendingSkills } from "../api/mentorApi";
import { useNavigate } from "react-router-dom";
import { useMentorStore } from "../store/mentorStore";

export default function SkillSelect() {
  const navigate = useNavigate();
  const { startSession } = useMentorStore();

  const [skills, setSkills] = useState([]);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingSkills()
      .then((res) => setSkills(res))
      .catch(() => setSkills([]))
      .finally(() => setLoading(false));
  }, []);

  function select(skill) {
    startSession({ sessionId: null, skill, mode: null });
    navigate("/mode");
  }

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-gray-200 relative overflow-hidden">

      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      {/* ===== Subtle Grid ===== */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ===== Content ===== */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          What do you want to learn?
        </h1>

        {/* ===== Custom Skill Card ===== */}
        <div className="mt-12 w-full max-w-xl rounded-2xl bg-gray-900/70 border border-gray-800 backdrop-blur p-8">
          <h2 className="text-xl font-semibold text-white">
            Learn a New Skill
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Enter any skill. Your mentor will design the learning path.
          </p>

          <div className="mt-5 flex gap-3">
            <input
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder="Rust, CUDA, WebGPU…"
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
              onClick={() => custom && select(custom)}
              className="
                bg-indigo-600 hover:bg-indigo-500
                transition
                px-6 py-3
                rounded-lg
                text-white
                font-medium
              "
            >
              Start
            </button>
          </div>
        </div>

        {/* ===== Mentor Recommended ===== */}
        <p className="mt-16 mb-8 text-sm uppercase tracking-wide text-gray-400">
          Mentor Recommended
        </p>

        {/* ===== Loader (ONLY LOWER PART) ===== */}
        {loading && (
          <div className="grid sm:grid-cols-2 gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="
                  w-80
                  h-28
                  rounded-2xl
                  bg-gray-900/70
                  border border-gray-800
                  animate-pulse
                "
              />
            ))}
          </div>
        )}

        {/* ===== Skills ===== */}
        {!loading && skills.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-10">
            {skills.map((s) => (
              <button
                key={s.skill}
                onClick={() => select(s.skill)}
                className="
                  w-80
                  p-7
                  rounded-2xl
                  text-left
                  relative
                  bg-gradient-to-br
                  from-indigo-500/10
                  via-gray-900
                  to-gray-900
                  border border-indigo-500/30
                  shadow-lg shadow-indigo-600/20
                  hover:shadow-indigo-500/40
                  hover:border-indigo-400
                  transition-all
                  duration-300
                  group
                "
              >
                <div className="absolute inset-0 rounded-2xl bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition" />

                <h3 className="relative text-lg font-semibold text-white">
                  {s.skill}
                </h3>

                <p className="relative text-sm text-gray-300 mt-2">
                  Confidence{" "}
                  <span className="text-indigo-400 font-medium">
                    {Math.round(s.confidence * 100)}%
                  </span>
                </p>
              </button>
            ))}
          </div>
        )}

        {/* ===== Empty State ===== */}
        {!loading && skills.length === 0 && (
          <p className="text-gray-500 text-sm">
            No recommendations available right now.
          </p>
        )}
      </div>
    </div>
  );
}
