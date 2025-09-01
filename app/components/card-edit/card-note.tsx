import { CardBody, CardContainer } from "@/components/aceternity/3d-card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { type NoteSchema, noteSchema } from "../../schema";
import { CardEditTitle } from "./card-edit-title";

export const CardNote = ({
	note,
	setNote,
	className,
}: {
	note: NoteSchema;
	setNote: Dispatch<SetStateAction<NoteSchema[]>>;
	className?: string;
}) => {
	const form = useForm({
		resolver: zodResolver(noteSchema),
		defaultValues: {
			title: note.title,
			description: note.description,
		},
	});
	const [open, setOpen] = useState(false);

	const onEdit = (data: NoteSchema) => {
		const noteData = {
			...data,
			id: note.id,
		};

		const storedNotes: NoteSchema[] = JSON.parse(
			localStorage.getItem("note") || "[]",
		);

		const updatedNote = storedNotes.map((note) =>
			note.id === noteData.id
				? {
						...note,
						...noteData,
					}
				: note,
		);

		localStorage.setItem("note", JSON.stringify(updatedNote));

		setNote(updatedNote);
		setOpen(false);
	};

	const handleDeleteNote = (note: NoteSchema) => {
		const noteData = {
			...note,
			id: note.id,
		};

		const storedNotes: NoteSchema[] = JSON.parse(
			localStorage.getItem("note") || "[]",
		);

		const deletedNote = storedNotes.filter((note) => note.id !== noteData.id);

		localStorage.setItem("note", JSON.stringify(deletedNote));

		setNote(deletedNote);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<CardContainer className="inter-var ">
					<CardBody className="bg-white/10  backdrop-blur-md hover:scale-101 overflow-x-hidden inset-shadow-sm  inset-shadow-white/10  ring-1 ring-gray-900 hover:bg-white/20 shadow-white/30 duration-300 group hover:cursor-pointer justify-between  p-6  md:w-72 md:h-64 rounded-md flex items-start flex-col">
						<div className="gap-2 flex  items-start flex-col">
							<h2 className="text-white/80 text-start text-xl font-bold">
								{note.title}
							</h2>
							{note.description ? (
								<p className="text-white/70 text-start line-clamp-4 ">
									"{note.description}"
								</p>
							) : (
								<p className="text-white/70 text-start">"{note.title}"</p>
							)}
						</div>
					</CardBody>
				</CardContainer>
			</DialogTrigger>
			<DialogContent className="bg-white/10 backdrop-blur-md  p-8 rounded-2xl w-[500px] max-w-full flex flex-col items-center gap-6 shadow-xl">
				<FormProvider {...form}>
					<form
						onSubmit={form.handleSubmit(onEdit)}
						className="flex flex-col items-center gap-4 w-full"
					>
						<CardEditTitle
							title={note.title}
							description={note.description || ""}
						/>

						{form.formState.isDirty && (
							<Button
								type="submit"
								className="w-full mt-2 bg-teal-400/20
            hover:cursor-pointer font-bold hover:cursor-pointer
						hover:brightness-120 text-white
						"
							>
								Salvar Pensamento
							</Button>
						)}
						<Button
							type="button"
							onClick={() => handleDeleteNote(note)}
							className="w-full mt-0 hover:cursor-pointer  hover:text-red-500 text-red-500/50 font-bold "
						>
							<X /> Deletar Nota
						</Button>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	);
};
