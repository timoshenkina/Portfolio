'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CATEGORIES = [
    {
        id: 'ux-ui',
        title: 'UX/UI Design',
        slug: '/portfolio/ux-ui',
        tags: ['Web', 'Mobile', 'Experience'],
        color: 'bg-indigo-50 border-indigo-100 text-indigo-300'
    },
    {
        id: 'graphic-design',
        title: 'Graphic Design',
        slug: '/portfolio/graphic-design',
        tags: ['Branding', 'Typography', 'Logo'],
        color: 'bg-pink-50 border-pink-100 text-pink-300'
    },
    {
        id: 'art-works',
        title: 'Art Works',
        slug: '/portfolio/art-works',
        tags: ['Digital Art', 'Illustration', 'Creative'],
        color: 'bg-amber-50 border-amber-100 text-amber-300'
    }
];

export default function PortfolioCategories() {
    const [activeIndex, setActiveIndex] = useState(0);
    const t = useTranslations();

    const CARD_WIDTH = 350;
    const CARD_GAP = 20;
    const DRAG_BUFFER = 100;

    const x = useMotionValue(0);

    const handleDragEnd = () => {
        const currentX = x.get();
        const newIndex = Math.round(-currentX / (CARD_WIDTH + CARD_GAP));
        const clampedIndex = Math.max(0, Math.min(newIndex, CATEGORIES.length - 1));

        setActiveIndex(clampedIndex);

        animate(x, -clampedIndex * (CARD_WIDTH + CARD_GAP), {
            type: "spring",
            stiffness: 200,
            damping: 25
        });
    };

    return (
        <section id="work" className="mb-32 overflow-hidden">
            <div className="flex items-end justify-between mb-12 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">{t('Work.title')}</h2>
            </div>

            <div className="relative h-[600px] w-full cursor-grab active:cursor-grabbing perspective-1000">
                <motion.div
                    className="flex items-center absolute left-[5vw] md:left-[10vw] h-full"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{
                        left: -((CATEGORIES.length - 1) * (CARD_WIDTH + CARD_GAP) + DRAG_BUFFER),
                        right: DRAG_BUFFER
                    }}
                    onDragEnd={handleDragEnd}
                >
                    {CATEGORIES.map((category, index) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                            index={index}
                            containerX={x}
                            cardWidth={CARD_WIDTH}
                            cardGap={CARD_GAP}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function CategoryCard({ category, index, containerX, cardWidth, cardGap }: {
    category: any,
    index: number,
    containerX: any,
    cardWidth: number,
    cardGap: number
}) {
    const inputRange = [
        (index + 1) * -(cardWidth + cardGap),
        index * -(cardWidth + cardGap),
        (index - 1) * -(cardWidth + cardGap)
    ];

    const scale = useTransform(containerX, inputRange, [0.85, 1, 0.9]);
    const opacity = useTransform(containerX, inputRange, [0, 1, 0.6]);
    const rotateY = useTransform(containerX, inputRange, [-25, 0, 15]);
    const zIndex = useTransform(containerX, inputRange, [0, 10, 5]);

    const [bgColor, borderColor, textColor] = category.color.split(' ');

    return (
        <Link href={category.slug}>
            <motion.div
                style={{
                    width: cardWidth,
                    height: cardWidth * 1.3,
                    marginRight: cardGap,
                    scale,
                    opacity,
                    rotateY,
                    zIndex,
                }}
                className={`relative rounded-[2.5rem] shrink-0 border-4 border-white shadow-2xl overflow-hidden cursor-pointer bg-white transition-shadow hover:shadow-indigo-200/50`}
                whileHover={{ scale: 1.02 }}
            >
                <div className={`absolute inset-0 ${bgColor} opacity-30`}></div>

                <div className={`absolute inset-0 flex items-center justify-center opacity-40 ${textColor}`}>
                    <span className="font-bold text-lg tracking-widest uppercase rotate-90">{category.title.split(' ')[0]}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-3xl font-bold mb-2 leading-tight">{category.title}</h3>
                    <p className="text-white/70 font-medium text-sm uppercase tracking-wider">{category.tags.join(' • ')}</p>
                </div>
            </motion.div>
        </Link>
    );
}
