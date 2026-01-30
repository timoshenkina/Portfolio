import { client } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Link } from '@/i18n/routing';
import { ArrowUpRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

interface Project {
    _id: string;
    title: string;
    slug: string;
    description: string;
    mainImage: any;
    tags: string[];
}

export default async function SelectedWorks() {
    const t = await getTranslations('Work');
    const projects = await client.fetch<Project[]>(PROJECTS_QUERY);

    // Fallback if no projects (or while setting up) could be handled here or just show empty
    if (!projects || projects.length === 0) {
        // Optional: return hardcoded fallback or null
        // For now, let's return null so the section disappears if empty, 
        // or we could keep the hardcoded ones as 'demo' data. 
        // Let's stick to the plan of replacing, but if empty, maybe show a message?
        // Actually, let's just return nothing if empty to be clean.
        return (
            <section id="work" className="mb-32">
                <div className="flex items-end justify-between mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
                </div>
                <p className="text-zinc-500">No projects found yet. Add them in the Studio!</p>
            </section>
        );
    }

    return (
        <section id="work" className="mb-32">
            <div className="flex items-end justify-between mb-12">
                <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
                <Link href="/projects" className="text-sm font-medium text-zinc-500 hover:text-indigo-600 flex items-center gap-1">
                    {t('view_all')} <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={project._id} className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-16' : ''}`}>
                        <Link href={`/projects/${project.slug}`}>
                            <div className="aspect-[4/3] bg-zinc-100 rounded-3xl overflow-hidden mb-4 border border-zinc-100 relative group-hover:shadow-xl transition-all duration-300">
                                {project.mainImage ? (
                                    <Image
                                        src={urlFor(project.mainImage).width(800).height(600).url()}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                                        <span className="font-mono text-sm">No Image</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition">{project.title}</h3>
                            <p className="text-zinc-500 text-sm">{project.tags?.join(' • ')}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
