'use client';

import Card from '@/components/Card';
import Header from '@/components/Header';
import Jumbotron from '@/components/Jumbotron';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className="max-w-[1024px] mx-auto ">
					<Jumbotron />
					<Card />
				</div>
			</main>
		</>
	);
}
