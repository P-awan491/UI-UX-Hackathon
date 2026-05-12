type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--brand)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-[var(--muted)]">{text}</p> : null}
    </div>
  );
}
