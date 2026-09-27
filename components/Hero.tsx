import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 relative overflow-hidden"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Area */}
        <Reveal className="lg:col-span-7 space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-xs font-bold tracking-wide uppercase text-forest-900">
            <span className="w-2 h-2 rounded-full bg-mustard animate-ping"></span>
            <span>Software Developer • 6+ Years Exp</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-forest-900">
            Software <br />
            Developer <br />
            <span className="text-mustard underline decoration-forest-900/20 decoration-wavy">
              Portfolio.
            </span>
          </h1>

          <p className="text-sm sm:text-base font-semibold text-forest-900/80 flex items-center gap-2">
            <span className="text-mustard text-lg">—</span> Building Robust &
            Scalable Systems & Mobile Apps
          </p>

          <div className="mt-6 p-6 rounded-2xl bg-white/80 backdrop-blur border border-forest-900/10 shadow-sm space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-forest-900 text-white text-xs font-bold tracking-wider uppercase">
              About Me
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              Hello! I&apos;m{" "}
              <strong className="text-forest-900">Kaung Khant Kyaw</strong>, a
              passionate Software Developer with over 6 years of experience. I
              specialize in creating visually appealing and user-friendly
              websites and mobile apps. Known for understanding client needs and
              delivering on time, I thrive on collaboration and continuous
              learning.
            </p>

            <div className="pt-3 border-t border-forest-900/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-mustard/20 text-forest-900 flex items-center justify-center font-bold text-xs">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <p className="text-xs font-bold text-forest-900">
                  University of Computer Studies, Yangon
                </p>
                <p className="text-[11px] text-slate-500">
                  Bachelor of Computer Science (B.C.Sc) • Dec 2013 – Aug 2019
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Image Area */}
        <Reveal delay={150} className="lg:col-span-5 relative flex justify-center">
          <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-mustard-light rounded-full -top-6 -right-4 sm:-right-6 z-0 opacity-90 shadow-inner animate-float-slow"></div>

          <div className="relative z-10 w-[280px] sm:w-[340px] h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-forest-800">
            <Image
              src="/images/profile.jpeg"
              alt="Kaung Khant Kyaw"
              fill
              priority
              sizes="(max-width: 640px) 280px, 340px"
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
