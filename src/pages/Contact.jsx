export default function Contact() {
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
        <div className="w-full max-w-md bg-gray-900/70 border border-gray-800 rounded-xl p-8 backdrop-blur">

          <h1 className="text-3xl font-semibold text-white mb-6">
            Contact Us
          </h1>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-[#0F172A] border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows={4}
              placeholder="Your message"
              className="w-full bg-[#0F172A] border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="button"
              className="w-full bg-indigo-600 hover:bg-indigo-500 transition py-3 rounded-lg text-white font-semibold shadow-lg shadow-indigo-600/30"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
