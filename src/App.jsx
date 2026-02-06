import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";

import About from "./pages/About";
import Contact from "./pages/Contact";
import SkillSelect from "./pages/SkillSelect";
import ModeSelect from "./pages/ModeSelect";
import MentorSession from "./pages/MentorSession";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<SkillSelect />} />
          <Route path="/mode" element={<ModeSelect />} />
          <Route path="/mentor" element={<MentorSession />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}
