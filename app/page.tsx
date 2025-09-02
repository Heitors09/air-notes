"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { GridBeams } from "@/components/magicui/grid-beams";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ChevronDown, Star } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { CardNote } from "./components/card-edit/card-note";
import { CreateNote } from "./components/create-note/create-note";
import { Footer } from "./components/homepage/footer";
import { SearchBar } from "./components/homepage/search-bar";
import { NoteContext } from "./components/wrapper/app-wrapper";

export default function Home() {
	const mainRef = useRef<HTMLDivElement>(null);
	const [showIndicator, setShowIndicator] = useState(false);
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const note = useContext(NoteContext)!;

	useEffect(() => {
		const indicator = mainRef.current;
		if (!indicator) return;

		const handleScroll = () => {
			const atBottom =
				indicator.scrollTop + indicator.clientHeight >=
				indicator.scrollHeight - 2;
			setShowIndicator(!atBottom);
		};

		if (note.notes.length > 5) {
			setShowIndicator(true);
			indicator.addEventListener("scroll", handleScroll);
		}

		return () => {
			indicator.removeEventListener("scroll", handleScroll);
		};
	}, [note.notes]);

	const searchTyped = note.searchTyped;

	const filteredNotes =
		searchTyped && searchTyped.length > 0
			? note.notes.filter(
					(n) =>
						n.title.toLowerCase().includes(searchTyped) ||
						(n.description?.toLowerCase().includes(searchTyped) ?? false),
				)
			: note.notes;

	return (
		<>
			<GridBeams className="text-white  min-h-screen py-24  flex flex-col items-center">
				<div className="flex items-center max-md:px-12 gap-4 flex-col">
					<div className="z-10 flex   items-center justify-center">
						<motion.div
							variants={{
								hidden: { opacity: 0 },
								show: { opacity: 1 },
							}}
							initial="hidden"
							animate="show"
							transition={{ duration: 0.05 }}
						>
							<div
								className={cn(
									"group  flex items-center gap-3 rounded-full border border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-white/20 cursor-pointer",
								)}
							>
								<Link
									href={"https://github.com/Heitors09/air-notes"}
									className="flex text-xs items-center gap-2"
								>
									<Star className="size-4" />
									<span className="opacity-90">Dê uma estrela no GitHub</span>
								</Link>
								<ArrowRightIcon className="size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
							</div>
						</motion.div>
					</div>
					<motion.div
						className="flex w-full items-center flex-col gap-4"
						variants={{
							hidden: { opacity: 0 },
							show: { opacity: 1 },
						}}
						initial="hidden"
						animate="show"
						transition={{ duration: 0.05 }}
					>
						<h2 className="md:text-5xl sm:text-4xl text-xl  duration-300 ease-out cursor-pointer text-center sm:max-w-[700px] font-bold">
							Deixe <AuroraText speed={2}>AirNotes</AuroraText> ajudar você a
							liberar sua mente.
						</h2>
						<p className="sm:text-sm text-xs duration-300 ease-out cursor-pointer text-center sm:max-w-[650px]">
							<AuroraText speed={2}>
								Capture seus pensamentos em um instante.
							</AuroraText>{" "}
							O AirNote mantém tudo seguro, organizado e fácil de revisitar
							quando quiser, melhore seu foco se livrando de ruídos.
						</p>
						<SearchBar />
					</motion.div>
				</div>
				<main ref={mainRef} className="overflow-y-scroll max-md:px-4 px-3">
					<motion.div
						className=" max-h-[550px] md:grid flex flex-col max-md:items-center  md:grid-cols-3  p-1  gap-3 flex  max-w-[890px]   "
						variants={{
							show: {
								transition: {
									staggerChildren: 0.15,
								},
							},
						}}
						initial="hidden"
						animate="show"
					>
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 20 },
								show: { opacity: 1, y: 0 },
							}}
						>
							<CreateNote />
						</motion.div>
						{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
						{filteredNotes.map((noteData: any) => (
							<motion.div
								key={noteData.id}
								variants={{
									hidden: { opacity: 0, y: 20 },
									show: { opacity: 1, y: 0 },
								}}
							>
								<CardNote setNote={note.setNotes} note={noteData} />
							</motion.div>
						))}

						{showIndicator && (
							<div className="pointer-events-none absolute bottom-80  flex w-full justify-center">
								<div className="relative flex py-2 flex-col w-full max-w-[890px] items-center justify-center h-16">
									{/* Sombra suave */}
									<div className="absolute inset-0  to-transparent" />
									{/* Ícone */}
									<ChevronDown className="relative  text-white/80 z-10 animate-bounce " />
									<p className="text-xs">use o Scroll para ver mais.</p>
								</div>
							</div>
						)}
					</motion.div>
				</main>
				<Footer />
			</GridBeams>
		</>
	);
}
