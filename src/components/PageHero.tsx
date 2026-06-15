type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-dark text-white">
      <div className="container-page py-14 md:py-20">
        {eyebrow && (
          <p className="text-lime text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl md:text-5xl font-bold max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-white/70 text-base md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
