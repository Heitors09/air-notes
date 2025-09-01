"use client";

import type React from "react";
import { memo } from "react";

interface AuroraTextProps {
	children: React.ReactNode;
	className?: string;
	colors?: string[];
	speed?: number;
}

export const AuroraText = memo(
	({
		children,
		className = "",
		colors = [
			"#1abc9c", // Teal vibrante (cor principal)
			"#16a085", // Teal mais escuro, para profundidade
			"#00bfa5", // Verde água suave
			"#00e5ff", // Azul claro neon
			"#4dd0e1", // Azul turquesa pastel
			"#26c6da", // Azul turquesa médio
		],
		speed = 1,
	}: AuroraTextProps) => {
		const gradientStyle = {
			backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
				colors[0]
			})`,
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent",
			animationDuration: `${10 / speed}s`,
		};

		return (
			<span className={`relative inline-block ${className}`}>
				<span className="sr-only">{children}</span>
				<span
					className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
					style={gradientStyle}
					aria-hidden="true"
				>
					{children}
				</span>
			</span>
		);
	},
);

AuroraText.displayName = "AuroraText";
