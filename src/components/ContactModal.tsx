'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';
import { useTranslations } from 'next-intl';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const t = useTranslations('Contact');

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm shadow-inner"
                    />

                    {/* Modal Content */}
                    {/* Modal Content - Glassmorphism Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300
                        }}
                        className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem]"
                        style={{
                            background: 'rgba(255, 255, 255, 0.4)',
                            backdropFilter: 'blur(24px)',
                            WebkitBackdropFilter: 'blur(24px)',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.9)'
                        }}
                    >
                        {/* Top Shine Gradient */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-70" />

                        {/* Gradient Accent Blob */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] pointer-events-none" />

                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 p-2 rounded-full hover:bg-white/40 transition-colors z-10 group border border-white/20 shadow-sm"
                        >
                            <X className="w-5 h-5 text-zinc-600 group-hover:text-zinc-800 transition-colors" />
                        </button>

                        <div className="p-8 md:p-14 overflow-y-auto max-h-[90vh] relative z-10">
                            <div className="mb-10">
                                <h2 className="text-4xl font-black mb-3 text-zinc-900 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                                    {t('title')}
                                </h2>
                                <p className="text-zinc-700 text-lg leading-relaxed font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                                    {t('description')}
                                </p>
                            </div>

                            <ContactForm variant="glass" />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
