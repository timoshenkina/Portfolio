'use client';

import React, { useState } from 'react';
import { Link } from '../../i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import InteractiveEyes from '@/components/InteractiveEyes';
import PortfolioCategories from '@/components/PortfolioCategories';
import ContactForm from '@/components/ContactForm';
import ContactModal from '@/components/ContactModal';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Mail, Send, Download, Briefcase, GraduationCap, MapPin, Phone } from "lucide-react";

import HeroVisuals from '@/components/HeroVisuals';

export default function Home() {
    const t = useTranslations();
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
                        <Link href="/" className="hover:text-indigo-600 transition">{t('Navigation.home')}</Link>
                        <Link href="/#work" className="hover:text-indigo-600 transition">{t('Navigation.work')}</Link>
                        <Link href="/#about" className="hover:text-indigo-600 transition">{t('Navigation.about')}</Link>
                        <Link href="/#contact" className="hover:text-indigo-600 transition">{t('Navigation.contact')}</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />

                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="px-6 py-2.5 text-sm font-bold bg-[#E8E0F5]/60 backdrop-blur-xl text-[#4c1d95] rounded-full hover:bg-[#E8E0F5]/80 transition shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] border border-white/50 hidden sm:block active:scale-95"
                        >
                            {t('Navigation.cta')}
                        </button>
                    </div>

                </div>
            </nav>

            <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="mb-32 relative">
                    <HeroVisuals />
                    <div className="inline-flex items-center gap-2 px-1 py-1 pr-3 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                        <InteractiveEyes />
                        {t('Hero.available')}
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900 mb-8 leading-[0.9]">
                        {t('Hero.title_graphic')} <br />
                        <span
                            className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#4338ca_0%,#a855f7_30%,rgba(255,255,255,0.4)_50%,#a855f7_70%,#ec4899_100%)] bg-[length:250%_100%] animate-iridescent drop-shadow-[0_2px_10px_rgba(168,85,247,0.15)]"
                            style={{
                                textShadow: '0 0 20px rgba(168, 85, 247, 0.1), 0 0 40px rgba(236, 72, 153, 0.05)'
                            }}
                        >
                            {t('Hero.title_uxui')}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed mb-10">
                        {t.rich('Hero.description', {
                            span: (chunks) => <span className="text-zinc-900 font-medium">{chunks}</span>,
                            br: () => <br />
                        })}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="px-10 py-5 bg-[#E8E0F5]/60 backdrop-blur-xl text-[#4c1d95] font-bold rounded-full hover:bg-[#E8E0F5]/80 transition active:scale-95 flex items-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] border border-white/50 group"
                        >
                            <Mail className="w-5 h-5 text-[#581c87] group-hover:-translate-y-0.5 transition-transform duration-300" />
                            <span className="drop-shadow-sm">{t('Hero.email_btn')}</span>
                        </button>
                        <a
                            href="#"
                            target="_blank"
                            className="px-10 py-5 bg-[#E8E0F5]/60 backdrop-blur-xl text-[#4c1d95] font-bold rounded-full hover:bg-[#E8E0F5]/80 transition active:scale-95 flex items-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] border border-white/50 group"
                        >
                            <Send className="w-5 h-5 text-[#581c87] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            {t('Hero.telegram_btn')}
                        </a>
                    </div>
                </section>

                {/* Selected Works - Categorized Portfolio */}
                <PortfolioCategories />

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
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {['job1', 'job2', 'job3', 'job4', 'job5'].map((jobKey, index) => (
                                    <div key={jobKey} className="flex flex-col gap-3 p-4 rounded-2xl hover:bg-zinc-50 transition border border-transparent hover:border-zinc-100">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${index === 0 ? 'bg-indigo-100 text-indigo-600' :
                                            index === 1 ? 'bg-pink-100 text-pink-600' :
                                                index === 2 ? 'bg-amber-100 text-amber-600' :
                                                    index === 3 ? 'bg-emerald-100 text-emerald-600' :
                                                        'bg-blue-100 text-blue-600'
                                            }`}>
                                            {index === 0 ? <Briefcase className="w-6 h-6" /> :
                                                index === 1 ? <GraduationCap className="w-6 h-6" /> :
                                                    index === 2 ? <ArrowUpRight className="w-6 h-6" /> :
                                                        index === 3 ? <Briefcase className="w-6 h-6" /> :
                                                            <Send className="w-6 h-6" />}
                                        </div>
                                        <div>
                                            <h4 className={`text-lg font-black uppercase tracking-tight mb-1 ${index % 2 === 0 ? 'text-indigo-900' : 'text-zinc-900'
                                                }`}>{t(`About.experience.${jobKey}.title`)}</h4>
                                            <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${index === 0 ? 'text-indigo-500' :
                                                index === 1 ? 'text-pink-500' :
                                                    index === 2 ? 'text-amber-500' :
                                                        index === 3 ? 'text-emerald-500' :
                                                            'text-blue-500'
                                                }`}>{t(`About.experience.${jobKey}.date`)}</p>
                                            <p className="text-zinc-600 text-sm leading-relaxed">
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

                {/* Contact Section */}
                <section id="contact" className="mb-32 scroll-mt-24">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{t('Contact.title')}</h2>
                        <p className="text-zinc-500 max-w-xl mx-auto text-lg leading-relaxed">
                            {t('Contact.description')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-1">Email</h4>
                                    <a href={`mailto:${t('Contact.email')}`} className="text-lg font-bold text-zinc-900 hover:text-indigo-600 transition truncate block">
                                        {t('Contact.email')}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-pink-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-1">Phone</h4>
                                    <a href={`tel:${t('Contact.phone')}`} className="text-lg font-bold text-zinc-900 hover:text-indigo-600 transition">
                                        {t('Contact.phone')}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-1">Location</h4>
                                    <p className="text-lg font-bold text-zinc-900">
                                        {t('Contact.location')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-zinc-100 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-400 text-sm">{t('Footer.copyright')}</p>
                    <div className="flex gap-6">
                        <a href="#" className="text-zinc-400 hover:text-indigo-600 transition">Telegram</a>
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="text-zinc-400 hover:text-indigo-600 transition"
                        >
                            Email
                        </button>
                        <a href="https://www.behance.net/tymoshenkina" target="_blank" className="text-zinc-400 hover:text-indigo-600 transition">Behance</a>
                    </div>
                </footer>

                {/* Contact Modal */}
                <ContactModal
                    isOpen={isContactModalOpen}
                    onClose={() => setIsContactModalOpen(false)}
                />
            </main>
        </div>
    );
}
