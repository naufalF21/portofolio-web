'use client';

import Image from 'next/image';
import webtech from '@/data/webtech';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiPhp } from 'react-icons/si';
import logoMySQL from '@/public/images/logo-mysql.png';
import devops from '@/data/devops';

export default function SkillsSection() {
	return (
		<div className="text-white mt-16">
			<div className="flex flex-row items-center gap-5 mb-5">
				<h2 className="text-3xl font-semibold">Skills</h2>
				<hr className="w-1/4 text-primary border" />
			</div>
			<div className="py-5">
				<h3 className="text-2xl">Languages</h3>
				<div className="pt-5 flex flex-row gap-8">
					<div className="flex flex-col items-center gap-2">
						<IoLogoJavascript size="80" className="text-[#FFDF00]" />
						<label className="text-xs">Javascript</label>
					</div>
					<div className="flex flex-col items-center gap-2">
						<SiPhp size="80" className="text-[#4F5B93]" />
						<label className="text-xs">PHP</label>
					</div>
				</div>
			</div>
			<div className="py-5">
				<h3 className="text-2xl">Web Technologies & Frameworks</h3>
				<div className="pt-5 flex flex-row gap-8">
					{webtech.map((item, index) => (
						<div className="flex flex-col items-center gap-2" key={index}>
							<item.icon size="80" className={item.classname} />
							<label className="text-xs">{item.name}</label>
						</div>
					))}
				</div>
			</div>
			<div className="py-5">
				<h3 className="text-2xl">Databases</h3>
				<div className="pt-5 flex flex-row gap-8">
					<div className="flex flex-col items-center gap-2">
						<Image src={logoMySQL} alt="logo-mysql" width="90" />
						<label className="text-xs">MySQL</label>
					</div>
				</div>
			</div>
			<div className="py-5">
				<h3 className="text-2xl">DevOps & Tools</h3>
				<div className="pt-5 flex flex-row gap-8">
					{devops.map((item, index) => (
						<div className="flex flex-col items-center gap-2" key={index}>
							<item.icon size="80" className={item.classname} />
							<label className="text-xs">{item.name}</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
