'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const t = useTranslations('Contact');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Mock submission logic
        // In a real app, you would send this to an API route or a service like Formspree
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Form submitted:', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center"
                    >
                        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-emerald-900 mb-2">{t('success_msg')}</h3>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-4 text-emerald-600 font-bold hover:underline"
                        >
                            Send another message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-indigo-100 uppercase tracking-widest ml-1 drop-shadow-sm blur-[0.3px]">
                                    {t('name_label')}
                                </label>
                                <input
                                    required
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('name_placeholder')}
                                    className="w-full px-6 py-4 bg-indigo-50/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all text-zinc-900 placeholder:text-zinc-500 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-indigo-100 uppercase tracking-widest ml-1 drop-shadow-sm blur-[0.3px]">
                                    {t('email_label')}
                                </label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t('email_placeholder')}
                                    className="w-full px-6 py-4 bg-indigo-50/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all text-zinc-900 placeholder:text-zinc-500 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-indigo-100 uppercase tracking-widest ml-1 drop-shadow-sm blur-[0.3px]">
                                {t('message_label')}
                            </label>
                            <textarea
                                required
                                id="message"
                                name="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={t('message_placeholder')}
                                className="w-full px-6 py-4 bg-indigo-50/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all text-zinc-900 placeholder:text-zinc-500 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.5)] backdrop-blur-sm resize-none"
                            ></textarea>
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-rose-500 text-sm font-medium ml-1">
                                <AlertCircle className="w-4 h-4" />
                                {t('error_msg')}
                            </div>
                        )}

                        <button
                            disabled={status === 'loading'}
                            type="submit"
                            className="w-full md:w-auto px-12 py-5 bg-[#CBBDEB]/60 backdrop-blur-xl text-[#4c1d95] font-medium rounded-full hover:bg-[#CBBDEB]/80 transition-all active:scale-95 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] border border-white/40 group"
                        >
                            {status === 'loading' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-[#581c87] border-t-transparent rounded-full animate-spin"></div>
                                    {t('sending_btn')}
                                </>
                            ) : (
                                <>
                                    <span className="drop-shadow-sm tracking-wide">{t('send_btn')}</span>
                                    <Send className="w-5 h-5 text-[#581c87] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </>
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
