'use client';

import Card from '@/components/Card';
import Header from '@/components/Header';

export default function Home() {
	return (
		<>
			<Header />
			<main className="mt-32 text-white">
				<div className="max-w-[1024px] mx-auto">
					<Card />
					<Card />
					<Card />
				</div>
			</main>
		</>
	);
}
