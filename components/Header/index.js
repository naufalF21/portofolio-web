'use client';

import Navbar from '../Navbar';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { m, AnimatePresence } from 'framer-motion';
import nav from '@/data/nav';

export default function Header() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const menuVars = {
		initial: {
			scaleY: 0,
		},
		animate: {
			scaleY: 1,
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				delay: 0.5,
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};
	const mobileNavLinkVars = {
		initial: {
			y: '30vh',
			transition: {
				duration: 0.5,
				ease: [0.37, 0, 0.63, 1],
			},
		},
		open: {
			y: 0,
			transition: {
				ease: [0, 0.55, 0.45, 1],
				duration: 0.7,
			},
		},
	};
	const containerVars = {
		initial: {
			transition: {
				staggerChildren: 0.09,
				staggerDirection: -1,
			},
		},
		open: {
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.09,
				staggerDirection: 1,
			},
		},
	};

	return (
		<>
			<header className="fixed text-white lg:py-7 border-b w-full bg-secondary top-0 z-40">
				<div className="fixed left-6 top-20 lg:mt-[5px] hidden lg:flex flex-col items-center gap-4">
					<div className="w-[.8px] h-[35vh] bg-white"></div>
					<div className="flex flex-col items-center gap-4 text-gray ">
						<m.a
							href="https://www.linkedin.com/in/naufal-firman/"
							target="_blank"
							className="hover:text-white"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.9 }}
						>
							<FaLinkedin size="30" />
						</m.a>
						<m.a
							href="mailto:naufalfirman098@gmail.com"
							target="_blank"
							className="hover:text-white"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<IoIosMail size="34" />
						</m.a>
						<m.a
							href="https://github.com/naufalF21"
							target="_blank"
							className="hover:text-white"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<FaGithub size="28" />
						</m.a>
						<m.a
							href="tel:+6289617404827"
							target="_blank"
							className="hover:text-white"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<MdOutlineLocalPhone size="32" />
						</m.a>
					</div>
				</div>
				<div className="lg:max-w-[1024px] mx-auto flex flex-row justify-between items-center px-4 py-5 lg:px-0 lg:py-0">
					<h2 className="font-bold text-base">Naufal Firman</h2>
					<Navbar />
					{/* mobile nav */}
					<div className="text-white lg:hidden">
						<m.button
							className="cursor-pointer font-medium uppercase text-white"
							onClick={() => setOpen(!open)}
							whileTap={{ scale: 0.9 }}
						>
							Menu
						</m.button>
					</div>
					{/* end mobile nav */}
				</div>
			</header>
			{/* mobile nav item */}
			<AnimatePresence>
				{open && (
					<m.div
						variants={menuVars}
						initial="initial"
						animate="animate"
						exit="exit"
						className="h-screen w-full bg-primary origin-top fixed z-40 pb-5 px-4 flex flex-col justify-between left-0 top-0 lg:hidden"
					>
						<div className="text-secondary mx-auto flex flex-row justify-between items-center py-5 w-full">
							<h2 className="font-bold text-base">Naufal Firman</h2>
							<Navbar />
							{/* mobile nav */}
							<div className="lg:hidden">
								<m.button
									className="cursor-pointer font-medium uppercase"
									onClick={() => setOpen(!open)}
									whileTap={{ scale: 0.9 }}
								>
									Close
								</m.button>
							</div>
							{/* end mobile nav */}
						</div>
						<m.div
							className="flex flex-col gap-4 justify-center items-center h-full"
							variants={containerVars}
							initial="initial"
							animate="open"
							exit="initial"
						>
							{nav.map((item, index) => (
								<div key={index} className="overflow-hidden">
									<m.div
										className="text-4xl text-black uppercase"
										variants={mobileNavLinkVars}
									>
										{/* <span className="text-primary">#</span> */}
										<Link
											href={item.link}
											className={`text-secondary  hover:font-semibold hover:border-b-2 pb-1 ${
												pathname === item.link
													? 'text-secondary font-semibold'
													: ''
											}`}
										>
											{item.name}
										</Link>
									</m.div>
								</div>
							))}
						</m.div>
						<m.div
							variants={containerVars}
							initial="initial"
							animate="open"
							exit="initial"
						>
							<div className="overflow-hidden">
								<m.div
									className="flex flex-row items-center gap-8 text-secondary justify-center"
									variants={mobileNavLinkVars}
								>
									<Link href="https://www.linkedin.com/in/naufal-firman/">
										<FaLinkedin size="40" />
									</Link>
									<Link href="mailto:naufalfirman098@gmail.com">
										<IoIosMail size="44" />
									</Link>
									<Link href="https://github.com/naufalF21">
										<FaGithub size="38" />
									</Link>
									<Link href="tel:+6289617404827">
										<MdOutlineLocalPhone size="42" />
									</Link>
								</m.div>
							</div>
						</m.div>
					</m.div>
				)}
			</AnimatePresence>
			{/* end mobile nav item */}
		</>
	);
}
