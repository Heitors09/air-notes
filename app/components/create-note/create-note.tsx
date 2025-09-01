import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { NoteDialog } from "./note-dialog";

export const CreateNote = () => {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className="md:bg-white/10 hover:bg-white/20 duration-300 group hover:cursor-pointer max-md:py-2 flex items-center justify-center  md:w-72 md:h-64 rounded-md">
				<Plus className="bg-white/10 p-3 group-hover:bg-white/20 duration-300 rounded-full size-12" />
			</DialogTrigger>
			<DialogContent>
				<NoteDialog onClose={() => setOpen(false)} />
			</DialogContent>
		</Dialog>
	);
};
