import AffiliationsSection from '../AffiliationsSection';

export default function AffiliationsSectionExample() {
  const affiliations = [
    { name: "University 1" },
    { name: "University 2" },
    { name: "University 3" },
    { name: "University 4" },
    { name: "University 5" },
    { name: "University 6" },
  ];

  return <AffiliationsSection affiliations={affiliations} />;
}
