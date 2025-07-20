import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Extracurricular from "./components/Extracurricular";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      <Navbar />
      <main>
        <Home />
        <About />
        <Education/>
        <Skills />
        <Experience />
        <Projects />
        <Extracurricular/>
        <Awards/>
        <Contact />
        <Footer/>
        
      </main>
    </div>
  );
}
