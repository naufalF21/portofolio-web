'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import Reveal from '../Reveal';

export default function Card({ image, technology, title, period, description }) {
	const [isReadMore] = useState(true);

	return (
		<div className={`border text-white w-full lg:w-80 flex flex-col`}>
			<div className="divide-y">
				<Reveal noSquare={true}>
					<Image src={image} alt="card-image" className="bg-cover" />
				</Reveal>
				<Reveal>
					<div className="p-3 text-sm">
						<p>{technology}</p>
					</div>
				</Reveal>
				<hr className="border" />
			</div>
			<div className="p-4 flex flex-col gap-4 justify-between h-full">
				<Reveal width="fit-content">
					<div className="flex flex-col">
						<h2 className="text-2xl font-medium">{title}</h2>
						<span className="text-sm italic">{period}</span>
					</div>
				</Reveal>
				<Reveal>
					<p className="pb-2 text-sm">
						{isReadMore ? description.slice(0, 150) : description}
						{description.length > 150 && <span>{isReadMore ? '....' : ''}</span>}
					</p>
				</Reveal>
				<div className="flex flex-row gap-3">
					<Button text="Github" />
					<Button text="Demo" />
				</div>
			</div>
		</div>
	);
}
