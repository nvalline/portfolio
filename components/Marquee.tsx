const items = [
	'PostgreSQL',
	'Node.js',
	'Next.js',
	'Vitest',
	'Figma',
	'React',
	'Javascript',
	'Redux',
	'REST APIs',
	'TypeScript',
	'Appwrite',
	'TailwindCSS',
	'SASS',
	'Express.js',
	'GraphQL'
];

export default function MarqueeStrip() {
	const doubled = [...items, ...items];
	return (
		<div className='bg-nv-teal overflow-hidden py-3.5 relative z-10'>
			<div className='marquee-track'>
				{doubled.flatMap((item, i) => [
					<span
						key={`item-${i}`}
						className='font-bebas text-[18px] tracking-[0.15em] text-nv-slate px-10 shrink-0'
					>
						{item}
					</span>,
					<span
						key={`dot-${i}`}
						className='font-bebas text-[18px] tracking-[0.15em] text-nv-warm px-10 shrink-0'
					>
						✦
					</span>
				])}
			</div>
		</div>
	);
}
