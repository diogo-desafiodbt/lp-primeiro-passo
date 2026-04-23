import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "O Primeiro Passo — Livro do Dr. Turí Souza | Desafio Diabetes",
  description:
    "O guia prático do Dr. Turí Souza para mudar o metabolismo pela raiz, com ciência e sem complicação. Livro físico e livro digital (ebook).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
