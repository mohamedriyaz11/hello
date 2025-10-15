import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseCards from "@/components/ExpertiseCards";
import AchievementsSection from "@/components/AchievementsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import professorPhoto from "@assets/image.png";

export default function Home() {
  const expertiseAreas = [
    { name: "Big Data", percentage: 95, icon: "database" as const },
    { name: "Data Science", percentage: 90, icon: "chart" as const },
    { name: "Machine Learning", percentage: 0, icon: "brain" as const },
    { name: "Cloud Computing", percentage: 0, icon: "cloud" as const },
  ];

  const achievements = [
    { value: "2", label: "World's Top Scientist", icon: "trophy" as const },
    { value: "17%", label: "Course & Industry Training", icon: "education" as const },
    { value: "3", label: "Professional Society Membership", icon: "users" as const },
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
      {/* 🔵 Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-100 -z-20"></div>

      {/* ✨ Floating blurred orbs for a futuristic effect */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-purple-400 opacity-30 rounded-full blur-3xl animate-float-slower"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-300 opacity-25 rounded-full blur-3xl animate-float-fast"></div>

      {/* ✨ Overlay gradient for subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent -z-10"></div>

      <Header />

      <main className="relative z-10 space-y-24 lg:space-y-32 pt-8">
        {/* HERO SECTION */}
        <section className="animate-fade-up">
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
        </section>

        {/* EXPERTISE */}
        <section className="container mx-auto px-6 lg:px-20 text-center animate-fade-up-delayed">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-700 mb-12 tracking-tight">
            Areas of Expertise
          </h2>
          <ExpertiseCards expertiseAreas={expertiseAreas} />
        </section>

        {/* ACHIEVEMENTS */}
        <section className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-20 rounded-3xl shadow-xl w-[92%] mx-auto text-white text-center animate-slide-in">
          <h2 className="text-4xl font-bold mb-12">Achievements & Recognition</h2>
          <AchievementsSection achievements={achievements} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0,transparent_70%)] opacity-40"></div>
        </section>

        {/* AFFILIATIONS */}
        <section className="container mx-auto px-6 lg:px-20 text-center animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-700 mb-10">
            Professional Affiliations
          </h2>
          <AffiliationsSection />
        </section>

        {/* CONTACT */}
        <section className="bg-white rounded-3xl shadow-2xl w-[92%] mx-auto py-16 px-8 lg:px-20 animate-fade-up-delayed hover:shadow-[0_20px_60px_rgba(59,130,246,0.3)] transition-all duration-500">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            Get in Touch
          </h2>
          <ContactSection contactInfo={contactInfo} />
        </section>
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
