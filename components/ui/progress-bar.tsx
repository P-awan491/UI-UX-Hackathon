import { formatCurrency } from "@/lib/utils";

type ProgressBarProps = {
  raised: number;
  goal: number;
};

export function ProgressBar({ raised, goal }: ProgressBarProps) {
  const progress = Math.min(Math.round((raised / goal) * 100), 100);

  return (
    <div aria-label={`${progress}% funded`}>
      <div className="mb-3 flex items-end justify-between gap-4 text-sm">
        <div>
          <p className="font-black text-[var(--foreground)]">{formatCurrency(raised)} raised</p>
          <p className="text-[var(--muted)]">of {formatCurrency(goal)} goal</p>
        </div>
        <p className="rounded-full bg-[var(--accent-soft)] px-3 py-1 font-black text-[#7a4c00] dark:text-[var(--accent)]">
          {progress}%
        </p>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
