'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/containers/home-page/hero-section'));
const Quotes = dynamic(() => import('@/components/Quotes'));
const ExperienceSection = dynamic(() => import('@/containers/home-page/experience-section'));
const ProjectsSection = dynamic(() => import('@/containers/home-page/projects-section'));
const EducationSection = dynamic(() => import('@/containers/home-page/education-section'));
const SkillsSection = dynamic(() => import('@/containers/home-page/skills-section'));
const ContactsSection = dynamic(() => import('@/containers/home-page/contacts-section'));

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className="lg:max-w-[1024px] lg:mx-auto overflow-x-hidden">
					<HeroSection />
					<Quotes />
					<ExperienceSection />
					<ProjectsSection />
					<EducationSection />
					<SkillsSection />
					<ContactsSection />
				</div>
			</main>
			<Footer />
		</>
	);
}
