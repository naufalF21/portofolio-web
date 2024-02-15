'use client';

import { FaArrowRightLong } from 'react-icons/fa6';

export default function ExperienceSection() {
	const experienceData = [
		'Developed the a new internal Portal using SharePoint & Frontend tools/frameworks.',
		'Tested a financial analysis system in the new mobile app, identifying microservice-related issues, documenting bugs in Jira, and cross-referencing with the related team.',
		'Developed a dynamic Power BI dashboard for an internal department.',
		'Developed a candidate management system for the team using Nintex workflows.',
		'Assisted with internal support, making modifications for departmental internal portals.',
	];

	return (
		<section className="text-white mt-16">
			<div className="flex flex-row items-center gap-5">
				<h2 className="text-3xl font-semibold">Experience</h2>
				<hr className="w-1/4 text-primary border" />
			</div>
			<div className="flex flex-row py-14 gap-10">
				<div className="w-[2px] h-72 bg-white"></div>
				<div className="flex flex-col w-full mt-6">
					<div className="flex flex-row justify-between ">
						<span>Full Stack Developer Intern</span>
						<span>
							<i>Summer - Autumn</i> 2023
						</span>
					</div>
					<ul className="py-6 flex flex-col gap-3 ps-6">
						{experienceData.map((name, index) => (
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
		</section>
	);
}
