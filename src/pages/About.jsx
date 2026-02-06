export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-gray-200 relative overflow-hidden">
      
      {/* Background glow (SAME AS DASHBOARD) */}
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
        <div className="max-w-3xl text-left">

          <h1 className="text-4xl md:text-5xl  font-bold text-white mb-6">
            About WorkforceForge
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            WorkforceForge is an AI-powered mentor platform designed to teach
            engineers how to think — not memorize.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Unlike traditional learning tools, WorkforceForge adapts in real time
            using agentic AI systems that understand intent, reasoning quality,
            and difficulty progression.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our mission is to create engineers who can solve real-world problems
            independently and confidently.
          </p>

        </div>
      </div>
    </div>
  );
}
