import AchievementsSection from '../AchievementsSection';

export default function AchievementsSectionExample() {
  const achievements = [
    { value: "2", label: "World's Top Scientist", icon: "trophy" as const },
    { value: "17%", label: "Course & Industry Training", icon: "education" as const },
    { value: "3", label: "Professional Society Membership", icon: "users" as const },
  ];

  return <AchievementsSection achievements={achievements} />;
}
