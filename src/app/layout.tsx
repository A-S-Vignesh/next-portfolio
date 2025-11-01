import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

/* Load Roboto font */
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"], // add weights you use
});

export const metadata: Metadata = {
  title: "Vignesh A S | Web Developer Portfolio",
  description:
    "I'm Vignesh A S, a passionate Full Stack Web Developer specializing in React, Next.js, and the MERN stack. Explore my projects, skills, and achievements.",
  keywords: [
    "Vignesh A S",
    "Web Developer",
    "Portfolio",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "MERN Stack",
  ],
  authors: [{ name: "Vignesh A S" }],
  creator: "Vignesh A S",
  openGraph: {
    title: "Vignesh A S | Web Developer Portfolio",
    description:
      "Explore my professional portfolio featuring web development projects, skills, and creative work in React, Next.js, and the MERN stack.",
    url: "https://a-s-vignesh-portfolio.vercel.app",
    siteName: "Vignesh A S Portfolio",
    images: [
      {
        url: "https://a-s-vignesh-portfolio.vercel.app/og-image.png", // replace with your OG image path if you have one
        width: 1200,
        height: 630,
        alt: "Vignesh A S Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vignesh A S | Web Developer Portfolio",
    description:
      "Portfolio of Vignesh A S — Full Stack Web Developer specializing in React, Next.js, and the MERN stack.",
    images: ["https://a-s-vignesh-portfolio.vercel.app/og-image.png"],
    // creator: "@vigneshas", // optional if you have Twitter/X
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Vicky" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
