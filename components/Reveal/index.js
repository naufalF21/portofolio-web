'use client';

import { useRef, useEffect } from 'react';
import { m, useInView, useAnimation } from 'framer-motion';

export default function Reveal({ children, noSquare = false, width }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
			slideControls.start('visible');
		}
	}, [isInView]);

	return (
		<div
			ref={ref}
			style={{
				position: 'relative',
				overflow: 'hidden',
				width,
			}}
		>
			<m.div
				variants={{
					hidden: {
						opacity: 0,
						y: 75,
					},
					visible: {
						opacity: 1,
						y: 0,
					},
				}}
				initial="hidden"
				animate={mainControls}
				transition={{
					duration: 0.5,
					delay: 0.25,
				}}
			>
				{children}
			</m.div>
			{!noSquare && (
				<m.div
					variants={{
						hidden: { left: 0 },
						visible: { left: '100%' },
					}}
					initial="hidden"
					animate={slideControls}
					transition={{ duration: 0.5, ease: 'easeIn' }}
					className="absolute top-[4px] bottom-[4px] left-0 right-0 bg-primary z-20"
				></m.div>
			)}
		</div>
	);
}
