export const Footer = () => {
	return (
		<footer className="w-full animate-appears-notes  py-8 mt-32 px-4">
			<div className="max-w-2xl mx-auto">
				<div className="flex flex-col items-center space-y-4">
					{/* Nome/Marca */}
					<div className="text-center">
						<h3 className="text-white font-medium text-lg">Heitor Alves</h3>
						<p className="text-slate-400 text-sm">
							Desenvolvedor front-end especializado no ecossistema React, com
							sólida experiência em TypeScript e Tailwind CSS. Ao longo de mais
							de um ano de atuação, desenvolvi aplicações web modernas, focando
							em código limpo, componentização eficiente e experiência do
							usuário.
						</p>
					</div>

					{/* Links sociais */}
					<div className="flex items-center space-x-6">
						<a
							href="https://www.linkedin.com/in/heitor-alves1/"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors duration-200"
						>
							<div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-200">
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
								<svg
									className="w-4 h-4"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</div>
							<span className="text-sm font-medium">LinkedIn</span>
						</a>

						<a
							href="https://github.com/Heitors09"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors duration-200"
						>
							<div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-200">
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
								<svg
									className="w-4 h-4"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</div>
							<span className="text-sm font-medium">GitHub</span>
						</a>

						<a
							href="https://portfolio-heitor-online-six.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center space-x-2 text-slate-400 hover:text-purple-400 transition-colors duration-200"
						>
							<div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-200">
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9m0 18c5 0 9-4 9-9s-4-9-9-9m9 9a9 9 0 01-9 9"
									/>
								</svg>
							</div>
							<span className="text-sm font-medium">Portfólio</span>
						</a>
					</div>

					{/* Copyright */}
					<div className="text-center pt-4 border-t border-white/5 w-full">
						<p className="text-slate-500 text-sm">
							© 2025 Heitor Alves. Todos os direitos reservados.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
