type StatCardProps = {
  value: string;
  label: string;
  trend?: string | null;
  highlight?: boolean;
};

export default function StatCard({ value, label, trend, highlight = false }: StatCardProps) {
  return (
    <div
      className={`rounded-2xl border p-5 flex flex-col gap-1 ${
        highlight ? "bg-lime border-lime text-dark" : "bg-white border-line text-dark"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="font-display text-3xl md:text-4xl font-bold">{value}</span>
        {trend && (
          <span className="text-xs font-semibold text-dark/60">▲ {trend}</span>
        )}
      </div>
      <span className="text-xs md:text-sm uppercase tracking-wide text-dark/60">{label}</span>
    </div>
  );
}
