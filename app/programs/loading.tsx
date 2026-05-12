export default function ProgramsLoading() {
  return (
    <section className="container-shell py-16">
      <div className="h-12 max-w-xl animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--card)]">
            <div className="aspect-[4/3] animate-pulse bg-black/10 dark:bg-white/10" />
            <div className="space-y-4 p-6">
              <div className="h-4 w-24 animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
              <div className="h-6 animate-pulse rounded-full bg-black/10 dark:bg-white/10" />
              <div className="h-20 animate-pulse rounded-2xl bg-black/10 dark:bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
