import { z } from "zod";

export const tagsSchema = z.object({
	name: z.string(),
});

export const noteSchema = z.object({
	id: z.string().optional(),
	title: z
		.string()
		.min(1, { message: "you need at least a title for your note" }),
	description: z.string().optional(),
});

export type NoteSchema = z.infer<typeof noteSchema>;
