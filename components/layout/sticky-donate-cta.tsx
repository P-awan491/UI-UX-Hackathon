import Link from "next/link";

export function StickyDonateCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/20 bg-[#10251f]/94 p-3 text-white shadow-2xl backdrop-blur md:hidden">
      <Link
        href="/donate"
        className="mx-auto flex max-w-md items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-black text-[#17211d]"
      >
        Give today
      </Link>
    </div>
  );
}
