'use client';

import Header from '@/components/Header';
import Jumbotron from '@/components/Jumbotron';
import Quotes from '@/components/quotes';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<div className="max-w-[1024px] mx-auto ">
					<Jumbotron />
					<Quotes />
				</div>
			</main>
		</>
	);
}
