'use client';

import experience from '@/data/experience';
import { FaArrowRightLong } from 'react-icons/fa6';
import Reveal from '@/components/reveal';

export default function ExperienceSection() {
	return (
		<section className="text-white mt-16 px-4 lg:px-0">
			<Reveal width="fit-content">
				<div className="flex flex-row items-center gap-5 md:w-96">
					<h2 className="text-3xl font-semibold">Experiences</h2>
					<hr className="hidden md:block w-full text-primary border" />
				</div>
			</Reveal>
			<Reveal>
				<div className="flex flex-row py-14 gap-8 lg:gap-10">
					<div className="border-s-2 border-white"></div>
					<div className="flex flex-col w-full mt-6">
						<div className="flex flex-row justify-between">
							<span>Algostudio - Full Stack Developer Intern</span>
							<span>
								<i>Jul - Okt</i> 2023
							</span>
						</div>
						<ul className="py-6 flex flex-col gap-3 ps-6">
							{experience.map((name, index) => (
								<li className="flex flex-row items-center gap-3" key={index}>
									<span>
										<FaArrowRightLong size="12" />
									</span>
									<p>{name}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
