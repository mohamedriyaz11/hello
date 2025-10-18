import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Database, Brain, Cloud, LineChart } from "lucide-react";
import { useInView } from "react-intersection-observer";

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

function AnimatedCounter({ value, shouldAnimate }: { value: number, shouldAnimate: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      let start = 0;
      const duration = 1000;
      const startTime = performance.now();

      function animate(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        setCount(Math.round(progress * value));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }
      requestAnimationFrame(animate);
    }
    // Do NOT reset to 0 when shouldAnimate goes false
    // Retain animated final value after first animation
  }, [value, shouldAnimate]);

  return <span>{count}</span>;
}

export default function ExpertiseCards({ expertiseAreas }: ExpertiseCardsProps) {
  // CHANGED: Only animate once (first time cards enter viewport)
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-expertise-heading">
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
                    <AnimatedCounter value={area.percentage} shouldAnimate={inView} />%
                  </div>
                  <div className="text-sm font-medium" data-testid={`text-expertise-name-${index}`}>
                    {area.name}
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: inView ? `${area.percentage}%` : '0%' }}
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
