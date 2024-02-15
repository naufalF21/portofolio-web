'use client';

import Header from '@/components/Header';
import HeroSection from '@/containers/home-page/hero-section';
import ExperienceSection from '@/containers/home-page/experience-section';
import Quotes from '@/components/Quotes';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className="max-w-[1024px] mx-auto ">
					<HeroSection />
					<Quotes />
					<ExperienceSection />
				</div>
			</main>
		</>
	);
}
