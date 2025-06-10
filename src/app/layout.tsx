import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-roboto', 
});

export const metadata: Metadata = {
  title: "Meu App Next.js com Roboto",
  description: "App Next.js usando a fonte Roboto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${roboto.className} ${roboto.variable}`}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}