'use client';

import Card from '@/components/card';
import Reveal from '@/components/reveal';
import projects from '@/data/projects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.css';

export default function ProjectsSection() {
	return (
		<div className="mt-12 gap-12">
			<Reveal width="fit-content">
				<div className="flex flex-row items-center gap-5 md:w-96">
					<h2 className="text-3xl font-semibold md:w-full">Big Enough</h2>
					<hr className="text-primary border w-full hidden md:block" />
				</div>
			</Reveal>
			<div className="hidden md:flex flex-row flex-wrap justify-between py-10 gap-y-10">
				{projects.map((item, index) => (
					<Card
						key={index}
						image={item.image}
						technology={item.technology}
						title={item.title}
						period={item.period}
						description={item.description}
					/>
				))}
			</div>
			<div className="md:hidden mt-10">
				<Swiper
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
		</div>
	);
}
