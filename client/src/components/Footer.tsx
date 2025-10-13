import { Link } from "wouter";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface FooterProps {
  professorName: string;
  institution: string;
  email: string;
  linkedin?: string;
  youtube?: string;
}

export default function Footer({ professorName, institution, email, linkedin, youtube }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4" data-testid="text-footer-name">{professorName}</h3>
            <p className="text-sm text-muted-foreground mb-2">{institution}</p>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/academics" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-academics">Academics & Experience</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-projects">Projects</Link></li>
              <li><Link href="/publications" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-publications">Publications</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">More</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/opportunities" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-opportunities">Opportunities</Link></li>
              <li><Link href="/honors" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-honors">Honors</Link></li>
              <li><Link href="/research" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-research">Research Topics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {linkedin && (
                <Button variant="outline" size="icon" asChild data-testid="button-footer-linkedin">
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {youtube && (
                <Button variant="outline" size="icon" asChild data-testid="button-footer-youtube">
                  <a href={youtube} target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">© {currentYear} {professorName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
