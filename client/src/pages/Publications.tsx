import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      number: 1,
      authors: "Neelakandan, S & Paulraj, D 2020",
      title: "A gradient boosted decision tree-based sentiment classification of twitter data",
      journal: "International Journal of Wavelets, Multiresolution and Information Processing, vol. 18, no. 4, pp. 205027 1-21",
      doi: "10.1142/S0219691320500277"
    },
    {
      number: 2,
      authors: "Neelakandan, S & Paulraj, D 2020",
      title: "An Automated Exploring And Learning Model For Data Prediction Using Balanced CA-SVM",
      journal: "Journal of Ambient Intelligence and Humanized Computing, Vol.12, no.5, April 2020",
      doi: "10.1007/s12652-020-01937-9"
    },
    {
      number: 3,
      authors: "Neelakandan, S & Paulraj, D 2020",
      title: "An Automated Learning Model for Sentiment Analysis and Data Classification of Twitter Data Using Balanced CA-SVM",
      journal: "Concurrent Engineering Research and Applications, Vol.29, No.4, pp 386-395",
      doi: "10.1177/1063293X20915307"
    },
    {
      number: 4,
      authors: "Neelakandan, S., Berlin, M.A., Tripathi, S. et al.",
      title: "IoT-based traffic prediction and traffic signal control system for smart city",
      journal: "Soft Computing (2021)",
      doi: "10.1007/s00500-021-05896-x"
    },
    {
      number: 5,
      authors: "R. Kamalraj, S. Neelakandan, M. Ranjith Kumar, V. Chandra Shekhar Rao, Rohit Anand, Harinder Singh",
      title: "Interpretable filter based convolutional neural network (IF-CNN) for glucose prediction and classification using PD-SS algorithm",
      journal: "Measurement, Vol.183,2021",
      doi: "10.1016/j.measurement.2021.109804"
    },
    // Add more publications as needed
    {
      number: 6,
      authors: "Kavitha, T., Mathai, P.P., Karthikeyan, C. et al.",
      title: "Deep Learning Based Capsule Neural Network Model for Breast Cancer Diagnosis Using Mammogram Images.",
      journal: "Interdiscip Sci Comput Life Sci (2021)",
      doi: "10.1007/s12539-021-00467-y"
    },
    {
      number: 7,
      authors: "C Pretty Diana Cyril, J Rene Beulah, Neelakandan Subramani, Prakash Mohan, A Harshavardhan, D Sivabalaselvamani.",
      title: " An automated learning model for sentiment analysis and data classification of Twitter data using balanced CA-SVM",
      journal: "Concurrent Engineering Research and Applications,Vol.29,No.4,pp 386-395.",
      doi: ""
    },
    {
      number: 8,
      authors: "Reshma, G., Al-Atroshi, C., Nassa, V. K., Geetha, B., Neelakandan.S. et al. (2022). ",
      title: "Deep Learning-Based Skin Lesion Diagnosis Model Using Dermoscopic Images.",
      journal: "Intelligent Automation & Soft Computing, vol.31,no.1, pp.621–634.",
      doi: ""
    },
    {
      number: 9,
      authors: "Neelakandan, S., Arun, A., Bhukya, R. R., Hardas, B. M., Ch., T. et al. (2022).",
      title: "An Automated Word Embedding with Parameter Tuned Model for Web Crawling.",
      journal: "Intelligent Automation & Soft Computing, 32(3), 1617–1632.",
      doi: ""
    },
    {
      number: 10,
      authors: "P. Asha, L. Natrayan, B.T. Geetha, J. Rene Beulah, R. Sumathy, G. Varalakshmi, S. Neelakandan.",
      title: "IoT enabled environmental toxicology for air pollution monitoring using AI techniques.",
      journal: "Environmental Research, Volume 205, 2022, 112574",
      doi: "10.1016/j.envres.2021.112574"
    },
    {
      number: 11,
      authors: "D. Venu, A.V.R. Mayuri, S. Neelakandan, G.L.N. Murthy, N. Arulkumar, Nilesh Shelke",
      title: "An efficient low complexity compression based optimal homomorphic encryption for secure fiber optic communication.",
      journal: "Optik, Vol 252,2022,pp.168545",
      doi: "10.1016/j.ijleo.2021.168545"
    },
    {
      number: 12,
      authors: "D. K. Jain, S. K. S. Tyagi, S. Neelakandan, M. Prakash and L. Natrayan",
      title: "Metaheuristic Optimization-Based Resource Allocation Technique for Cybertwin-Driven 6G on IoE Environment.",
      journal: "IEEE Transactions on Industrial Informatics, vol. 18, no. 7, pp. 4884-4892, July 2022",
      doi: "10.1109/TII.2021.3138915."
    },
  ];

  // Helper to get a valid DOI link
  const getDoiLink = (doi: string): string => {
    const trimmedDoi = doi.trim().replace(/\s+/g, "");
    if (trimmedDoi.startsWith("http://") || trimmedDoi.startsWith("https://")) {
      return trimmedDoi;
    }
    return `https://doi.org/${trimmedDoi}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-publications-heading">
            Publications
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            SCI/SCIE Indexed - ARTICLES
          </p>
          <div className="space-y-8">
            {publications.map((pub, idx) => (
              <Card key={idx} className="p-6 hover-elevate flex flex-col" data-testid={`card-publication-${idx}`}>
                <div className="flex flex-col justify-center">
                  <div className="mb-2 font-semibold">
                    {pub.number}) <span className="font-bold">{pub.authors}</span>, {pub.title}
                  </div>
                  <div className="mb-2 text-muted-foreground">{pub.journal}</div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2 w-fit"
                    data-testid={`button-doi-${idx}`}
                  >
                    <a href={getDoiLink(pub.doi)} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      DOI
                    </a>
                  </Button>
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
