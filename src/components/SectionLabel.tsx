type SectionLabelProps = {
  number: string;
  title: string;
  description?: string;
};

export default function SectionLabel({ number, title, description }: SectionLabelProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dark text-lime font-display text-sm font-bold">
          {number}
        </span>
        <h2 className="font-display text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      {description && <p className="mt-3 text-dark/60 max-w-2xl">{description}</p>}
    </div>
  );
}
