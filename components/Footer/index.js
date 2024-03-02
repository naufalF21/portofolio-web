'use client';

import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineLocalPhone } from 'react-icons/md';
import Link from 'next/link';
import Reveal from '../Reveal';
import { m } from 'framer-motion';

export default function Footer() {
	return (
		<footer className="text-white border-t px-4 lg:px-0 w-full">
			<div className="max-w-[1024px] mx-auto py-4">
				<div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between mt-4">
					<Reveal>
						<div className="flex flex-col gap-3">
							<h2 className="font-semibold text-base">Naufal Firman</h2>
							<span className="text-sm">Fullstack Developer.</span>
						</div>
					</Reveal>
					<Reveal>
						<div className="flex flex-col gap-3">
							<h2 className="text-2xl font-semibold">Media</h2>
							<div className="flex flex-row gap-5">
								<m.a
									href="https://www.linkedin.com/in/naufal-firman/"
									className="text-gray hover:text-white"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<FaLinkedin size="30" />
								</m.a>
								<m.a
									href="mailto:naufalfirman098@gmail.com"
									className="text-gray hover:text-white"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<IoIosMail size="30" />
								</m.a>
								<m.a
									href="https://github.com/naufalF21"
									className="text-gray hover:text-white"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<FaGithub size="30" />
								</m.a>
								<m.a
									href="tel:+6289617404827"
									className="text-gray hover:text-white"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<MdOutlineLocalPhone size="30" />
								</m.a>
							</div>
						</div>
					</Reveal>
				</div>
				<div className="mt-10 flex flex-row justify-center">
					<Reveal width="fit-content">
						<span className="text-sm text-gray">
							© Copyright 2024. Made by Naufal Firman
						</span>
					</Reveal>
				</div>
			</div>
		</footer>
	);
}
