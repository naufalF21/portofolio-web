'use client';

import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineLocalPhone } from 'react-icons/md';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="text-white border-t px-4 lg:px-0">
			<div className="max-w-[1024px] mx-auto py-4">
				<div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between mt-4">
					<div className="flex flex-col gap-3">
						<h2 className="font-semibold text-base">Naufal Firman</h2>
						<span className="text-sm">Fullstack Developer.</span>
					</div>
					<div className="flex flex-col gap-3">
						<h2 className="text-2xl font-semibold">Media</h2>
						<div className="flex flex-row gap-5">
							<Link
								href="https://www.linkedin.com/in/naufal-firman/"
								className="text-gray hover:text-white"
							>
								<FaLinkedin size="30" />
							</Link>
							<Link
								href="mailto:naufalfirman098@gmail.com"
								className="text-gray hover:text-white"
							>
								<IoIosMail size="30" />
							</Link>
							<Link
								href="https://github.com/naufalF21"
								className="text-gray hover:text-white"
							>
								<FaGithub size="30" />
							</Link>
							<Link href="tel:+6289617404827" className="text-gray hover:text-white">
								<MdOutlineLocalPhone size="30" />
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full text-center mt-10">
					<span className="text-sm text-gray">
						© Copyright 2024. Made by Naufal Firman
					</span>
				</div>
			</div>
		</footer>
	);
}
