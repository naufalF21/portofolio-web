'use client';

import Card from '@/components/Card';
import Reveal from '@/components/Reveal';
import projects from '@/data/projects';

export default function ProjectsSection() {
	return (
		<div className="mt-12 gap-12">
			<Reveal width="fit-content">
				<div className="flex flex-row items-center gap-5 md:w-96">
					<h2 className="text-3xl font-semibold">Big Enough</h2>
					<hr className="text-primary border w-full hidden md:block" />
				</div>
			</Reveal>
			<div className="flex flex-row flex-wrap justify-between py-10 gap-y-10">
				{projects.map((item, index) => (
					<Card
						key={index}
						image={item.image}
						technology={item.technology}
						title={item.title}
						period={item.period}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
}
