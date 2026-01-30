'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();

    return (
        <div className="flex items-center bg-zinc-100 rounded-full p-1">
            <Link
                href={pathname}
                locale="en"
                className={`px-3 py-1 rounded-full text-xs font-bold transition flex items-center gap-1 ${locale === 'en' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
                <span>🇺🇸</span> EN
            </Link>
            <Link
                href={pathname}
                locale="uk"
                className={`px-3 py-1 rounded-full text-xs font-bold transition flex items-center gap-1 ${locale === 'uk' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
                <span>🇺🇦</span> UA
            </Link>
            <Link
                href={pathname}
                locale="ru"
                className={`px-3 py-1 rounded-full text-xs font-bold transition flex items-center gap-1 ${locale === 'ru' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
            >
                <span>🇷🇺</span> RU
            </Link>
        </div>
    );
}
