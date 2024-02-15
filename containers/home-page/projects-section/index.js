'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';
import projects from '@/data/projects';

export default function ProjectsSection() {
	return (
		<div className="text-white py-8">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row items-center gap-5 w-1/3">
					<h2 className="text-3xl font-semibold">Projects</h2>
					<hr className="w-full text-primary border" />
				</div>
				<Button text="View all" />
			</div>
			<div className="flex flex-row justify-between mt-10">
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
