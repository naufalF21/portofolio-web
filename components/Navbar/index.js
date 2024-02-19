'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import nav from '@/data/nav';

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="hidden lg:flex gap-8">
				{nav.map((item, index) => (
					<li key={index}>
						<span className="text-primary">#</span>
						<Link
							href={item.link}
							className={`text-gray hover:text-white hover:border-b-2 pb-1 ${
								pathname === item.link ? 'text-white font-semibold capitalize' : ''
							}`}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
