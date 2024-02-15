'use client';

import Header from '@/components/Header';
import HeroSection from '@/containers/home-page/hero-section';
import ExperienceSection from '@/containers/home-page/experience-section';
import Quotes from '@/components/Quotes';
import ProjectsSection from '@/containers/home-page/projects-section';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className="max-w-[1024px] mx-auto ">
					<HeroSection />
					<Quotes />
					<ExperienceSection />
					<ProjectsSection />
				</div>
			</main>
		</>
	);
}
