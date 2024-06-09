import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "bootstrap-italia/dist/js/bootstrap-italia.min.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Progetto web di prova",
  description: "Progetto implementato con Ruby On Rails, Next.js, Postgresql e Bootstrap Italia. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
