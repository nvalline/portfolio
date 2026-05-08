import projects from '@/data/projects.json';

export default function Projects() {
	return (
		<section id='work' className='px-18 py-32.5 bg-nv-slate relative z-1'>
			<p className='section-label' data-num='03'>
				Selected Work
			</p>
			<div className='projects-grid grid grid-cols-2 gap-px'>
				{projects.map((project, i) => (
					<div
						key={project.id}
						className={`project-card reveal reveal-delay-${i + 1}`}
					>
						<div className='project-bg-num'>{project.id}</div>
						<div className='project-num'>{project.id}</div>
						<h3 className='font-dm-serif text-[30px] text-nv-cream mb-4 tracking-[-0.01em] transition-colors duration-200 group-hover:text-nv-teal'>
							{project.title}
						</h3>
						<p className='text-[13px] text-nv-fog leading-[1.85] mb-8'>
							{project.description}
						</p>
						<div className='flex flex-wrap gap-2 mb-9'>
							{project.tags.map((tag) => (
								<span key={tag} className='tag'>
									{tag}
								</span>
							))}
						</div>
						{project.link && (
							<a href={project.link} target='_blank' className='project-link'>
								{project.linkText}
							</a>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
