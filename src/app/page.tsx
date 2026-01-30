import Link from "next/link";
import { ArrowUpRight, Mail, Send, Download, Briefcase, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-sm">T</div>
            <span className="opacity-90">TYMOSHENKINA</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            <Link href="#work" className="hover:text-indigo-600 transition">Work</Link>
            <Link href="#about" className="hover:text-indigo-600 transition">About & CV</Link>
            <Link href="#contact" className="hover:text-indigo-600 transition">Contact</Link>
          </div>
          <a
            href="mailto:your-email@example.com"
            className="px-4 py-2 text-sm font-semibold bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition hidden sm:block"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Open for work
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900 mb-8 leading-[0.9]">
            Graphic & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
              UX/UI Designer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed mb-10">
            I craft digital experiences that blend <span className="text-zinc-900 font-medium">minimalist aesthetics</span> with <span className="text-zinc-900 font-medium">user-centered logic</span>. 
            Currently transitioning from graphic design to building full digital products.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:your-email@example.com"
              className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:scale-105 transition active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-2xl hover:border-indigo-200 hover:bg-indigo-50 transition active:scale-95 flex items-center gap-2 group"
            >
              <Send className="w-5 h-5 text-indigo-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              Telegram
            </a>
          </div>
        </section>

        {/* Selected Works Placeholder */}
        <section id="work" className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Selected Works</h2>
            <Link href="/projects" className="text-sm font-medium text-zinc-500 hover:text-indigo-600 flex items-center gap-1">
              View all works <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden mb-4 border border-zinc-100 relative group-hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                  <span className="font-mono text-sm">Project Preview Image</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition">Landing Page Redesign</h3>
              <p className="text-zinc-500 text-sm">Web Design • 2024</p>
            </div>

             {/* Project Card 2 */}
             <div className="group cursor-pointer md:mt-16">
              <div className="aspect-[4/3] bg-indigo-50 rounded-3xl overflow-hidden mb-4 border border-indigo-100 relative group-hover:shadow-xl transition-all duration-300">
                 <div className="absolute inset-0 flex items-center justify-center text-indigo-300">
                  <span className="font-mono text-sm">Project Preview Image</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition">Mobile App Concept</h3>
              <p className="text-zinc-500 text-sm">UX/UI • 2024</p>
            </div>
          </div>
        </section>

        {/* CV / Experience Section */}
        <section id="about" className="mb-32 scroll-mt-24">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Experience & Skills</h2>
              <p className="text-zinc-500 leading-relaxed mb-6">
                I specialize in creating clean, efficient interfaces. My background in graphic design helps me understand composition and color, while my growing knowledge of product design ensures usability.
              </p>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline">
                <Download className="w-4 h-4" /> Download Full CV
              </a>
            </div>

            <div className="md:col-span-2 space-y-12">
              {/* Experience List */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 min-w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Freelance Designer</h4>
                    <p className="text-sm text-zinc-500 mb-2">2023 — Present</p>
                    <p className="text-zinc-600 leading-relaxed">
                      Designed landing pages and promotional materials for small businesses. Created visual identities and social media assets.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 min-w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">UX/UI Design Course</h4>
                    <p className="text-sm text-zinc-500 mb-2">2023 — 2024</p>
                    <p className="text-zinc-600 leading-relaxed">
                      Intensive study of user research, wireframing, prototyping in Figma, and design systems.
                    </p>
                  </div>
                </div>
              </div>

               {/* Skills Tags */}
               <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Adobe Photoshop", "Adobe Illustrator", "Prototyping", "Landing Pages", "Visual Design", "HTML/CSS Basics"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm font-medium rounded-lg border border-zinc-200">
                        {skill}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-100 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-sm">© 2024 Tymoshenkina Design. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="https://t.me/yourusername" className="text-zinc-400 hover:text-indigo-600 transition">Telegram</a>
             <a href="mailto:email@example.com" className="text-zinc-400 hover:text-indigo-600 transition">Email</a>
             <a href="#" className="text-zinc-400 hover:text-indigo-600 transition">Behance</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
