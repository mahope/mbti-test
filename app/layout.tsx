import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MBTI Personlighedstest - Spejderkursus",
  description: "Tag en hurtig MBTI personlighedstest og få dit resultat med det samme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className="antialiased pb-16">
        {children}
        <Footer />
      </body>
    </html>
  );
}
