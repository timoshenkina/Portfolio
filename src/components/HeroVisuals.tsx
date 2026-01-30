'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroVisuals() {
    // Animation variants for the floating eyes
    // Sequential: Up/Down then Left/Right loop
    const floatAnimation = {
        animate: {
            y: [0, -30, 0, 30, 0, 0, 0, 0, 0], // Up, Center, Down, Center... then stay Center
            x: [0, 0, 0, 0, 0, -30, 0, 30, 0], // Stay Center... then Left, Center, Right, Center
            transition: {
                duration: 12, // Longer duration for the full sequence
                ease: "easeInOut" as const,
                repeat: Infinity,
                times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]
            }
        }
    };

    return (
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
            {/* Background Large Eye - Blurred and Faded */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-10 blur-sm mix-blend-multiply [clip-path:circle(50%)]">
                <Image
                    src="/eye.png"
                    alt="Background Eye"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Floating Eyes */}
            {/* Eye 1 */}
            <motion.div
                className="absolute top-[20%] right-[2%] w-32 h-32 md:w-72 md:h-72 opacity-80 mix-blend-multiply [clip-path:circle(50%)]"
                variants={floatAnimation}
                animate="animate"
                transition={{ delay: 0 }} // No delay for first one
            >
                <Image src="/eye.png" alt="Floating Eye 1" fill className="object-contain" />
            </motion.div>

            {/* Eye 2 */}
            <motion.div
                className="absolute bottom-[10%] right-[30%] w-16 h-16 md:w-28 md:h-28 opacity-70 mix-blend-multiply [clip-path:circle(50%)]"
                variants={floatAnimation}
                animate="animate"
                transition={{ delay: 2 }} // Delay to stagger animation
            >
                <Image src="/eye.png" alt="Floating Eye 2" fill className="object-contain" />
            </motion.div>

            {/* Eye 3 */}
            <motion.div
                className="absolute top-[10%] left-[50%] w-10 h-10 md:w-16 md:h-16 opacity-60 mix-blend-multiply [clip-path:circle(50%)]"
                variants={floatAnimation}
                animate="animate"
                transition={{ delay: 4 }} // More delay
            >
                <Image src="/eye.png" alt="Floating Eye 3" fill className="object-contain" />
            </motion.div>
        </div>
    );
}
