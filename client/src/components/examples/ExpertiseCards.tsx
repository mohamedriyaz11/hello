import ExpertiseCards from '../ExpertiseCards';

export default function ExpertiseCardsExample() {
  const expertiseAreas = [
    { name: "Big Data", percentage: 95, icon: "database" as const },
    { name: "Data Science", percentage: 90, icon: "chart" as const },
    { name: "Machine Learning", percentage: 85, icon: "brain" as const },
    { name: "Cloud Computing", percentage: 80, icon: "cloud" as const },
  ];

  return <ExpertiseCards expertiseAreas={expertiseAreas} />;
}
