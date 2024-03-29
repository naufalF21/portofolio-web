'use client';

import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import Reveal from '@/components/reveal';

export default function Quotes() {
	return (
		<Reveal>
			<div className="text-white px-4 lg:px-0 w-full">
				<div className="relative top-4 left-6 flex justify-start">
					<div className="bg-secondary z-10 px-2">
						<FaQuoteLeft size="26" />
					</div>
				</div>
				<div className="border border-gray py-8 px-8 lg:px-0">
					<h2 className="text-center text-lg font-semibold">
						Programming isn&apos;t about what you know; it&apos;s about what you can
						figure out. -Chris Pine
					</h2>
				</div>
				<div className="flex justify-end relative bottom-4 right-6">
					<div className="bg-secondary z-10 px-2">
						<FaQuoteRight size="26" />
					</div>
				</div>
			</div>
		</Reveal>
	);
}
