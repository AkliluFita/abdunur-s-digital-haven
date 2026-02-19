import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Innovations from "@/components/Innovations";
import Footer from "@/components/Footer";
import SupportBox from "@/components/SupportBox";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  useScrollReveal();

  const toggleDark = () => {
    setDarkMode((v) => {
      document.documentElement.classList.toggle("dark", !v);
      return !v;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Services />
        <Innovations />
      </main>
      <Footer />
      <SupportBox />
    </div>
  );
};

export default Index;
