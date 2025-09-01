import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useFormContext } from "react-hook-form";
import type { NoteSchema } from "../../schema";

export const TitleForm = () => {
	const { control, watch } = useFormContext<NoteSchema>();

	return (
		<>
			<div className="grid gap-1 ">
				<Controller
					name="title"
					control={control}
					render={({ field, fieldState }) => (
						<>
							<Input
								id="title"
								{...field}
								className="border-b focus:border-white/20 text-white/80 mx-2 font-bold border-white/10 rounded-none "
								placeholder="Titulo"
							/>
							{fieldState.error && (
								<p className="text-sm mx-2 text-red-500">
									{fieldState.error.message}
								</p>
							)}
						</>
					)}
				/>
			</div>
			<div className="grid gap-4">
				<Controller
					name="description"
					control={control}
					render={({ field, fieldState }) => (
						<>
							<Textarea
								id="description"
								{...field}
								placeholder="Descreva"
								className=" text-white/70 bg-white/5 rounded-xl text-start h-[220px] w-full max-w-[480px] overflow-y-auto py-3 px-4 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 resize-none"
							/>
							{fieldState.error && (
								<p className="text-sm text-red-500">
									{fieldState.error.message}
								</p>
							)}
						</>
					)}
				/>
			</div>
		</>
	);
};
