export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='px-18 py-7 bg-[#0d1119] flex justify-between items-center border-t border-[rgba(61,232,216,0.08)]'>
			<span className='text-[10px] text-nv-mist tracking-[0.12em]'>
				© <span>{year}</span> Nate Valline
			</span>
			<span className='text-[10px] text-nv-mist tracking-[0.12em]'>
				Designed <span className='text-nv-teal'>✦</span> built by hand
			</span>
		</footer>
	);
}
