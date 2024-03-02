'use client';

import { AiFillCaretRight } from 'react-icons/ai';
import educations from '@/data/educations';
import courses from '@/data/courses';
import Reveal from '@/components/Reveal';

export default function EducationSection() {
	return (
		<section className="text-white mt-16 px-4 lg:px-0">
			<Reveal width="fit-content">
				<div className="flex flex-row items-center gap-5 md:w-96">
					<h2 className="text-3xl font-semibold">Educations</h2>
					<hr className="hidden md:block w-full text-primary border" />
				</div>
			</Reveal>
			<Reveal>
				<div className="flex flex-row gap-4 py-10">
					<div className="border-s-2 border-white"></div>
					<div className="flex flex-col w-full">
						<ul className="flex flex-col gap-3">
							{educations.map((item, index) => (
								<li className="flex flex-row items-center gap-3" key={index}>
									<span>
										<AiFillCaretRight size="12" />
									</span>
									<div className="flex flex-row justify-between w-full">
										<p>{item.name}</p>
										<span>
											<i>{item.period}</i>
										</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Reveal>

			<Reveal width="fit-content">
				<h2 className="text-2xl">Courses</h2>
			</Reveal>
			<Reveal>
				<div className="flex flex-row gap-4 py-4">
					<div className="border-s-2 border-white"></div>
					<div className="flex flex-col w-full">
						<ul className="flex flex-col gap-3">
							{courses.map((item, index) => (
								<li className="flex flex-row items-center gap-3" key={index}>
									<span>
										<AiFillCaretRight size="12" />
									</span>
									<div className="flex flex-row justify-between w-full">
										<p>{item.name}</p>
										<span>
											<i>{item.period}</i>
										</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Reveal>
		</section>
	);
}
