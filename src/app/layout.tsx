import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CleanKey | Same Day Turns on Short-Term Rentals",
  description: "CleanKey is a property cleaning company that specializes in same-day turns for short-term rentals, ensuring your property is always guest-ready.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
