"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { type HTMLAttributes, useMemo } from "react";

const createGridMask = (start: number, end: number): string => {
	const mid = (start + end) / 2;
	return `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) ${start}%, rgba(0,0,0,0.2) ${mid}%, rgba(0,0,0,0.6) ${end - 20}%, rgba(0,0,0,1) ${end}%)`;
};

const generateRayConfig = (index: number, total: number) => {
	const progress = index / Math.max(total - 1, 1);
	const leftPercent = 2 + progress * 96;
	const rotation = 28 - progress * 56;
	const variation = (index * 0.618) % 1;

	return {
		left: `${leftPercent}%`,
		rotation,
		width: 40 + variation * 25,
		duration: 6 + variation * 5,
		delay: -variation * 10,
		swayDuration: 12 + variation * 9,
		swayDelay: -variation * 10,
		blur: 24 + variation * 9,
		strongSway: index % 2 === 0,
	};
};

interface GridBeamsProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	gridSize?: number;
	gridColor?: string;
	rayCount?: number;
	rayOpacity?: number;
	raySpeed?: number;
	rayLength?: string;
	gridFadeStart?: number;
	gridFadeEnd?: number;
	backgroundColor?: string;
}

interface LightRayProps {
	left: string;
	rotation: number;
	width: number;
	delay: number;
	duration: number;
	swayDuration: number;
	swayDelay: number;
	blurAmount: number;
	isStrongerSway: boolean;
	opacity: number;
	speed: number;
	length: string;
}

const LightRay = React.memo<LightRayProps>(
	({
		left,
		rotation,
		width,
		delay,
		duration,
		swayDuration,
		swayDelay,
		blurAmount,
		isStrongerSway,
		opacity,
		speed,
		length,
	}) => {
		// Gradiente teal + azul/turquesa
		const gradient =
			"linear-gradient(to bottom, #1abc9c33, #00bfa533, #26c6da33, #4dd0e133)";

		return (
			<motion.div
				className="absolute pointer-events-none -top-[5%] left-[var(--ray-left)] w-[var(--ray-width)] h-[var(--ray-height)] origin-top mix-blend-screen blur-[var(--ray-blur)] translate-x-[-50%] rotate-[var(--ray-rotation)]"
				style={
					{
						"--ray-left": left,
						"--ray-width": `${width}px`,
						"--ray-height": length,
						"--ray-blur": `${blurAmount}px`,
						"--ray-rotation": `${rotation}deg`,
						background: gradient,
						opacity,
					} as React.CSSProperties
				}
				initial={{
					opacity: 0.3,
					transform: `translateX(-50%) rotate(${rotation}deg)`,
				}}
				animate={{
					opacity: [0.3, 0.7, 0.3],
					transform: [
						`translateX(-50%) rotate(${rotation}deg)`,
						`translateX(-50%) rotate(${rotation + (isStrongerSway ? 1 : 0.5)}deg)`,
						`translateX(-50%) rotate(${rotation}deg)`,
					],
				}}
				transition={{
					opacity: {
						duration: duration / speed,
						delay: delay / speed,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					},
					transform: {
						duration: swayDuration / speed,
						delay: swayDelay / speed,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					},
				}}
			/>
		);
	},
);

export const GridBeams: React.FC<GridBeamsProps> = ({
	children,
	className,
	gridSize = 40,
	gridColor = "rgba(26,188,156,0.2)", // grid teal suave
	rayCount = 15,
	rayOpacity = 0.05,
	raySpeed = 1,
	rayLength = "50vh",
	gridFadeStart = 20,
	gridFadeEnd = 90,
	backgroundColor = "#020412", // fundo noite escuro
	...props
}) => {
	const rayConfigs = useMemo(() => {
		return Array.from({ length: rayCount }, (_, i) =>
			generateRayConfig(i, rayCount),
		);
	}, [rayCount]);

	const gridMask = useMemo(
		() => createGridMask(gridFadeStart, gridFadeEnd),
		[gridFadeStart, gridFadeEnd],
	);

	return (
		<div
			className={cn(
				"relative overflow-hidden bg-[var(--bg-color)] bg-[radial-gradient(ellipse_at_50%_-20%,#1a1a1a,transparent_70%)]",
				className,
			)}
			style={
				{
					"--bg-color": backgroundColor,
				} as React.CSSProperties
			}
			{...props}
		>
			<div
				className="absolute inset-0 pointer-events-none bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-size-[var(--grid-size)_var(--grid-size)] [mask-image:var(--grid-mask)] [webkit-mask-image:var(--grid-mask)]"
				style={
					{
						"--grid-color": gridColor,
						"--grid-size": `${gridSize}px`,
						"--grid-mask": gridMask,
					} as React.CSSProperties
				}
			/>
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{rayConfigs.map((config, index) => (
					<LightRay
						key={index}
						left={config.left}
						rotation={config.rotation}
						width={config.width}
						delay={config.delay}
						duration={config.duration}
						swayDuration={config.swayDuration}
						swayDelay={config.swayDelay}
						blurAmount={config.blur}
						isStrongerSway={config.strongSway}
						opacity={rayOpacity}
						speed={raySpeed}
						length={rayLength}
					/>
				))}
			</div>

			<div className="relative z-10">{children}</div>
		</div>
	);
};
