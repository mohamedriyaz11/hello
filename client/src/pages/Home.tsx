import React, { useState, useEffect } from "react";
import AchievementsSection from "@/components/AchievementsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import professorPhoto from "@assets/imagep.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Database, Brain, Cloud, LineChart } from "lucide-react";
import { motion } from "framer-motion";

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 64, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, type: "spring", bounce: 0.35 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, type: "spring", bounce: 0.35, duration: 0.75 }
  })
};

const iconMap = {
  database: Database,
  brain: Brain,
  cloud: Cloud,
  chart: LineChart,
};

// --- HeroSection ---
function HeroSection({ name, title, department, institution, photoUrl, email, linkedin, youtube }) {
  return (
    <motion.section
      className="py-16 lg:py-24 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div
        className="absolute w-[700px] h-[700px] left-[-200px] top-[-200px]
        bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200
        opacity-40 blur-3xl animate-spin-slow z-0 pointer-events-none rounded-full"
        style={{ animation: "spin 28s linear infinite" }}
      ></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .glass-card {
            background: rgba(255,255,255,0.7);
            box-shadow: 0 4px 32px rgba(80,80,140,0.18);
            backdrop-filter: blur(8px);
            border-radius: 2rem;
            border: 1px solid rgba(180,180,210,0.23);
          }
          .avatar-glow {
            box-shadow: 0 0 40px 10px #a78bfa88, 0 2px 24px 0 #818cf888;
            border: 6px double #fff;
            transition: box-shadow 0.4s cubic-bezier(.61,.47,.27,.72), transform 0.2s;
          }
          .avatar-glow:hover {
            box-shadow: 0 0 80px 30px #a78bfa, 0 6px 32px 0 #818cf8;
            transform: scale(1.07) translateY(-10px);
          }
        `}
      </style>
      <motion.div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center glass-card p-8">
          <div className="flex justify-center lg:justify-start relative">
            <span className="absolute left-1/2 top-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2
              rounded-full bg-gradient-to-tr from-indigo-400 via-pink-200 to-purple-300
              blur-2xl opacity-60 z-[-1] pointer-events-none"></span>
            <Avatar
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full avatar-glow ring-8 ring-white shadow-2xl"
              data-testid="img-professor"
              style={{ objectFit: "cover" }}
            >
              <AvatarImage src={photoUrl} alt={name} />
              <AvatarFallback className="text-6xl font-bold rounded-full bg-primary/10 text-primary">
                {name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <motion.div
              className="absolute bottom-4 left-6 bg-white/70 px-4 py-2 rounded-xl shadow-md text-[1.2rem] font-semibold text-indigo-700"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.6, delay: 0.25 }}
            >
              Featured
            </motion.div>
          </div>
          <motion.div className="space-y-7">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-indigo-900 drop-shadow">
              {name}
            </h1>
            <p className="text-xl lg:text-2xl text-purple-700 font-medium mb-1">{title}</p>
            <p className="text-lg text-blue-950/90">{department}</p>
            <p className="text-lg text-blue-950/90">{institution}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              {email && (
                <Button variant="default" className="gap-2" asChild>
                  <a href={`mailto:${email}`}>
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </Button>
              )}
              {linkedin && (
                <Button variant="outline" className="gap-2" asChild>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </Button>
              )}
              {youtube && (
                <Button variant="outline" className="gap-2" asChild>
                  <a href={youtube} target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="h-4 w-4" /> YouTube
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

// --- Animated Counter for Cards ---
function AnimatedCounter({ value, shouldAnimate }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (shouldAnimate) {
      const duration = 1000;
      const startTime = performance.now();
      function animate(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        setCount(Math.round(progress * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
      requestAnimationFrame(animate);
    }
  }, [value, shouldAnimate]);
  return <span>{count}</span>;
}

// --- ExpertiseCards Section ---
function ExpertiseCards({ expertiseAreas }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) setHasAnimated(true);
  }, [inView, hasAnimated]);

  useEffect(() => {
    const section = document.getElementById("expertise-section");
    if (!section) return;
    function handler() {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3) {
        setInView(true);
      }
    }
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.section
      id="expertise-section"
      className="py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.65 }}
                whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(59,130,246,0.17)" }}
                key={area.name}
              >
                <Card className="p-6 transition-all duration-300 border border-blue-100 shadow-md hover:shadow-indigo-200">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div
                      className="p-4 rounded-xl bg-primary/10"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", bounce: 0.6, duration: 0.5 }}
                    >
                      <Icon className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div className="text-4xl font-bold font-mono text-primary">
                      <AnimatedCounter value={area.percentage} shouldAnimate={hasAnimated} />%
                    </div>
                    <div className="text-sm font-medium">{area.name}</div>
                    <div className="w-full bg-secondary rounded-full h-2 relative overflow-hidden">
                      <motion.div
                        className="bg-primary h-2 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: hasAnimated ? `${area.percentage}%` : '0%' }}
                        transition={{ duration: 1.1, delay: 0.2 + index * 0.18, type: "spring", bounce: 0.33 }}
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

// --- Main Home Page ---
export default function Home() {
  const expertiseAreas = [
    { name: "Big Data", percentage: 95, icon: "database" },
    { name: "Data Science", percentage: 90, icon: "chart" },
    { name: "Machine Learning", percentage: 0, icon: "brain" },
    { name: "Cloud Computing", percentage: 0, icon: "cloud" },
  ];

  const achievements = [
    { value: "2", label: "World's Top Scientist", icon: "trophy" },
    { value: "17%", label: "Course & Industry Training", icon: "education" },
    { value: "3", label: "Professional Society Membership", icon: "users" },
  ];

  const contactInfo = {
    address: "No 14 A Manjanman Kovil Street, Kanchipadu, Thiruvalur - 631704",
    city: "Chennai, Tamil Nadu, India 600034",
    email: "drsnk730@gmail.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100 -z-20"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-purple-400 opacity-30 rounded-full blur-3xl animate-float-slower"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-300 opacity-25 rounded-full blur-3xl animate-float-fast"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent -z-10"></div>

      {/* ✅ Header is removed from here */}

      <main className="relative z-10 space-y-24 lg:space-y-32 pt-8">
        <HeroSection
          name="Dr. S. Neelakandan M.E., Ph.D."
          title="Data Scientist & Big Data Analyst"
          department="Department of Computer Science and Engineering"
          institution="R.M.K. Engineering College"
          photoUrl={professorPhoto}
          email="drsnk730@gmail.com"
          linkedin="https://linkedin.com"
          youtube="https://youtube.com"
        />

        <ExpertiseCards expertiseAreas={expertiseAreas} />

        <motion.section
          className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-20 rounded-3xl shadow-xl w-[92%] mx-auto text-white text-center animate-slide-in"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-12">Achievements & Recognition</h2>
          <AchievementsSection achievements={achievements} />
        </motion.section>

        <motion.section
          className="container mx-auto px-6 lg:px-20 text-center animate-fade-up"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-700 mb-10">
            Professional Affiliations
          </h2>
          <AffiliationsSection />
        </motion.section>

        <motion.section
          className="bg-white rounded-3xl shadow-2xl w-[92%] mx-auto py-16 px-8 lg:px-20 animate-fade-up-delayed hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition-all duration-500"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            Get in Touch
          </h2>
          <ContactSection contactInfo={contactInfo} />
        </motion.section>
      </main>

      <footer className="mt-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-gray-100 border-t border-blue-800 shadow-inner animate-fade-up">
        <Footer
          professorName="Dr. S. Neelakandan"
          institution="R.M.K. Engineering College"
          email="drsnk730@gmail.com"
          linkedin="https://linkedin.com"
          youtube="https://youtube.com"
        />
        <p className="text-center text-sm text-gray-300 py-4">
          © {new Date().getFullYear()} R.M.K. Engineering College | Crafted with 💙 by MOHAMED RIYAZ I
        </p>
      </footer>
    </div>
  );
}
