'use client';

import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useTransform, animate, useSpring } from 'framer-motion';

interface Project {
    _id: string;
    title: string;
    slug: string;
    description: string;
    mainImage: any;
    tags: string[];
}

const MOCKS = [
    { _id: '1', title: 'Brand Identity', slug: 'project-1', tags: ['Branding', 'Design'], mainImage: null, description: '' },
    { _id: '2', title: 'E-Commerce App', slug: 'project-2', tags: ['UX/UI', 'Mobile'], mainImage: null, description: '' },
    { _id: '3', title: 'Marketing Site', slug: 'project-3', tags: ['Web Design', 'Development'], mainImage: null, description: '' },
    { _id: '4', title: 'SaaS Dashboard', slug: 'project-4', tags: ['Product Design', 'System'], mainImage: null, description: '' },
    { _id: '5', title: 'Fintech Mobile', slug: 'project-5', tags: ['App', 'Finance'], mainImage: null, description: '' },
];

export default function ProjectPreviews() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await client.fetch<Project[]>(PROJECTS_QUERY);
                if (data && data.length > 0) {
                    setProjects(data);
                } else {
                    setProjects(MOCKS);
                }
            } catch (e) {
                console.error("Failed to fetch projects", e);
                setProjects(MOCKS);
            }
        }
        fetchData();
    }, []);

    const CARD_WIDTH = 350;
    const CARD_GAP = 20; // Tighter gap for stack feel
    const DRAG_BUFFER = 100;

    const x = useMotionValue(0);

    const handleDragEnd = () => {
        const currentX = x.get();
        // Snap to nearest card based on Left alignment (0, -WIDTH, -2WIDTH...)
        const newIndex = Math.round(-currentX / (CARD_WIDTH + CARD_GAP));
        const clampedIndex = Math.max(0, Math.min(newIndex, projects.length - 1));

        setActiveIndex(clampedIndex);

        animate(x, -clampedIndex * (CARD_WIDTH + CARD_GAP), {
            type: "spring",
            stiffness: 200,
            damping: 25
        });
    };

    const getCardStyle = (index: number) => {
        const styles = [
            'bg-zinc-100 border-zinc-200 text-zinc-400',
            'bg-indigo-50 border-indigo-100 text-indigo-300',
            'bg-pink-50 border-pink-100 text-pink-300',
            'bg-amber-50 border-amber-100 text-amber-300',
        ];
        return styles[index % styles.length];
    };

    const t = useTranslations();

    if (!projects.length) return null;

    return (
        <section id="work" className="mb-32 overflow-hidden">
            <div className="flex items-end justify-between mb-12 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight">{t('Work.title')}</h2>
                <Link href="/projects" className="text-sm font-medium text-zinc-500 hover:text-indigo-600 flex items-center gap-1 transition-colors">
                    View All <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            {/* 
            Container aligned to LEFT. 
            perspective-1000 for 3D. 
            pl-6 or pl-[10vw] to ensure the first card has some breathing room from the edge.
        */}
            <div className="relative h-[600px] w-full cursor-grab active:cursor-grabbing perspective-1000">

                <motion.div
                    className="flex items-center absolute left-[5vw] md:left-[10vw] h-full"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{
                        left: -((projects.length - 1) * (CARD_WIDTH + CARD_GAP) + DRAG_BUFFER),
                        right: DRAG_BUFFER
                    }}
                    onDragEnd={handleDragEnd}
                >
                    {projects.map((project, index) => {
                        const style = getCardStyle(index);
                        return (
                            <Card
                                key={project._id || index}
                                project={project}
                                index={index}
                                containerX={x}
                                activeColor={style}
                                cardWidth={CARD_WIDTH}
                                cardGap={CARD_GAP}
                            />
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

function Card({ project, index, containerX, activeColor, cardWidth, cardGap }: {
    project: any,
    index: number,
    containerX: any,
    activeColor: string,
    cardWidth: number,
    cardGap: number
}) {
    // Current absolute position 'target' for this card to be the "Active Left Card"
    const position = index * (cardWidth + cardGap);

    // Calculate distance from the effective "Active Slot"
    // When containerX == -position, then THIS card is at the start (Active).
    // offset = containerX + position
    // If offset == 0 -> Active
    // If offset < 0 -> Moving Left (Shrinking/Leaving)
    // If offset > 0 -> To the Right (Waiting/Stacked)

    // We want:
    // 0 (Active) -> Scale 1.0, Opacity 1.0, zIndex High, Rotate 0
    // -Width (Left/Past) -> Scale 0.8, Opacity 0, Rotate -5
    // +Width (Right/Next) -> Scale 0.9, Opacity 0.7, zIndex Lower, Rotate 5

    const inputRange = [
        (index + 1) * -(cardWidth + cardGap), // Left (Past)
        index * -(cardWidth + cardGap),       // Active (Center/Left Slot)
        (index - 1) * -(cardWidth + cardGap)  // Right (Next)
    ];

    const scale = useTransform(containerX, inputRange, [0.85, 1, 0.9]);
    const opacity = useTransform(containerX, inputRange, [0, 1, 0.6]);
    const rotateY = useTransform(containerX, inputRange, [-25, 0, 15]);
    const zIndex = useTransform(containerX, inputRange, [0, 10, 5]);

    // Extra: push overlapping cards slightly to the right to create a "fan" if desired?
    // For now standard flow.

    const [bgColor, borderColor, _h, textColor] = activeColor.split(' ');

    return (
        <motion.div
            style={{
                width: cardWidth,
                height: cardWidth * 1.3,
                marginRight: cardGap,
                scale,
                opacity,
                rotateY,
                zIndex,
                // transformOrigin: "left center" // Pivot from left
            }}
            className={`relative rounded-[2.5rem] shrink-0 border-4 border-white shadow-2xl overflow-hidden cursor-pointer bg-white transition-shadow hover:shadow-indigo-200/50`}
            whileHover={{ scale: 1.02 }} // Slight hover boost
        >
            <div className={`absolute inset-0 ${bgColor} opacity-30`}></div>

            {project.mainImage ? (
                <Image
                    src={urlFor(project.mainImage).width(800).height(1000).url()}
                    alt={project.title}
                    fill
                    className="object-cover"
                    draggable={false}
                />
            ) : (
                <div className={`absolute inset-0 flex items-center justify-center opacity-40 ${textColor}`}>
                    <span className="font-bold text-lg tracking-widest uppercase rotate-90">Preview</span>
                </div>
            )}

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-3xl font-bold mb-2 leading-tight">{project.title}</h3>
                <p className="text-white/70 font-medium text-sm uppercase tracking-wider">{project.tags?.slice(0, 2).join(' • ')}</p>
            </div>

        </motion.div>
    )
}
