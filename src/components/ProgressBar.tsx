type ProgressBarProps = {
  label: string;
  level: number;
};

export default function ProgressBar({ label, level }: ProgressBarProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm mb-1.5">
        <span className="font-medium text-dark">{label}</span>
        <span className="text-dark/50">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-dark/10 overflow-hidden">
        <div className="h-full rounded-full bg-lime" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
