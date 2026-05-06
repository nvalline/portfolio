import type { Metadata } from 'next';
import { Bebas_Neue, DM_Serif_Display, DM_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import CustomCursor from '@/components/CustomCursor';
import ScrollReveal from '@/components/ScrollReveal';

const bebasNeue = Bebas_Neue({
	weight: '400',
	subsets: ['latin'],
	variable: '--nf-bebas',
	display: 'swap'
});

const dmSerifDisplay = DM_Serif_Display({
	weight: '400',
	style: ['normal', 'italic'],
	subsets: ['latin'],
	variable: '--nf-dm-serif',
	display: 'swap'
});

const dmMono = DM_Mono({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
	variable: '--nf-dm-mono',
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'Nate Valline — Full-Stack Engineer',
	description:
		'Frontend-focused full-stack engineer building interfaces that feel right.'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={`${bebasNeue.variable} ${dmSerifDisplay.variable} ${dmMono.variable}`}
		>
			<body>
				<CustomCursor />
				<Nav />
				<ScrollReveal />
				{children}
			</body>
		</html>
	);
}
