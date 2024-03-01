import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedLink({ title }) {
	const [isHovered, setHovered] = useState(false);
	return (
		<motion.div
			className="relative cursor-pointer overflow-hidden"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<AnimatedWord title={title} animation={letterAnimation} isHovered={isHovered} />
			<div className="absolute top-0">
				<AnimatedWord title={title} animation={letterAnimationTwo} isHovered={isHovered} />
			</div>
		</motion.div>
	);
}

const titleAnimation = {
	rest: {
		transition: {
			staggerChildren: 0.003,
		},
	},
	hover: {
		transition: {
			staggerChildren: 0.003,
		},
	},
};

const letterAnimation = {
	rest: {
		y: 0,
	},
	hover: {
		y: -30,
		transition: {
			duration: 0.3,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: 'tween',
		},
	},
};

const letterAnimationTwo = {
	rest: {
		y: 30,
	},
	hover: {
		y: 0,
		transition: {
			duration: 0.3,
			ease: [0.6, 0.01, 0.05, 0.95],
			type: 'tween',
		},
	},
};

const AnimatedWord = ({ title, animation, isHovered }) => {
	return (
		<motion.span
			variants={titleAnimation}
			initial="rest"
			animate={isHovered ? 'hover' : 'rest'}
			className="relative whitespace-nowrap text-white font-medium"
		>
			{title.split('').map((character, i) =>
				character === ' ' ? (
					<span key={i}>&nbsp;</span>
				) : (
					<motion.span
						key={i}
						variants={animation}
						className="relative inline-block whitespace-nowrap"
					>
						{character}
					</motion.span>
				)
			)}
		</motion.span>
	);
};
