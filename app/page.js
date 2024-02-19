'use client';

import Header from '@/components/Header';
import HeroSection from '@/containers/home-page/hero-section';
import ExperienceSection from '@/containers/home-page/experience-section';
import Quotes from '@/components/Quotes';
import ProjectsSection from '@/containers/home-page/projects-section';
import EducationSection from '@/containers/home-page/education-section';
import SkillsSection from '@/containers/home-page/skills-section';
import ContactsSection from '@/containers/home-page/contacts-section';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className="lg:max-w-[1024px] lg:mx-auto ">
					<HeroSection />
					{/* <Quotes />
					<ExperienceSection />
					<ProjectsSection />
					<EducationSection />
					<SkillsSection />
					<ContactsSection /> */}
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
}
