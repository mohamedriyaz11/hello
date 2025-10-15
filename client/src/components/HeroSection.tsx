import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Mail } from "lucide-react";

interface HeroSectionProps {
  name: string;
  title: string;
  department: string;
  institution: string;
  photoUrl?: string;
  email?: string;
  linkedin?: string;
  youtube?: string;
}

export default function HeroSection({
  name,
  title,
  department,
  institution,
  photoUrl,
  email,
  linkedin,
  youtube,
}: HeroSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <Avatar
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl shadow-2xl"
              data-testid="img-professor"
            >
              <AvatarImage src={photoUrl} alt={name} />
              <AvatarFallback className="text-6xl font-bold rounded-2xl bg-primary/10 text-primary">
                {name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6">
            <div>
              <h1
                className="text-4xl lg:text-5xl font-bold mb-2"
                data-testid="text-professor-name"
              >
                {name}
              </h1>
              <p
                className="text-xl lg:text-2xl text-muted-foreground font-medium mb-1"
                data-testid="text-professor-title"
              >
                {title}
              </p>
              <p
                className="text-lg text-muted-foreground"
                data-testid="text-professor-department"
              >
                {department}
              </p>
              <p
                className="text-lg text-muted-foreground"
                data-testid="text-professor-institution"
              >
                {institution}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {email && (
                <Button
                  variant="default"
                  className="gap-2"
                  asChild
                  data-testid="button-email"
                >
                  <a href={`mailto:${email}`}>
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
              )}
              {linkedin && (
                <Button
                  variant="outline"
                  className="gap-2"
                  asChild
                  data-testid="button-linkedin"
                >
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              )}
              {youtube && (
                <Button
                  variant="outline"
                  className="gap-2"
                  asChild
                  data-testid="button-youtube"
                >
                  <a href={youtube} target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="h-4 w-4" />
                    YouTube
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
