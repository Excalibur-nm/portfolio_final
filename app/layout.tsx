import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";

export const metadata: Metadata = {
  title: {
    default: "Nirmal Manvar | Full Stack Developer & ML Enthusiast",
    template: "%s | Nirmal Manvar",
  },
  description:
    "Portfolio of Nirmal Manvar — Full Stack Developer, Machine Learning enthusiast, and Electronics & Communication Engineering student at L.D. College of Engineering.",
  keywords: [
    "Nirmal Manvar",
    "Full Stack Developer",
    "Machine Learning",
    "React",
    "Django",
    "Python",
    "Portfolio",
    "LDCE",
  ],
  authors: [{ name: "Nirmal Manvar" }],
  openGraph: {
    title: "Nirmal Manvar | Full Stack Developer & ML Enthusiast",
    description:
      "Portfolio of Nirmal Manvar — Full Stack Developer, Machine Learning enthusiast, and ECE student at LDCE.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background antialiased">
        <Navbar />
        <ScrollAnimator />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
