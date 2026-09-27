import Reveal from "./Reveal";

export default function Experiences() {
  const experiences = [
    {
      role: "Software Developer | Manager",
      company: "uab bank",
      period: "Dec 2024 - Present",
      location: "Yangon, Myanmar",
      desc: "Led frontend development of uabpay and uabpay+, the bank's flagship mobile apps, integrating third-party payment gateways like Alipay and Boxo eSIM, mentoring junior devs, and handling store deployments.",
      notableProjects:
        "uabpay, uabpay+, MAI Xtra, SGH Plus, uabsc Trading, SerMal Restaurant, Supermyan",
      tech: "React Native • Next.js • Socket • Firebase • GitLab",
    },
    {
      role: "Software Developer",
      company: "Myanmar Information Technology",
      period: "Nov 2019 - Mar 2024",
      location: "Yangon, Myanmar",
      desc: "Spearheaded frontend development of mobile banking, admin portals, and transaction management systems. Improved performance via JMeter testing and coordinated end-to-end store releases.",
      notableProjects: "YDNB mBanking, TCB mBanking, NDB mBanking",
      tech: "Flutter • Angular • Bootstrap • Tailwind CSS • Firebase • Docker • Azure • GitLab CI/CD",
    },
    {
      role: "Freelance Mobile Developer",
      company: "Watch Vault by Diggie",
      period: "Oct 2023 - Dec 2023",
      location: "Yangon, Myanmar",
      desc: "Drove frontend development of a luxury watch e-commerce app with real-time chat, push notifications, and seamless order tracking from product browsing to checkout.",
      notableProjects: null,
      tech: "Flutter • Socket • Firebase • GitHub",
    },
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
      <Reveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-mustard flex items-center justify-center text-forest-900 shadow">
            <i className="fa-solid fa-briefcase text-base"></i>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-forest-900">
            Professional Experience
          </h2>
        </div>
      </Reveal>

      <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-forest-900 text-white text-[10px] font-bold shrink-0">
                  {exp.period}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 truncate">
                  {exp.location}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-forest-900">
                  {exp.role}
                </h3>
                <p className="text-xs font-bold text-mustard mt-0.5">
                  {exp.company}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {exp.desc}
              </p>

              {exp.notableProjects && (
                <div className="text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-slate-600 break-words">
                  <span className="font-bold text-forest-900">Notable:</span>{" "}
                  {exp.notableProjects}
                </div>
              )}
            </div>

            <div className="pt-4 mt-6 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block leading-normal">
                {exp.tech}
              </span>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
