const skills = [
	{
		icon: '⬡',
		name: 'Frontend',
		items: [
			'React / Next.js',
			'Javascript / TypeScript',
			'CSS / SASS / TailwindCSS',
			'Context API / Redux',
			'Shadcn / PrimeReact'
		]
	},
	{
		icon: '◈',
		name: 'Backend',
		items: [
			'Node.js / Express',
			'MongoDB',
			'PostgreSQL',
			'APIs',
			'Appwrite',
			'OAuth / Next Auth'
		]
	},
	{
		icon: '◉',
		name: 'Tooling',
		items: [
			'Git / CI-CD',
			'Vercel / Netlify',
			'Webpack / Vite',
			'Jest / Vitest'
		]
	},
	{
		icon: '◇',
		name: 'Design',
		items: ['Figma', 'Design systems', 'Accessibility (WCAG)', 'Prototyping']
	}
];

export default function Skills() {
	return (
		<section id='skills' className='px-18 py-32.5 bg-nv-steel relative z-1'>
			<p className='section-label' data-num='02'>
				Capabilities
			</p>
			<div className='skills-grid grid grid-cols-4 gap-px'>
				{skills.map((skill, i) => (
					<div
						key={skill.name}
						className={`skill-card reveal reveal-delay-${i + 1}`}
					>
						<div className='skill-glow' />
						<span
							className='text-[32px] mb-6 block filter-[drop-shadow(0_0_8px_var(--teal))]'
							aria-hidden='true'
						>
							{skill.icon}
						</span>
						<div className='font-dm-serif text-[22px] text-nv-cream mb-5'>
							{skill.name}
						</div>
						<ul className='skill-list'>
							{skill.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
