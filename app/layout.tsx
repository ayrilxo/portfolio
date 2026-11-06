import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.intro,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${schibsted.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
