import { Card } from "@/components/ui/card";
import { Trophy, GraduationCap, Users } from "lucide-react";

interface Achievement {
  value: string;
  label: string;
  icon: "trophy" | "education" | "users";
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const iconMap = {
  trophy: Trophy,
  education: GraduationCap,
  users: Users,
};

export default function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4" data-testid="text-achievements-heading">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <Card
                key={index}
                className="p-8 text-center hover-elevate transition-all duration-300"
                data-testid={`card-achievement-${index}`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 rounded-full bg-chart-3/10">
                    <Icon className="h-8 w-8 text-chart-3" />
                  </div>
                  <div className="text-5xl font-bold text-chart-3" data-testid={`text-achievement-value-${index}`}>
                    {achievement.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide" data-testid={`text-achievement-label-${index}`}>
                    {achievement.label}
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
