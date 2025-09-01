"use client";

import type { NoteSchema } from "@/app/schema";
import type React from "react";
import {
	type Dispatch,
	type SetStateAction,
	createContext,
	useEffect,
	useState,
} from "react";

type ContextType = {
	notes: NoteSchema[];
	setNotes: Dispatch<SetStateAction<NoteSchema[]>>;
	searchTyped: string;
	setSearchTyped: Dispatch<SetStateAction<string>>;
};

export const NoteContext = createContext<ContextType | null>(null);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
	const [notes, setNotes] = useState<NoteSchema[]>([]);
	const [searchTyped, setSearchTyped] = useState("");

	useEffect(() => {
		const storedNotes = JSON.parse(localStorage.getItem("note") || "[]");

		setNotes(storedNotes);
	}, []);

	return (
		<NoteContext.Provider
			value={{ notes, setNotes, searchTyped, setSearchTyped }}
		>
			{children}
		</NoteContext.Provider>
	);
};
