'use client';

import Button from '@/components/button';
import Card from '@/components/card';
import projects from '@/data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Reveal from '@/components/reveal';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.css';

export default function ProjectsSection() {
	return (
		<div className="text-white py-8 px-4 lg:px-0">
			<div className="flex flex-row justify-between">
				<Reveal width="fit-content">
					<div className="flex flex-row items-center gap-5 md:w-96">
						<h2 className="text-3xl font-semibold">Projects</h2>
						<hr className="hidden md:block w-full text-primary border" />
					</div>
				</Reveal>
				<Button text="View all" />
			</div>

			<Swiper
				className="flex flex-col md:flex-row gap-10 justify-between mt-10"
				spaceBetween={50}
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
			>
				{projects.map((item, index) => (
					<SwiperSlide key={index} className="pb-10">
						<Card
							image={item.image}
							technology={item.technology}
							title={item.title}
							period={item.period}
							description={item.description}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
