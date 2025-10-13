import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Database, Brain, Cloud, LineChart } from "lucide-react";

interface ExpertiseItem {
  name: string;
  percentage: number;
  icon: "database" | "brain" | "cloud" | "chart";
}

interface ExpertiseCardsProps {
  expertiseAreas: ExpertiseItem[];
}

const iconMap = {
  database: Database,
  brain: Brain,
  cloud: Cloud,
  chart: LineChart,
};

export default function ExpertiseCards({ expertiseAreas }: ExpertiseCardsProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-expertise-heading">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = iconMap[area.icon];
            return (
              <Card
                key={area.name}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-expertise-${index}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold font-mono text-primary" data-testid={`text-percentage-${index}`}>
                    {animated ? area.percentage : 0}%
                  </div>
                  <div className="text-sm font-medium" data-testid={`text-expertise-name-${index}`}>
                    {area.name}
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: animated ? `${area.percentage}%` : '0%' }}
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
