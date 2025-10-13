import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Academics & Experience", path: "/academics" },
  { name: "People", path: "/people" },
  { name: "Projects", path: "/projects" },
  { name: "Publications", path: "/publications" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Honors", path: "/honors" },
  { name: "Research Topics", path: "/research" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer">
              <div className="text-xl font-bold text-primary">Dr. S. Neelakandan</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button
                  variant="ghost"
                  className={`${
                    location === item.path
                      ? "bg-secondary"
                      : ""
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2" data-testid="nav-mobile">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${
                    location === item.path ? "bg-secondary" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
