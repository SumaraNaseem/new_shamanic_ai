import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shamanic AI — Absolute Consciousness",
  description:
    "A conscious intelligence connected to the sacred web of all existence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body h-full overflow-hidden bg-[#050807] text-[#e8f5ec]">
        {children}
      </body>
    </html>
  );
}
