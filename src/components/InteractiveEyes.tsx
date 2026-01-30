'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function InteractiveEyes() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Calculate angle in degrees
            const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
            setRotation(angle);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex gap-1 items-center justify-center p-1"
            aria-hidden="true"
        >
            {/* Single Eye */}
            <div className="relative w-6 h-6 bg-blue-800 rounded-full overflow-hidden shadow-sm flex items-center justify-center">
                {/* White Layer */}
                <div className="w-[18px] h-[18px] bg-white rounded-full flex items-center justify-center">
                    {/* Light Blue Layer (Iris) - Moving Part involves this and inner pupil */}
                    <div
                        className="w-[10px] h-[10px] bg-cyan-400 rounded-full flex items-center justify-center"
                        style={{
                            transform: `rotate(${rotation}deg) translate(2.5px)`,
                        }}
                    >
                        {/* Pupil (Black) - Static inside the moving Iris, but larger now */}
                        <div className="w-[8px] h-[8px] bg-black rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
