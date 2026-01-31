'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CATEGORIES = [
    {
        id: 'ux-ui',
        title: 'UX/UI Design',
        slug: '/portfolio/ux-ui',
        tags: ['Web', 'Mobile', 'Experience'],
        color: 'from-indigo-500/10 to-indigo-500/20',
        borderColor: 'border-indigo-200/20'
    },
    {
        id: 'graphic-design',
        title: 'Graphic Design',
        slug: '/portfolio/graphic-design',
        tags: ['Branding', 'Typography', 'Logo'],
        color: 'from-pink-500/10 to-pink-500/20',
        borderColor: 'border-pink-200/20'
    },
    {
        id: 'art-works',
        title: 'Art Works',
        slug: '/portfolio/art-works',
        tags: ['Digital Art', 'Illustration', 'Creative'],
        color: 'from-amber-500/10 to-amber-500/20',
        borderColor: 'border-amber-200/20'
    }
];

export default function PortfolioCategories() {
    const t = useTranslations();

    // Animation for the background object - slightly slower and more fluid
    const starFloatAnimation = {
        animate: {
            y: [0, -30, 0, 30, 0],
            transition: {
                duration: 10,
                ease: "easeInOut" as const,
                repeat: Infinity
            }
        }
    };

    // Card floating animation - subtle
    const cardFloatAnimation = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 6,
                ease: "easeInOut" as const,
                repeat: Infinity
            }
        }
    };

    return (
        <section
            id="work"
            className="mb-32 relative py-24 rounded-[3rem] overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: 'url("/portfolio-bg.png")' }}
            >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
            </div>

            {/* Floating Background Stars (Matching Hero Eye Style) */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
                {/* Large Background Star */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none select-none z-1"
                    animate={{
                        y: [-20, 20, -20],
                        rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src="/star.png"
                        alt="Background Star"
                        fill
                        className="object-contain opacity-60"
                        priority
                    />
                </motion.div>

                {/* Small Floating Star 1 */}
                <motion.div
                    className="absolute top-[15%] right-[10%] w-32 h-32 opacity-80 z-2"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        rotate: [0, 15, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                >
                    <Image src="/star.png" alt="Floating Star 1" fill className="object-contain" />
                </motion.div>

                {/* Small Floating Star 2 */}
                <motion.div
                    className="absolute bottom-[20%] left-[5%] w-24 h-24 opacity-70 z-2"
                    animate={{
                        y: [0, 30, 0],
                        x: [0, -15, 0],
                        rotate: [0, -20, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                >
                    <Image src="/star.png" alt="Floating Star 2" fill className="object-contain" />
                </motion.div>
            </div>

            <div className="relative z-10 px-6 max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-16 px-4">
                    <h2 className="text-4xl font-black tracking-tight text-zinc-900 drop-shadow-sm">
                        {t('Work.title')}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {CATEGORIES.map((category, index) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                            index={index}
                            floatAnimation={cardFloatAnimation}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CategoryCard({ category, index, floatAnimation }: {
    category: any,
    index: number,
    floatAnimation: any
}) {
    return (
        <Link href={category.slug} className="group h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: "easeOut"
                }}
                className="h-full"
            >
                <motion.div
                    animate={{ y: floatAnimation.animate.y }}
                    transition={floatAnimation.animate.transition}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className={`relative h-[450px] rounded-[2.5rem] border ${category.borderColor} bg-gradient-to-br ${category.color} backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden flex flex-col justify-end p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 active:scale-[0.98] border-white/40`}
                >
                    {/* Matte finish overlay */}
                    <div className="absolute inset-0 bg-white/5 opacity-40 mix-blend-overlay"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/50">
                            <ArrowUpRight className="w-6 h-6 text-zinc-900/60" />
                        </div>

                        <h3 className="text-3xl font-black mb-3 leading-tight text-zinc-900 group-hover:text-indigo-900 transition-colors">
                            {category.title}
                        </h3>

                        <p className="text-zinc-600/80 font-bold text-xs uppercase tracking-[0.2em] mb-2">
                            {category.tags.join(' • ')}
                        </p>

                        <div className="h-1 w-0 bg-indigo-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                    </div>

                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500"></div>
                </motion.div>
            </motion.div>
        </Link>
    );
}
