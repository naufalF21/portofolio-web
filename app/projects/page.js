'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProjectsSection from '@/containers/projects-page/projects-section';

export default function Projects() {
	return (
		<>
			<Header />
			<main className="text-white max-w-[1024px] mx-auto pt-32 pb-16">
				<div className="flex flex-col gap-2">
					<h2 className="text-3xl font-semibold">
						<span className="text-primary">/</span>projects
					</h2>
					<p className="text-gray">List of my project</p>
				</div>
				<ProjectsSection />
			</main>
			<Footer />
		</>
	);
}
