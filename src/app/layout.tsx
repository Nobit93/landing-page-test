import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BeautyPlus AI Image Enhancer",
  description: "Improve picture quality online with BeautyPlus AI image enhancer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
