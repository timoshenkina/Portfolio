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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300
                        }}
                        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden"
                    >
                        {/* Gradient Accent */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 via-pink-500 to-amber-500" />

                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 p-2 rounded-2xl hover:bg-zinc-50 transition-colors z-10 group"
                        >
                            <X className="w-6 h-6 text-zinc-400 group-hover:text-zinc-600 transition-colors" />
                        </button>

                        <div className="p-8 md:p-14 overflow-y-auto max-h-[90vh]">
                            <div className="mb-10">
                                <h2 className="text-4xl font-black mb-3 text-zinc-900 tracking-tight">
                                    {t('title')}
                                </h2>
                                <p className="text-zinc-500 text-lg leading-relaxed">
                                    {t('description')}
                                </p>
                            </div>

                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
