'use client';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Reveal from '@/components/reveal';
import ProjectsSection from '@/containers/projects-page/projects-section';
import { LazyMotion, domAnimation } from 'framer-motion';

export default function Projects() {
	return (
		<LazyMotion features={domAnimation}>
			<Header />
			<main className="text-white max-w-[1024px] mx-auto pt-32 pb-16 px-4">
				<div className="flex flex-col gap-2">
					<Reveal width="fit-content">
						<h2 className="text-3xl font-semibold">
							<span className="text-primary">/</span>projects
						</h2>
					</Reveal>
					<Reveal width="fit-content">
						<p className="text-gray">List of my project</p>
					</Reveal>
				</div>
				<ProjectsSection />
			</main>
			<Footer />
		</LazyMotion>
	);
}
