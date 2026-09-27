import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link
        href="#hero"
        className="text-3xl font-extrabold tracking-tight italic text-forest-900 flex items-center gap-1"
      >
        Kaung Khant<span className="text-mustard">.</span>
      </Link>

      <div className="border border-forest-900/20 rounded-lg overflow-hidden text-xs bg-white/60 backdrop-blur shadow-sm">
        <div className="grid grid-cols-2 divide-x divide-forest-900/15">
          <div className="px-3 py-1 font-semibold text-slate-500 bg-slate-50">
            ASSIGNMENT
          </div>
          <div className="px-3 py-1 font-bold text-forest-900">
            SOFTWARE DEV PORTFOLIO
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-forest-900/15 border-t border-forest-900/15">
          <div className="px-3 py-1 font-semibold text-slate-500 bg-slate-50">
            BY
          </div>
          <div className="px-3 py-1 font-bold text-forest-900">
            KAUNG KHANT KYAW
          </div>
        </div>
      </div>
    </header>
  );
}
