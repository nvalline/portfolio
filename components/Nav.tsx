'use client';

import { useEffect, useState } from 'react';

const links = ['About', 'Skills', 'Work', 'Contact'];

export default function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setMenuOpen(false);
		};
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	const close = () => setMenuOpen(false);

	return (
		<>
			<nav
				id='mainNav'
				className={`fixed top-0 left-0 right-0 z-500 flex justify-between items-center px-18 py-6 transition-all duration-300 ${
					scrolled || menuOpen
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

				{/* Desktop links */}
				<ul className='hidden md:flex gap-10 list-none'>
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

				{/* Hamburger button */}
				<button
					className='md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 bg-transparent border-none cursor-pointer p-0'
					onClick={() => setMenuOpen((prev) => !prev)}
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}
				>
					<span
						className={`block w-6 h-px bg-nv-cream origin-center transition-transform duration-300 ${
							menuOpen ? 'translate-y-1.75 rotate-45' : ''
						}`}
					/>
					<span
						className={`block w-6 h-px bg-nv-cream transition-opacity duration-300 ${
							menuOpen ? 'opacity-0' : ''
						}`}
					/>
					<span
						className={`block w-6 h-px bg-nv-cream origin-center transition-transform duration-300 ${
							menuOpen ? '-translate-y-1.75 -rotate-45' : ''
						}`}
					/>
				</button>
			</nav>

			{/* Mobile overlay */}
			<div
				className={`fixed inset-0 z-400 bg-nv-slate flex flex-col justify-center items-center gap-10 transition-opacity duration-300 md:hidden ${
					menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
				}`}
				aria-hidden={!menuOpen}
			>
				{links.map((item, i) => (
					<a
						key={item}
						href={`#${item.toLowerCase()}`}
						onClick={close}
						className={`mobile-nav-link font-bebas text-[clamp(40px,10vw,64px)] tracking-[0.08em] text-nv-cream no-underline transition-all duration-300 hover:text-nv-teal ${
							menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
						}`}
						style={{ transitionDelay: menuOpen ? `${80 + i * 60}ms` : '0ms' }}
					>
						{item}
					</a>
				))}

				<div
					className={`flex gap-8 mt-8 transition-all duration-300 ${
						menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
					}`}
					style={{ transitionDelay: menuOpen ? '320ms' : '0ms' }}
				>
					<div className='w-12 h-px bg-nv-teal opacity-30' />
					<span className='text-[9px] tracking-[0.4em] uppercase text-nv-mist'>
						Portfolio
					</span>
					<div className='w-12 h-px bg-nv-teal opacity-30' />
				</div>
			</div>
		</>
	);
}
