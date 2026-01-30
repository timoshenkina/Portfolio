import { client } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Link } from '@/i18n/routing';
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

export default async function ProjectsPage() {
    const t = await getTranslations('Work');
    const projects = await client.fetch<Project[]>(PROJECTS_QUERY);

    return (
        <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen">
            <div className="mb-20">
                <Link href="/" className="text-zinc-500 hover:text-indigo-600 mb-8 inline-block transition">← {t('back_home')}</Link>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 mb-6">{t('title')}</h1>
                <p className="text-xl text-zinc-500 max-w-2xl">{t('description')}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project._id} className="group cursor-pointer">
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
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition">{project.title}</h3>
                            <p className="text-zinc-500 text-sm">{project.tags?.join(' • ')}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}
