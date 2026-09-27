import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-forest-900/10 pt-16 pb-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-forest-900/10">
        {/* Column 1: Brand & Bio */}
        <div className="space-y-4 md:col-span-1">
          <Link
            href="#hero"
            className="text-2xl font-extrabold italic text-forest-900 flex items-center gap-1"
          >
            Kaung Khant<span className="text-mustard">.</span>
          </Link>
          <p className="text-xs text-slate-600 leading-relaxed">
            Software Developer specializing in cross-platform mobile apps,
            scalable backend systems, and robust web solutions.
          </p>
          <div className="inline-block px-3 py-1 rounded-full bg-forest-900 text-white text-[10px] font-bold tracking-wider">
            B.C.Sc • UCSY (2013-2019)
          </div>
          <div className="flex items-center space-x-3 pt-1">
            <a
              href="https://github.com/KaungKhantKyaw1997"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-slate-200/60 text-forest-900 hover:bg-mustard hover:border-mustard flex items-center justify-center transition-colors text-xs shadow-sm"
              aria-label="GitHub Profile"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/kaungkhantkyaw-feb97"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-slate-200/60 text-forest-900 hover:bg-mustard hover:border-mustard flex items-center justify-center transition-colors text-xs shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://hackerrank.com/kaungkhant19297"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-slate-200/60 text-forest-900 hover:bg-mustard hover:border-mustard flex items-center justify-center transition-colors text-xs shadow-sm"
              aria-label="HackerRank Profile"
            >
              <i className="fa-brands fa-hackerrank"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-forest-900">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>
              <Link
                href="#hero"
                className="hover:text-mustard transition-colors"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="hover:text-mustard transition-colors"
              >
                Software & Tech Skills
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="hover:text-mustard transition-colors"
              >
                Professional Experience
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-mustard transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Expertise */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-forest-900">
            Expertise
          </h4>
          <ul className="space-y-2 text-xs text-slate-600">
            <li>Mobile App Dev (React Native & Flutter)</li>
            <li>Frontend Systems (Angular & Next.js)</li>
            <li>Backend & Database Architecture</li>
            <li>Cloud DevOps & Store Deployments</li>
          </ul>
        </div>

        {/* Column 4: Call to Action Card */}
        <div className="space-y-4 bg-white p-6 rounded-3xl border border-slate-100 shadow-md h-fit">
          <h4 className="text-sm font-bold tracking-wide text-forest-900">
            Let&apos;s Work Together
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Have a project in mind? Let&apos;s create something amazing
            together!
          </p>
          <Link
            href="#contact"
            className="block text-center py-2.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs tracking-wide transition-all shadow-md"
          >
            Hire Me{" "}
            <i className="fa-solid fa-arrow-right ml-1 text-mustard"></i>
          </Link>
        </div>
      </div>

      {/* Bottom Copyright & Credits */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 flex flex-col sm:flex-row items-center justify-center text-xs text-slate-500">
        <div>© 2026 Kaung Khant Kyaw. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
