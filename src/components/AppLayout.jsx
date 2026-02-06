import Navbar from "./Navbar";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-gray-200">
      <Navbar />
      {/* offset for fixed navbar */}
      <div className="pt-16">{children}</div>
    </div>
  );
}
