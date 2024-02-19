'use client';

import Navbar from '../Navbar';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { CgMenuRight } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import nav from '@/data/nav';

export default function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	return (
		<>
			<header
				className={`fixed text-white lg:py-7 ${
					!open && 'border-b'
				} w-full bg-secondary top-0 z-50`}
			>
				<div className="fixed left-6 top-20 hidden lg:flex flex-col items-center gap-4">
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
				<div className="lg:max-w-[1024px] mx-auto flex flex-row justify-between items-center px-4 py-5 lg:px-0 lg:py-0">
					<h2 className="font-bold text-base">Naufal Firman</h2>
					<Navbar />
					{/* mobile nav */}
					<div className="text-white lg:hidden">
						<div>
							<button className="cursor-pointer" onClick={() => setOpen(!open)}>
								{open ? <IoMdClose size="38" /> : <CgMenuRight size="38" />}
							</button>
						</div>
					</div>
					{/* end mobile nav */}
				</div>
			</header>
			{/* mobile nav */}
			{open && (
				<div className="text-white h-screen w-full bg-secondary fixed z-40 pt-20 pb-5 px-4 flex flex-col justify-between lg:hidden">
					<ul className="flex flex-col gap-6">
						{nav.map((item, index) => (
							<li key={index} className="text-lg">
								{/* <span className="text-primary">#</span> */}
								<Link
									href={item.link}
									className={`text-gray capitalize hover:text-white hover:border-b-2 pb-1 ${
										pathname === item.link ? 'text-white font-semibold' : ''
									}`}
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
					<div className="flex flex-row items-center gap-8 text-gray justify-center">
						<Link
							href="https://www.linkedin.com/in/naufal-firman/"
							className="hover:text-white"
						>
							<FaLinkedin size="40" />
						</Link>
						<Link href="mailto:naufalfirman098@gmail.com" className="hover:text-white">
							<IoIosMail size="44" />
						</Link>
						<Link href="https://github.com/naufalF21" className="hover:text-white">
							<FaGithub size="38" />
						</Link>
						<Link href="tel:+6289617404827" className="hover:text-white">
							<MdOutlineLocalPhone size="42" />
						</Link>
					</div>
				</div>
			)}
			{/* end mobile nav */}
		</>
	);
}
