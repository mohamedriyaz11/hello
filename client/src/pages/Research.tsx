import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

export default function Research() {
  const topics = [
    {
      title: "Big Data Analytics",
      description: "Research on scalable algorithms and frameworks for processing and analyzing massive datasets in distributed environments.",
      keywords: ["Hadoop", "Spark", "NoSQL", "Distributed Computing"],
    },
    {
      title: "Machine Learning & AI",
      description: "Development of advanced machine learning models for predictive analytics, pattern recognition, and decision support systems.",
      keywords: ["Deep Learning", "Neural Networks", "Predictive Modeling", "AI"],
    },
    {
      title: "Cloud Computing",
      description: "Research on cloud-based architectures, resource optimization, and security frameworks for enterprise applications.",
      keywords: ["Cloud Architecture", "Virtualization", "Resource Management", "Security"],
    },
    {
      title: "Healthcare Informatics",
      description: "Application of data science and machine learning techniques to healthcare data for improving patient outcomes and operational efficiency.",
      keywords: ["Medical Data Mining", "Predictive Healthcare", "EHR Analytics"],
    },
    {
      title: "IoT & Edge Computing",
      description: "Research on Internet of Things architectures and edge computing paradigms for real-time data processing and analytics.",
      keywords: ["IoT", "Edge Computing", "Real-time Analytics", "Smart Systems"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-research-heading">
            Research Topics
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Current research interests and focus areas
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-research-${index}`}>
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
                    <p className="text-muted-foreground mb-4">{topic.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {topic.keywords.map((keyword, keyIndex) => (
                        <Badge key={keyIndex} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
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
  );
}
