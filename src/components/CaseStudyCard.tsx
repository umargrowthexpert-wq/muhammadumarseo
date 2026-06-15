import Link from "next/link";
import Badge from "./Badge";
import { CaseStudy } from "@/lib/site-data";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 hover:border-dark/30 transition-colors"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <Badge variant="dark">{caseStudy.industry}</Badge>
        <span className="text-xs text-dark/40">{caseStudy.website}</span>
      </div>
      <h3 className="font-display text-xl font-bold mb-2 group-hover:underline">
        {caseStudy.client}
      </h3>
      <p className="text-sm text-dark/60 mb-4">{caseStudy.summary}</p>
      <div className="mt-auto grid grid-cols-3 gap-2 pt-4 border-t border-line">
        {caseStudy.results.slice(0, 3).map((result) => (
          <div key={result.label}>
            <p className="font-display text-lg font-bold">{result.value}</p>
            <p className="text-[11px] uppercase tracking-wide text-dark/50">{result.label}</p>
          </div>
        ))}
      </div>
    </Link>
  );
}
