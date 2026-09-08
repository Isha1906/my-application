import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hero from "./components/Hero"
import About from "./components/About";
import Work from "./components/Work";
import TrustedBy from "./components/TrustedBy";
import AboutPage from "./pages/AboutPage";
import Services from "./components/Services";
import ServicesPage from "./pages/ServicesPage";
import WorkPage from "./pages/WorkPage";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />      
      </Routes>
      <Footer />
    </main>
  );
}

export default App;