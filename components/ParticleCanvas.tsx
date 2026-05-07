'use client';

import { useEffect, useRef } from 'react';

interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	r: number;
	alpha: number;
	twinkle: number;
}

export default function ParticleCanvas() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let W = 0;
		let H = 0;
		let pts: Particle[] = [];
		let rafId: number;

		function resize() {
			W = canvas!.width = window.innerWidth;
			H = canvas!.height = 280;
		}

		function initPts() {
			pts = [];
			const count = Math.floor((W * H) / 9000);
			for (let i = 0; i < count; i++) {
				pts.push({
					x: Math.random() * W,
					y: Math.random() * H,
					vx: (Math.random() - 0.5) * 0.25,
					vy: (Math.random() - 0.5) * 0.25,
					r: Math.random() * 1.2 + 0.3,
					alpha: Math.random() * 0.6 + 0.2,
					twinkle: Math.random() * Math.PI * 2
				});
			}
		}

		function draw() {
			ctx!.clearRect(0, 0, W, H);
			pts.forEach((p) => {
				p.x += p.vx;
				p.y += p.vy;
				p.twinkle += 0.02;
				if (p.x < 0) p.x = W;
				if (p.x > W) p.x = 0;
				if (p.y < 0) p.y = H;
				if (p.y > H) p.y = 0;
				const a = p.alpha * (0.6 + 0.4 * Math.sin(p.twinkle));
				ctx!.beginPath();
				ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx!.fillStyle = `rgba(61,232,216,${a})`;
				ctx!.fill();
			});
			for (let i = 0; i < pts.length; i++) {
				for (let j = i + 1; j < pts.length; j++) {
					const dx = pts[i].x - pts[j].x;
					const dy = pts[i].y - pts[j].y;
					const d = Math.sqrt(dx * dx + dy * dy);
					if (d < 100) {
						ctx!.beginPath();
						ctx!.moveTo(pts[i].x, pts[i].y);
						ctx!.lineTo(pts[j].x, pts[j].y);
						ctx!.strokeStyle = `rgba(61,232,216,${0.08 * (1 - d / 100)})`;
						ctx!.lineWidth = 0.4;
						ctx!.stroke();
					}
				}
			}
			rafId = requestAnimationFrame(draw);
		}

		const onResize = () => {
			resize();
			initPts();
		};
		resize();
		initPts();
		draw();
		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
			cancelAnimationFrame(rafId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className='absolute top-0 left-0 w-full h-70 z-1 opacity-70 pointer-events-none'
		/>
	);
}
