type TestimonialCardProps = {
  name: string;
  business: string;
  feedback: string;
  rating: number;
};

export default function TestimonialCard({ name, business, feedback, rating }: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 flex flex-col gap-4">
      <div className="text-lime text-lg leading-none">
        {"★".repeat(rating)}
        <span className="text-dark/15">{"★".repeat(5 - rating)}</span>
      </div>
      <p className="text-sm text-dark/80">&ldquo;{feedback}&rdquo;</p>
      <div className="mt-auto">
        <p className="font-display font-bold text-sm">{name}</p>
        <p className="text-xs text-dark/50">{business}</p>
      </div>
    </div>
  );
}
