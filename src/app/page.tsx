import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative px-6 md:px-12 lg:px-24">
      {/* Navigation (Simplified for now) */}
      <nav className="flex justify-between items-center py-8">
        <div className="text-xl font-bold tracking-tighter">TYMOSHENKINA</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#portfolio" className="hover:opacity-80 transition">Portfolio</Link>
          <Link href="#about" className="hover:opacity-80 transition">About</Link>
          <Link href="#contact" className="hover:opacity-80 transition">Contact Me</Link>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="flex-1 flex flex-col justify-center max-w-4xl py-12 md:py-24">
        <div className="space-y-2 mb-6">
          <p className="text-sm md:text-base font-mono tracking-widest opacity-90 uppercase">
            Web Designer & Developer
          </p>
          <p className="text-xs opacity-75">Based in Kyiv</p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8">
          TYMOSHENKINA
          <br />
          <span className="text-brand-blue drop-shadow-sm">DESIGN</span>
        </h1>

        <p className="text-xl md:text-2xl max-w-2xl font-light leading-relaxed opacity-90 mb-10">
          I help brands stand out with bold visuals and memorable experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#portfolio"
            className="px-8 py-4 bg-white text-brand-orange font-bold rounded-full hover:bg-gray-100 transition text-center"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-white font-bold rounded-full hover:bg-white/10 transition text-center"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      {/* System Status Mockup */}
      <div className="fixed bottom-8 right-8 hidden lg:block">
        <div className="bg-white/95 text-black backdrop-blur-sm p-4 rounded-xl shadow-lg border border-black/5 w-64">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">System Status</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <div className="space-y-1 text-xs font-mono">
            <div className="flex justify-between">
              <span>Framework</span>
              <span className="font-bold">Next.js 15</span>
            </div>
            <div className="flex justify-between">
              <span>Styling</span>
              <span className="font-bold">Tailwind v4</span>
            </div>
            <div className="flex justify-between">
              <span>Database</span>
              <span className="font-bold">Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
