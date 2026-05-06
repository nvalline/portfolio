import Image from 'next/image';
import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
	return (
		<section className='hero relative min-h-screen flex flex-col justify-end px-18 pb-25 overflow-hidden'>
			{/* Background */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='/background.png'
					alt=''
					fill
					priority
					className='object-cover object-[center_30%] saturate-[0.4] brightness-[0.55]'
				/>
				<div className='absolute inset-0 bg-linear-to-br from-[rgba(17,23,32,0.15)] via-[rgba(17,23,32,0.5)] to-[rgba(17,23,32,0.97)]' />
				<div className='hero-scanlines absolute inset-0 z-2 pointer-events-none' />
			</div>

			<ParticleCanvas />

			{/* Scroll indicator */}
			<div className='hero-counter absolute bottom-10 right-18 z-2 flex flex-col items-center gap-3'>
				<div className='hero-counter-line w-px h-17.5 bg-linear-to-b from-nv-teal to-transparent' />
				<span className='text-[9px] tracking-[0.3em] uppercase text-nv-mist [writing-mode:vertical-rl]'>
					Scroll
				</span>
			</div>

			{/* Content */}
			<div className='relative z-2'>
				<p className='hero-tag text-[11px] tracking-[0.4em] uppercase text-nv-teal mb-5 flex items-center gap-3.5'>
					Frontend-Focused Full-Stack Engineer
				</p>
				<h1 className='hero-name font-bebas text-[clamp(80px,13vw,180px)] leading-[0.88] tracking-[0.02em] text-nv-cream relative uppercase'>
					Nate
					<br />
					<span
						className='glitch text-nv-teal [text-shadow:0_0_40px_rgba(61,232,216,0.5)]'
						data-text='VALLINE'
					>
						Valline
					</span>
				</h1>
				<p className='hero-sub mt-8 text-[14px] text-nv-fog max-w-120 leading-[1.9]'>
					I build interfaces that feel{' '}
					<strong className='text-nv-teal font-normal'>intuitive</strong> —
					clean, performant, and obsessively considered from first interaction
					to last pixel.
				</p>
				<div className='hero-cta mt-13 flex gap-7 items-center'>
					<a href='#work' className='btn-primary'>
						View Work
					</a>
					<a href='#contact' className='btn-ghost'>
						Get in touch
					</a>
				</div>
			</div>
		</section>
	);
}
