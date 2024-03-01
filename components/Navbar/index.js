'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import nav from '@/data/nav';
import { motion } from 'framer-motion';

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="hidden lg:flex gap-10">
				{nav.map((item, index) => (
					<motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						<span className="text-primary">#</span>
						<Link
							href={item.link}
							className={`text-gray hover:text-white hover:border-b-2 pb-1 ${
								pathname === item.link ? 'text-white font-semibold capitalize' : ''
							}`}
						>
							{item.name}
						</Link>
					</motion.li>
				))}
			</ul>
		</nav>
	);
}
