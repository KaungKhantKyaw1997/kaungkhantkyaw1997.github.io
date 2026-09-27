"use client";
import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "uabpay",
      subtitle: "Leading Fintech App & Wallet UI",
      desc: "Led frontend development of flagship mobile apps, integrating third-party payment gateways and fintech APIs.",
      tag: "uab bank",
      tech: "React Native",
      img: "https://images.unsplash.com/photo-1556742049-0a67d553c299?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "uabpay+",
      subtitle: "Premium Mobile Wallet UI",
      desc: "Enhanced security measures, performance speed optimization, and seamless app store releases.",
      tag: "uab bank",
      tech: "Next.js & Mobile",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "YDNB mBanking",
      subtitle: "Banking App & Portal UI",
      desc: "Spearheaded frontend development of mobile banking, admin portal, and transaction management systems.",
      tag: "Myanmar IT",
      tech: "Flutter & Angular",
      img: "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Watch Vault",
      subtitle: "Luxury E-commerce App UI",
      desc: "Developed real-time chat, push notifications, secure order tracking, and a frictionless shopping experience.",
      tag: "Freelance",
      tech: "Flutter & Firebase",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const handleInquire = (projectTitle: string) => {
    setSelectedProject(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const messageBox = document.querySelector(
        "textarea[name='message']",
      ) as HTMLTextAreaElement;
      if (messageBox) {
        messageBox.value = `Hi, I'm interested in discussing your work on ${projectTitle}. Let's connect!`;
      }
    }
  };

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 relative"
    >
      <Reveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-mustard flex items-center justify-center text-forest-900 shadow">
            <i className="fa-solid fa-briefcase text-base"></i>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-forest-900">
            My Projects
          </h2>
        </div>

        <Link
          href="/experience"
          className="w-full sm:w-auto justify-center px-5 py-2.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white text-xs font-bold tracking-wider transition-all flex items-center gap-2 shadow-md"
        >
          <span>View All Experience</span>
          <i className="fa-solid fa-arrow-right text-xs text-mustard"></i>
        </Link>
      </Reveal>

      <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-4 shadow-md border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all group relative"
          >
            <div>
              <div className="w-full h-56 rounded-2xl bg-slate-100 overflow-hidden mb-4 border border-slate-200/60 relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-forest-900 text-white text-[10px] font-bold">
                  {project.tag}
                </div>
              </div>
              <h3 className="text-base font-bold text-forest-900">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                {project.subtitle}
              </p>
              <p className="text-[11px] text-slate-600 mt-2 line-clamp-2">
                {project.desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between relative z-20">
              <span className="text-[10px] font-bold text-mustard uppercase">
                {project.tech}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("project >>>", project.title);
                  setSelectedProject(project);
                }}
                className="w-8 h-8 rounded-full bg-cream-50 group-hover:bg-forest-900 group-hover:text-white text-forest-900 flex items-center justify-center transition-colors cursor-pointer shadow-md pointer-events-auto"
                title={`View details for ${project.title}`}
              >
                <i className="fa-solid fa-arrow-right text-xs pointer-events-none"></i>
              </button>
            </div>
          </div>
        ))}
      </Reveal>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-forest-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream-50 border border-slate-200/60 text-forest-900 hover:bg-forest-900 hover:border-forest-900 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-xmark text-xs"></i>
            </button>

            {/* Modal Content */}
            <div className="space-y-4">
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-slate-200/60 bg-slate-100 relative">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-forest-900 text-white text-[10px] font-bold">
                  {selectedProject.tag}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-bold text-mustard uppercase tracking-wider">
                  {selectedProject.tech}
                </span>
                <h3 className="text-2xl font-extrabold text-forest-900 mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {selectedProject.desc}
              </p>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => handleInquire(selectedProject.title)}
                  className="flex-1 py-3 rounded-xl bg-mustard hover:bg-mustard-light text-forest-900 font-extrabold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  Inquire About Project{" "}
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-3 rounded-xl bg-cream-50 border border-slate-200/60 text-xs font-bold text-forest-900 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
