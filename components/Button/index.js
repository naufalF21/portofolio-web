'use client';

import { HiArrowLongRight } from 'react-icons/hi2';

export default function Button({ text }) {
	return (
		<button className="w-fit btn border border-primary py-2 px-4 font-semibold flex items-center gap-2 hover:bg-primary hover:text-secondary">
			{text}
			<HiArrowLongRight />
		</button>
	);
}
