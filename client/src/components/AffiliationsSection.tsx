interface Affiliation {
  name: string;
  logo?: string;
}

interface AffiliationsSectionProps {
  affiliations: Affiliation[];
}

export default function AffiliationsSection({ affiliations }: AffiliationsSectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-8 text-muted-foreground" data-testid="text-affiliations-heading">
          Institutional Affiliations
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {affiliations.map((affiliation, index) => (
            <div
              key={index}
              className="w-24 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              data-testid={`affiliation-${index}`}
            >
              {affiliation.logo ? (
                <img
                  src={affiliation.logo}
                  alt={affiliation.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-xs text-center font-medium p-2">
                  {affiliation.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
