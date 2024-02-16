'use client';

import { IoIosMail } from 'react-icons/io';
import { MdOutlineLocalPhone } from 'react-icons/md';
import Link from 'next/link';

export default function ContactsSection() {
	return (
		<div className="text-white my-16">
			<div className="flex flex-row items-center gap-5 mb-10">
				<h2 className="text-3xl font-semibold">Contacts</h2>
				<hr className="w-1/4 text-primary border" />
			</div>
			<div className="flex flex-row justify-between gap-52">
				<p className="text-base">
					I&apos;m{' '}
					<span className="text-primary">
						always interested in backend and/or frontend development
					</span>
					, whether it&apos;s for work or freelance opportunities. However, if you have
					other requests or questions, please don&apos;t hesitate to contact me.
				</p>
				<div className="border px-6 py-4 flex flex-col gap-5">
					<h4 className="font-semibold">Contact me here</h4>
					<Link href="#" className="flex flex-row items-center gap-3">
						<IoIosMail size="32" className="text-gray hover:text-white" />
						<span>naufalfirman098@gmail.com</span>
					</Link>
					<Link href="#" className="flex flex-row items-center gap-3">
						<MdOutlineLocalPhone size="32" className="text-gray hover:text-white" />
						<span>+(62) 8961 7404 827</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
