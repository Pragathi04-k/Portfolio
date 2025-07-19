import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

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
        <Projects />
        <Skills />
        <Contact />
        <Experience />
      </main>
    </div>
  );
}
