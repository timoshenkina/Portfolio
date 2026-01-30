import { client } from '@/sanity/lib/client';
import { PROJECT_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PortableText } from 'next-sanity';

interface Project {
    _id: string;
    title: string;
    slug: string;
    description: string;
    mainImage: any;
    tags: string[];
    publishedAt: string;
    body: any;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await client.fetch<Project>(PROJECT_BY_SLUG_QUERY, { slug });

    if (!project) {
        notFound();
    }

    return (
        <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
            <Link href="/projects" className="text-zinc-500 hover:text-indigo-600 mb-8 inline-block transition">← All Projects</Link>

            <header className="mb-12">
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags?.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-bold rounded-full uppercase tracking-wider">{tag}</span>
                    ))}
                </div>
                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-zinc-900 mb-6 leading-tight">{project.title}</h1>
                <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl">{project.description}</p>
            </header>

            {project.mainImage && (
                <div className="aspect-video w-full relative rounded-3xl overflow-hidden mb-16 bg-zinc-100">
                    <Image
                        src={urlFor(project.mainImage).width(1200).height(675).url()}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            <div className="prose prose-lg prose-indigo mx-auto text-zinc-600">
                <PortableText value={project.body} />
            </div>
        </article>
    );
}
