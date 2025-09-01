"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { type NoteSchema, noteSchema } from "../../schema";

import { useContext } from "react";
import { NoteContext } from "../wrapper/app-wrapper";
import { TitleForm } from "./title-form";

export function NoteDialog({
	onClose,
}: {
	onClose: () => void;
}) {
	const form = useForm({
		resolver: zodResolver(noteSchema),
	});
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	const note = useContext(NoteContext)!;

	const onSubmit = (data: NoteSchema) => {
		const dataWithId = {
			id: uuidv4(),
			...data,
		};

		const existingNotes = JSON.parse(localStorage.getItem("note") || "[]");
		const newNote = [...existingNotes, dataWithId];

		localStorage.setItem("note", JSON.stringify(newNote));

		note.setNotes(newNote);
		onClose();
	};

	return (
		<Card className="relative  bg-white/10 backdrop-blur-md text-white border-none overflow-hidden w-[350px]  md:w-[500px]  ">
			<CardContent>
				<FormProvider {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="grid gap-4">
							<TitleForm />
						</div>
						<Button
							type="submit"
							className="w-full hover:brightness-120 duration-300 mt-5 bg-teal-400/20
            hover:cursor-pointer font-bold hover:cursor-pointer
						
						"
						>
							Salvar Pensamento
						</Button>
					</form>
				</FormProvider>
			</CardContent>
		</Card>
	);
}
