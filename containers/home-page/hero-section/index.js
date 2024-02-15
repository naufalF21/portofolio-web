'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import jumbotronImg from '@/public/images/jumbotron.png';

export default function HeroSection() {
	return (
		<div className="text-white flex flex-row items-center justify-between gap-20 h-screen">
			<div className="flex flex-col gap-8">
				<h2 className="text-3xl font-semibold leading-normal">
					Naufal Firman is a <span className="text-primary">Front-end Developer</span>
				</h2>
				<p className="text-base">
					He crafts responsive websites where technologies meet creativity. To explore
					more about my projects and professional journey, feel free to contact me or
					visit my LinkedIn profile.
				</p>
				<Button text="Let's talk" />
			</div>
			<div>
				<Image src={jumbotronImg} alt="jumbotron-img" height="1200" />
				<div className="text-gray flex flex-row items-center border py-1 px-2 gap-2">
					<div className="w-[14px] h-[14px] bg-primary"></div>
					<p>
						Currently working on{' '}
						<Link
							href="https://github.com/naufalF21"
							className="font-semibold text-white hover:underline"
						>
							Portofolio
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
