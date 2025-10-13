import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseCards from "@/components/ExpertiseCards";
import AchievementsSection from "@/components/AchievementsSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import professorPhoto from "@assets/image_1760342779708.png";

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
    <div className="min-h-screen">
      <Header />
      <main>
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
        <AchievementsSection achievements={achievements} />
        <AffiliationsSection />
        <ContactSection contactInfo={contactInfo} />
      </main>
      <Footer
        professorName="Dr. S. Neelakandan"
        institution="R.M.K. Engineering College"
        email="drsnk730@gmail.com"
        linkedin="https://linkedin.com"
        youtube="https://youtube.com"
      />
    </div>
  );
}
