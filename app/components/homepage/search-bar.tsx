import { Search } from "lucide-react";
import { useContext } from "react";
import { NoteContext } from "../wrapper/app-wrapper";

export const SearchBar = () => {
	const search = useContext(NoteContext);

	return (
		<div className="bg-white/10 animate-appears  backdrop-blur-md  shadow-sm shadow-white/20 inset-shadow-white w-full max-w-[600px]  md:max-w-[880px] flex items-center gap-4 rounded-md px-4 my-4 py-1 h-10">
			<Search className="size-4" />
			<input
				onChange={(e) => search?.setSearchTyped(e.target.value)}
				className="h-full w-full text-sm bg-transparent outline-none placeholder:text-white/50 text-white"
				placeholder="Procurar nota..."
			/>
		</div>
	);
};
