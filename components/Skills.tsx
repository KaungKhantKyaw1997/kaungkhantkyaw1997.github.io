import Reveal from "./Reveal";

export default function Skills() {
  const technicalCategories = [
    {
      title: "Mobile Development",
      icon: "fa-solid fa-mobile-screen-button",
      skills: ["React Native", "Flutter", "Ionic"],
    },
    {
      title: "Frontend Development",
      icon: "fa-solid fa-code",
      skills: ["Angular", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Development",
      icon: "fa-solid fa-server",
      skills: ["Node.js", "Java"],
    },
    {
      title: "Databases",
      icon: "fa-solid fa-database",
      skills: ["PostgreSQL", "MSSQL", "MongoDB"],
    },
    {
      title: "Cloud & DevOps",
      icon: "fa-solid fa-cloud",
      skills: ["Microsoft Azure", "Docker"],
    },
    {
      title: "Tools & Platforms",
      icon: "fa-solid fa-tools",
      skills: ["GitLab & GitHub", "Firebase"],
    },
  ];

  const professionalSkills = ["Communication", "Problem Solving", "Leadership"];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <Reveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-mustard flex items-center justify-center text-forest-900 shadow">
            <i className="fa-solid fa-layer-group text-base"></i>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-forest-900">
            Software & Tech Skills
          </h2>
        </div>
      </Reveal>

      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100">
        <Reveal
          stagger
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6"
        >
          {technicalCategories.map((cat, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-8 h-8 shrink-0 rounded-xl bg-cream-50 border border-slate-200/60 text-forest-900 flex items-center justify-center">
                  <i className={`${cat.icon} text-xs`}></i>
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-forest-900">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-[11px] font-semibold hover:bg-mustard hover:border-mustard transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 shrink-0 rounded-xl bg-mustard/20 text-forest-900 flex items-center justify-center">
              <i className="fa-solid fa-user-tie text-xs"></i>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-forest-900">
                Professional Competencies
              </h3>
              <p className="text-[11px] text-slate-500">
                Core management & collaboration strengths
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {professionalSkills.map((skill, pIdx) => (
              <span
                key={pIdx}
                className="px-4 py-1.5 rounded-full bg-forest-900 text-white text-[11px] font-bold tracking-wide shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
