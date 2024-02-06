'use client';

import Image from 'next/image';
import cardImg from '@/public/images/Rectangle022.png';
import Button from '../Button';

export default function Card({ image, label, title, desc }) {
	return (
		<div className="divide-y border w-fit text-white">
			<Image src={cardImg} alt="card-image" />
			<div className="p-3">
				<span>HTML SCSS Python</span>
			</div>
			<div className="p-3 flex flex-col gap-2">
				<h2 className="text-2xl font-medium">ChertNodes</h2>
				<span className="mb-2">Minecraft servers hosting</span>
				<div className="flex gap-3">
					<Button text="Github" />
					<Button text="Demo" />
				</div>
			</div>
		</div>
	);
}
