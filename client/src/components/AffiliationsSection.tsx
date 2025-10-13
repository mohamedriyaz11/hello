import affiliationsImage from "@assets/image_1760342619581.png";

export default function AffiliationsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-2xl font-semibold text-center mb-8 text-muted-foreground" data-testid="text-affiliations-heading">
          Institutional Affiliations
        </h2>
        <div className="flex justify-center">
          <img
            src={affiliationsImage}
            alt="Institutional Affiliations"
            className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            data-testid="img-affiliations"
          />
        </div>
      </div>
    </section>
  );
}
