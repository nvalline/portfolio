const stats = [
	{ num: '5', suffix: '+', label: 'Years designing & building' },
	{ num: '20', suffix: '+', label: 'Unique Projects worked' },
	{ num: '10', suffix: '+', label: 'APIs integrated' }
];

export default function About() {
	return (
		<section
			id='about'
			className='grid grid-cols-2 gap-25 items-center px-18 py-32.5 bg-nv-slate relative z-1'
		>
			<div>
				<p className='section-label' data-num='01'>
					About
				</p>
				<h2 className='about-heading reveal font-dm-serif text-[clamp(40px,4.5vw,64px)] leading-[1.08] tracking-[-0.02em] mb-13'>
					Crafting the
					<br />
					<em>web&apos;s</em> front-
					<br />
					facing <span className='about-heading-gradient'>layer.</span>
				</h2>
				<div className='grid grid-cols-3 gap-px'>
					{stats.map((s, i) => (
						<div key={s.label} className={`stat reveal reveal-delay-${i + 1}`}>
							<div className='font-bebas text-[52px] leading-none text-nv-cream'>
								{s.num}
								<em className='text-nv-teal not-italic'>{s.suffix}</em>
							</div>
							<div className='text-[9px] tracking-[0.2em] uppercase text-nv-mist mt-1.5'>
								{s.label}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='reveal'>
				<p className='text-[13.5px] leading-loose text-nv-fog mb-5'>
					I&apos;m a full-stack engineer who lives at the intersection of{' '}
					<strong className='text-nv-cream font-normal'>
						logic and aesthetics
					</strong>
					. My instinct is always to start with the user. What they see. What
					they feel. And then build the architecture that serves that
					experience.
				</p>
				<p className='text-[13.5px] leading-loose text-nv-fog mb-5'>
					I&apos;ve worked across startups and product teams, taking ownership
					in everything from{' '}
					<strong className='text-nv-cream font-normal'>
						component libraries and design systems
					</strong>{' '}
					to REST and GraphQL APIs, infrastructure, and deployment pipelines.
				</p>
				<p className='text-[13.5px] leading-loose text-nv-fog'>
					When I&apos;m not writing code, I&apos;m usually thinking about
					studying interaction design, how to improve as a developer or outside
					somewhere with a{' '}
					<strong className='text-nv-cream font-normal'>very good view</strong>.
				</p>
			</div>
		</section>
	);
}
