import { Link } from '../../i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Mail, Send, Download, Briefcase, GraduationCap } from "lucide-react";

export default function Home() {
    const t = useTranslations();

    // Helper to parse HTML strings safely (very basic replacement for demo)
    // Ideally use the rich text support from next-intl
    const renderHTML = (rawHTML: string) => {
        return <span dangerouslySetInnerHTML={{ __html: rawHTML }} />;
    };

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
                        <span className="opacity-90">{t('Navigation.brand')}</span>
                    </Link>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
                        <Link href="/#work" className="hover:text-indigo-600 transition">{t('Navigation.work')}</Link>
                        <Link href="/#about" className="hover:text-indigo-600 transition">{t('Navigation.about')}</Link>
                        <Link href="/#contact" className="hover:text-indigo-600 transition">{t('Navigation.contact')}</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Language Switcher Placeholder - Functional by changing URL manually for now */}
                        <LanguageSwitcher />

                        <a
                            href="mailto:darynatimoshenkina@gmail.com"
                            className="px-4 py-2 text-sm font-semibold bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition hidden sm:block"
                        >
                            {t('Navigation.cta')}
                        </a>
                    </div>

                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="mb-32">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        {t('Hero.available')}
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900 mb-8 leading-[0.9]">
                        {t('Hero.title_graphic')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
                            {t('Hero.title_uxui')}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed mb-10">
                        {t.rich('Hero.description', {
                            span: (chunks) => <span className="text-zinc-900 font-medium">{chunks}</span>
                        })}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="mailto:darynatimoshenkina@gmail.com"
                            className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:scale-105 transition active:scale-95 flex items-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            {t('Hero.email_btn')}
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 font-bold rounded-2xl hover:border-indigo-200 hover:bg-indigo-50 transition active:scale-95 flex items-center gap-2 group"
                        >
                            <Send className="w-5 h-5 text-indigo-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                            {t('Hero.telegram_btn')}
                        </a>
                    </div>
                </section>

                {/* Selected Works Placeholder */}
                <section id="work" className="mb-32">
                    <div className="flex items-end justify-between mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">{t('Work.title')}</h2>
                        <Link href="/projects" className="text-sm font-medium text-zinc-500 hover:text-indigo-600 flex items-center gap-1">
                            {t('Work.view_all')} <ArrowUpRight className="w-4 h-4" />
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
                            <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition">{t('Work.project1.title')}</h3>
                            <p className="text-zinc-500 text-sm">{t('Work.project1.tags')}</p>
                        </div>

                        {/* Project Card 2 */}
                        <div className="group cursor-pointer md:mt-16">
                            <div className="aspect-[4/3] bg-indigo-50 rounded-3xl overflow-hidden mb-4 border border-indigo-100 relative group-hover:shadow-xl transition-all duration-300">
                                <div className="absolute inset-0 flex items-center justify-center text-indigo-300">
                                    <span className="font-mono text-sm">Project Preview Image</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition">{t('Work.project2.title')}</h3>
                            <p className="text-zinc-500 text-sm">{t('Work.project2.tags')}</p>
                        </div>
                    </div>
                </section>

                {/* CV / Experience Section */}
                <section id="about" className="mb-32 scroll-mt-24">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-1">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">{t('About.title')}</h2>
                            <p className="text-zinc-500 leading-relaxed mb-6">
                                {t('About.description')}
                            </p>
                            <a href="/resume.pdf" className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline">
                                <Download className="w-4 h-4" /> {t('About.download_cv')}
                            </a>
                        </div>

                        <div className="md:col-span-2 space-y-12">
                            {/* Experience List */}
                            <div className="space-y-8">
                                {['job1', 'job2', 'job3'].map((jobKey, index) => (
                                    <div key={jobKey} className="flex gap-4">
                                        <div className={`mt-1 min-w-10 h-10 rounded-full flex items-center justify-center ${index === 0 ? 'bg-indigo-100 text-indigo-600' :
                                            index === 1 ? 'bg-pink-100 text-pink-600' :
                                                'bg-yellow-100 text-yellow-600'
                                            }`}>
                                            {index === 0 ? <Briefcase className="w-5 h-5" /> :
                                                index === 1 ? <GraduationCap className="w-5 h-5" /> :
                                                    <ArrowUpRight className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">{t(`About.experience.${jobKey}.title`)}</h4>
                                            <p className="text-sm text-zinc-500 mb-2">{t(`About.experience.${jobKey}.date`)}</p>
                                            <p className="text-zinc-600 leading-relaxed">
                                                {t(`About.experience.${jobKey}.desc`)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Skills Tags */}
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">{t('About.skills.title')}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {(t.raw('About.skills.list') as string[]).map((skill) => (
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
                    <p className="text-zinc-400 text-sm">{t('Footer.copyright')}</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-zinc-400 hover:text-indigo-600 transition">Telegram</a>
                        <a href="mailto:darynatimoshenkina@gmail.com" className="text-zinc-400 hover:text-indigo-600 transition">Email</a>
                        <a href="https://www.behance.net/tymoshenkina" target="_blank" className="text-zinc-400 hover:text-indigo-600 transition">Behance</a>
                    </div>
                </footer>

            </main>
        </div>
    );
}
