import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useFormContext } from "react-hook-form";

export const CardEditTitle = ({
	title,
	description,
}: { title: string; description: string }) => {
	const { control, watch } = useFormContext();

	return (
		<>
			<div className="flex items-center gap-3 w-full justify-between">
				<Controller
					name="title"
					control={control}
					render={({ field, fieldState }) => (
						<>
							<Input
								id="title"
								{...field}
								placeholder={title}
								className="placeholder:text-white/90 r rounded-none text-3xl  border-b w-full mx-2 focus:border-white/20  border-white/10 text-white font-extrabold break-words"
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
			<Controller
				name="description"
				control={control}
				render={({ field, fieldState }) => (
					<>
						<Textarea
							id="description"
							{...field}
							className="text-white/70 bg-white/5 rounded-xl text-start h-[220px] w-full max-w-[480px] overflow-y-auto py-3 px-4 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all duration-300 resize-none"
							placeholder={description ? description : title}
						>
							{description ? description : title}
						</Textarea>

						{fieldState.error && (
							<p className="text-sm text-red-500">{fieldState.error.message}</p>
						)}
					</>
				)}
			/>
			<p className="text-white/60 text-sm italic">
				Você pode editar apenas digitando nos campos acima.
			</p>
		</>
	);
};
