import React from "react";

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Decorative Gradient Overlay */}
      <div style={styles.gradientOverlay}></div>
      
      {/* Header Section with Glassmorphism and Shadow */}
      <div style={styles.header}>
        <h1 style={styles.labTitle}>
          <span style={styles.greenText}>Smart Neurocognitive Knowledge and Data Intelligence</span><br />
          <span style={styles.blueText}>Research Lab - SNKDIR</span>
        </h1>
      </div>

      {/* Introduction Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Introduction</h2>
        <p style={styles.introText}>
          Welcome to Laboratory <i>"Smart Neurocognitive Knowledge and Data Intelligence Research Lab"</i> led by Dr. Neelakandan S in the Department of Computer Science Engineering at R.M.K. Engineering College, Chennai, India.
        </p>
        <p style={styles.sectionText}>
          The <b>Smart Neurocognitive Knowledge and Data Intelligence Research Lab (SNKDIR)</b> at RMK Engineering College is a multidisciplinary research initiative focused on exploring the frontiers of intelligent systems, cognitive computing, and data-driven innovations. Our lab brings together a vibrant community of undergraduate students, postgraduate scholars, and research professionals working collaboratively to address real-world challenges through smart, data-centric approaches.
        </p>
        <p style={styles.sectionText}>
          At SNKDIR, we aim to bridge the gap between neuroscience-inspired models, artificial intelligence, and data intelligence. Our research spans across diverse domains including machine learning, brain-computer interfacing, cognitive computing, natural language processing, and data analytics. By integrating neurocognitive principles with modern AI techniques, we aspire to build intelligent systems that learn, adapt, and evolve.
        </p>
        <p style={styles.sectionText}>
          We foster a collaborative and inclusive environment that encourages innovation, critical thinking, and hands-on problem solving. Our lab not only focuses on academic excellence but also on developing practical solutions with societal impact, nurturing future-ready technologists and researchers.
        </p>
      </div>

      {/* Focus Section with Card Effect and Animation */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Focus</h2>
        <p style={styles.sectionText}>
          The <b>Smart Neurocognitive Knowledge and Data Intelligence Research Lab (SNKDIR)</b> at RMK Engineering College is dedicated to advancing research at the intersection of cognitive science, artificial intelligence, and data intelligence.
        </p>
        <ul style={styles.focusList}>
          {focusItems.map((item, idx) => (
            <li
              key={item.title}
              style={{
                ...styles.focusItem,
                animationDelay: `${idx * 0.1}s`
              }}
            >
              <span style={styles.focusIcon}>{item.icon}</span>
              <b>{item.title}:</b> {item.desc}
            </li>
          ))}
        </ul>
        <p style={styles.sectionText}>
          Our lab serves as a collaborative research hub encouraging innovation, critical thinking, and problem-solving through hands-on projects, guided mentorship, and cross-disciplinary learning.
        </p>
      </div>
    </div>
  );
}

const focusItems = [
  {
    icon: "🧠",
    title: "Neurocognitive Computing",
    desc: "Designing models inspired by the brain’s neural architecture to enhance learning, memory, and reasoning in machines."
  },
  {
    icon: "📊",
    title: "Data-Driven Intelligence",
    desc: "Developing intelligent algorithms and data-centric approaches for pattern recognition, prediction, and automated decision-making."
  },
  {
    icon: "🤖",
    title: "Human-Centered AI",
    desc: "Exploring how machines can learn from and adapt to human behavior for improved interaction and assistive technologies."
  },
  {
    icon: "🗂️",
    title: "Knowledge Engineering",
    desc: "Structuring and extracting actionable knowledge from large, unstructured datasets using semantic technologies and knowledge graphs."
  },
  {
    icon: "🏥",
    title: "Smart Systems & Applications",
    desc: "Prototyping AI solutions in domains like healthcare, education, neuro informatics, and smart environments."
  }
];

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #dde5f1 0%, #b7c2da 50%, #d5ecec 100%)", // Soft blue-gray calming gradient
    fontFamily: "Segoe UI, Arial, sans-serif",
    color: "#222",
    boxSizing: "border-box",
    overflowX: "hidden"
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    background: "radial-gradient(circle at 75% 18%, #adbcce40 0%, #e0f7fa 65%, #b7c2da00 100%)",
    zIndex: 0
  },
  header: {
    background: "rgba(62,87,125,0.32)",
    backdropFilter: "blur(8px)",
    padding: "42px 0 26px 0",
    textAlign: "center",
    margin: "0 auto 20px auto",
    borderRadius: "0 0 22px 22px",
    boxShadow: "0 7px 32px rgba(60,80,160,0.12)"
  },
  labTitle: {
    fontSize: "2.8rem",
    fontWeight: 800,
    lineHeight: 1.2,
    textShadow: "0 2px 8px #b7c2da, 0 0px 2px #dde5f1"
  },
  greenText: {
    color: "#22c55e",
    letterSpacing: ".04em"
  },
  blueText: {
    color: "#388fcf"
  },
  section: {
    background: "rgba(255,255,255,0.98)",
    margin: "38px auto",
    padding: "38px",
    borderRadius: "22px",
    boxShadow: "0 7px 32px rgba(48,60,120,0.10)",
    maxWidth: "950px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden"
  },
  sectionTitle: {
    color: "#476d92",
    fontSize: "2.15rem",
    fontWeight: 700,
    letterSpacing: ".027em",
    marginBottom: "22px",
    textAlign: "center"
  },
  introText: {
    fontSize: "1.22rem",
    marginBottom: "16px",
    textAlign: "center",
    fontFamily: "Georgia, serif"
  },
  sectionText: {
    fontSize: "1.12rem",
    margin: "13px 0",
    textShadow: "0 1px 0 #f6fcff"
  },
  focusList: {
    fontSize: "1.08rem",
    marginLeft: "0",
    paddingLeft: "0",
    marginBottom: "25px",
    listStyle: "none"
  },
  focusItem: {
    display: "flex",
    alignItems: "start",
    gap: "13px",
    background: "linear-gradient(90deg, #f5fafd 0%, #e9f5f6 100%)", // Gentle card accent
    padding: "13px 19px",
    marginBottom: "13px",
    borderRadius: "16px",
    boxShadow: "0 3px 8px #c5dbe8",
    borderLeft: "5px solid #adcaf2",
    transition: "transform 0.15s, box-shadow 0.15s",
    animation: "focusfadein 0.6s cubic-bezier(.42,.02,.61,1.06) both"
  },
  focusIcon: {
    fontSize: "1.72rem",
    flexShrink: 0,
    marginTop: "3px"
  }
};

// For animation, add this keyframes block in your global CSS:
// @keyframes focusfadein {
//   from { opacity: 0; transform: translateY(16px); }
//   to   { opacity: 1; transform: translateY(0); }
// }
