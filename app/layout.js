import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "React Journey",
  description: "the journey react learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body className={clsx(inter.className, "h-screen")} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
