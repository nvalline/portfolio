'use client';

import { useEffect, useState } from 'react';

const links = ['About', 'Skills', 'Work', 'Contact'];

export default function Nav() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<nav
			id='mainNav'
			className={`fixed top-0 left-0 right-0 z-500 flex justify-between items-center px-18 py-6 transition-all duration-300 ${
				scrolled
					? 'bg-[rgba(17,23,32,0.92)] backdrop-blur-xl border-b border-[rgba(61,232,216,0.08)]'
					: ''
			}`}
		>
			<a
				href='#'
				className='font-bebas text-[26px] tracking-widest text-nv-cream no-underline'
			>
				N<span className='text-nv-teal'>.</span>V
				<span className='text-nv-teal'>.</span>
			</a>
			<ul className='flex gap-10 list-none'>
				{links.map((item) => (
					<li key={item}>
						<a
							href={`#${item.toLowerCase()}`}
							className='nav-link text-[10px] tracking-[0.25em] uppercase text-nv-mist no-underline transition-colors duration-200 hover:text-nv-teal'
						>
							{item}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
