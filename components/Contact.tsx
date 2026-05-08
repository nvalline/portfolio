const socials = [
	{ label: 'GitHub', href: 'https://github.com/nvalline' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nvalline' }
];

const email = 'nate@natevalline.dev';

export default function Contact() {
	return (
		<section
			id='contact'
			className='text-center px-18 py-32.5 bg-nv-slate relative overflow-hidden z-1'
		>
			<div className='contact-eyebrow'>Let&apos;s collaborate</div>

			<h2 className='font-bebas text-[clamp(56px,9vw,130px)] leading-[0.9] tracking-[0.03em] mb-12 relative'>
				<span className='contact-heading-outline'>LET&apos;S</span>
				<br />
				<span className='text-nv-cream'>BUILD IT.</span>
			</h2>

			<a href={`mailto:${email}`} className='contact-email'>
				{email}
			</a>

			<div className='flex justify-center gap-12 mt-16'>
				{socials.map((s) => (
					<a
						key={s.label}
						href={s.href}
						target='_blank'
						className='social-link'
					>
						{s.label}
					</a>
				))}
			</div>
		</section>
	);
}
