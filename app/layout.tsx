import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AppWrapper } from "./components/wrapper/app-wrapper";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["700", "600", "500"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	icons: "/airnotes-logo.png",
	title: "AirNotes",
	description:
		"Air Note é uma aplicação web prática que permite criar, salvar e organizar suas notas",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>
				<AppWrapper>{children}</AppWrapper>
			</body>
		</html>
	);
}
