import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 relative">
      <Reveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-mustard flex items-center justify-center text-forest-900 shadow">
            <i className="fa-solid fa-paper-plane text-base"></i>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-forest-900">
            Let&apos;s Work Together
          </h2>
        </div>
      </Reveal>

      <Reveal stagger className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Info Column */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 shadow-md border border-slate-100 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-xs font-bold tracking-wide uppercase text-forest-900">
              <span className="w-2 h-2 rounded-full bg-mustard"></span>
              <span>Get In Touch</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Let&apos;s build something exceptional together. I usually reply
              within one business day.
            </p>
          </div>

          <div className="space-y-3 pt-5 border-t border-slate-100">
            <div className="flex items-center gap-3 bg-cream-50 rounded-2xl p-3 border border-slate-200/60">
              <div className="w-9 h-9 shrink-0 rounded-xl bg-mustard/20 text-forest-900 flex items-center justify-center">
                <i className="fa-solid fa-envelope text-xs"></i>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-xs font-semibold text-forest-900 truncate">
                  kaungkhant19297@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-cream-50 rounded-2xl p-3 border border-slate-200/60">
              <div className="w-9 h-9 shrink-0 rounded-xl bg-mustard/20 text-forest-900 flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-xs"></i>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Location
                </p>
                <p className="text-xs font-semibold text-forest-900">
                  Yangon, Myanmar • Remote & Hybrid
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100">
          <form
            action="https://formspree.io/f/xrpbkrll"
            method="POST"
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-forest-900 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="e.g. Ethan"
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-slate-200 text-forest-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-mustard focus:bg-white transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-forest-900 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="e.g. ethan@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-slate-200 text-forest-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-mustard focus:bg-white transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-forest-900 uppercase tracking-wider">
                Message / Project Details
              </label>
              <textarea
                required
                rows={5}
                name="message"
                placeholder="Tell me about your project or inquiry..."
                className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-slate-200 text-forest-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-mustard focus:bg-white transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-mustard hover:bg-mustard-light text-forest-900 font-extrabold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
