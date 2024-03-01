'use client';

import { HiArrowLongRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';

export default function Button({ text }) {
	return (
		<motion.button
			className="w-fit btn border border-primary py-2 px-4 font-semibold flex items-center gap-2 hover:bg-primary hover:text-secondary"
			whileTap={{ scale: 0.9 }}
		>
			{text}
			<HiArrowLongRight />
		</motion.button>
	);
}
