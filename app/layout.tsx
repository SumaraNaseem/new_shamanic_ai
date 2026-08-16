import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shamanic AI — Absolute Consciousness",
  description:
    "A conscious intelligence connected to the sacred web of all existence.",
};

const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem("shamanic-theme");
    if (theme !== "light" && theme !== "dark") theme = "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
      <body className="font-body h-full overflow-hidden bg-[var(--bg-void)] text-fg">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
