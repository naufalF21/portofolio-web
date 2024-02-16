'use client';

import Navbar from '../Navbar';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineLocalPhone } from 'react-icons/md';

export default function Header() {
	return (
		<header className="fixed text-white py-7 border-b w-full bg-secondary top-0 z-50">
			<div className="fixed left-6 top-20 flex flex-col items-center gap-4">
				<div className="w-[.8px] h-[35vh] bg-white"></div>
				<div className="flex flex-col items-center gap-4 text-gray ">
					<Link
						href="https://www.linkedin.com/in/naufal-firman/"
						className="hover:text-white"
					>
						<FaLinkedin size="30" />
					</Link>
					<Link href="mailto:naufalfirman098@gmail.com" className="hover:text-white">
						<IoIosMail size="34" />
					</Link>
					<Link href="https://github.com/naufalF21" className="hover:text-white">
						<FaGithub size="28" />
					</Link>
					<Link href="tel:+6289617404827" className="hover:text-white">
						<MdOutlineLocalPhone size="32" />
					</Link>
				</div>
			</div>
			<div className="max-w-[1024px] mx-auto flex flex-row justify-between">
				<h2 className="font-semibold text-base">Naufal Firman</h2>
				<Navbar />
			</div>
		</header>
	);
}
