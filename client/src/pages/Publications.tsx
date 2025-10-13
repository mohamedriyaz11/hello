import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Publications() {
  const publications = [
    {
      title: "Advanced Machine Learning Techniques for Big Data Analytics",
      authors: "S. Neelakandan, et al.",
      journal: "IEEE Transactions on Big Data",
      year: "2023",
      citations: 145,
      doi: "10.1109/TBDATA.2023.1234567",
    },
    {
      title: "Scalable Data Processing Framework for Cloud Environments",
      authors: "S. Neelakandan, A. Kumar",
      journal: "Journal of Cloud Computing",
      year: "2022",
      citations: 89,
      doi: "10.1186/s13677-022-00123-4",
    },
    {
      title: "Deep Learning Approaches in Healthcare Data Analysis",
      authors: "S. Neelakandan, R. Sharma, P. Patel",
      journal: "Healthcare Analytics",
      year: "2022",
      citations: 67,
      doi: "10.1016/j.hca.2022.100023",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-publications-heading">
            Publications
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Peer-reviewed research publications and papers
          </p>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-publication-${index}`}>
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                    <p className="text-muted-foreground mb-2">{pub.authors}</p>
                    <div className="flex flex-wrap gap-3 items-center mb-3">
                      <Badge variant="outline">{pub.journal}</Badge>
                      <span className="text-sm text-muted-foreground">{pub.year}</span>
                      <span className="text-sm text-muted-foreground">Citations: {pub.citations}</span>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="gap-2" data-testid={`button-doi-${index}`}>
                        <ExternalLink className="h-4 w-4" />
                        DOI: {pub.doi}
                      </Button>
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
