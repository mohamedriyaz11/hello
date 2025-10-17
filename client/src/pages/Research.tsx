import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import r1 from "@assets/r1.png";
import r2 from "@assets/r2.png";
import r3 from "@assets/r3.png";
import r4 from "@assets/r4.png";
import r5 from "@assets/r5.png";
import r6 from "@assets/r6.png";
import r7 from "@assets/r7.png";

export default function Research() {
  const metrics = [
    { label: "SCI/SCIE", value: 64, image: r1 },
    { label: "Scopus", value: 76, image: r2 },
    { label: "Patent Published", value: "04", image: r3 },
    { label: "Google Scholar", value: 2836, image: r4 },
    { label: "Publons Citation", value: 1472, image: r5 },
    { label: "Scopus Citation", value: 2259, image: r6 },
    { label: "Books", value: "01", image: r7 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 25px rgba(219, 39, 119, 0.4)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .vibrant-bg {
          background: linear-gradient(270deg, #ec4899, #8b5cf6, #f97316, #3b82f6);
          background-size: 800% 800%;
          animation: gradientShift 20s ease infinite;
        }
      `}</style>
      <div className="min-h-screen flex flex-col vibrant-bg">
        <Header />
        <main className="flex-1 bg-white bg-opacity-90 backdrop-blur-sm">
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight underline underline-offset-8 decoration-indigo-300"
              data-testid="text-research-heading"
            >
              Research & Publications
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
              {metrics.slice(0, 4).map((item, idx) => (
                <motion.div
                  custom={idx}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={cardVariants}
                  key={idx}
                >
                  <Card className="flex flex-col items-center justify-between py-8 px-5 text-center border-2 border-pink-100 bg-white/90 rounded-2xl shadow-lg transition duration-200">
                    <span className="text-lg md:text-xl font-semibold text-pink-500 mb-2">
                      {item.label}
                    </span>
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-28 max-h-28 object-contain mx-auto mb-2"
                      style={{ minHeight: 64 }}
                    />
                    <span className="text-5xl font-bold text-pink-400 mt-2">
                      {item.value}
                    </span>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              {metrics.slice(4).map((item, idx) => (
                <motion.div
                  custom={idx + 4}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={cardVariants}
                  key={idx + 4}
                >
                  <Card className="flex flex-col items-center justify-between py-8 px-5 text-center border-2 border-pink-100 bg-white/90 rounded-2xl shadow-lg transition duration-200">
                    <span className="text-lg md:text-xl font-semibold text-pink-500 mb-2">
                      {item.label}
                    </span>
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-28 max-h-28 object-contain mx-auto mb-2"
                      style={{ minHeight: 64 }}
                    />
                    <span className="text-5xl font-bold text-pink-400 mt-2">
                      {item.value}
                    </span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer
          professorName="Dr. S. Neelakandan"
          institution="R.M.K. Engineering College"
          email="drsnk730@gmail.com"
          linkedin="https://linkedin.com"
          youtube="https://youtube.com"
        />
      </div>
    </>
  );
}
