'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
	const pathname = usePathname();

	const nav = [
		{
			name: 'home',
			link: '/',
		},
		{
			name: 'projects',
			link: '/projects',
		},
		{
			name: 'about-me',
			link: '/about-me',
		},
		{
			name: 'contacts',
			link: '/contacts',
		},
	];
	return (
		<nav>
			<ul className="flex gap-8">
				{nav.map((item, index) => (
					<li key={index}>
						<span className="text-primary">#</span>
						<Link
							href={item.link}
							className={`text-gray hover:text-white hover:font-semibold ${
								pathname === item.link ? 'text-white font-semibold' : ''
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
