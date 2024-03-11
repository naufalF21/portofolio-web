'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import nav from '@/data/nav';
import AnimatedLink from '../animated-link';

export default function Navbar() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="hidden lg:flex gap-10 uppercase">
				{nav.map((item, index) => (
					<li key={index} className="flex flex-col relative">
						<Link
							href={item.link}
							className={pathname === item.link ? 'border-b border-primary pb-1' : ''}
						>
							<AnimatedLink title={item.name} />
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
