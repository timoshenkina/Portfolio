import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowLeft } from 'lucide-react';

export default function UXUIPage() {
    const t = useTranslations();

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-indigo-600 mb-12 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-8">
                UX/UI Design
            </h1>

            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-12">
                A collection of my user experience and user interface design projects, focusing on intuitive layouts and beautiful aesthetics.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Placeholders for future projects */}
                <div className="aspect-[4/3] bg-zinc-100 rounded-3xl flex items-center justify-center text-zinc-400 border border-zinc-100">
                    <span className="font-medium">Coming Soon</span>
                </div>
                <div className="aspect-[4/3] bg-zinc-100 rounded-3xl flex items-center justify-center text-zinc-400 border border-zinc-100">
                    <span className="font-medium">Coming Soon</span>
                </div>
            </div>
        </main>
    );
}
