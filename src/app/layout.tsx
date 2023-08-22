import Header from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToyStoryBook",
  description:
    "Embark on a whimsical journey through ToyStoryBook, a love letter to Disney's beloved characters, weaving nostalgia and enchantment into a new fantasy tale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container max-w-full" data-theme="light">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
