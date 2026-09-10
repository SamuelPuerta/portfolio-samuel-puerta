import type { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Puerta — Software Developer | Backend",
  description:
    "Software Developer enfocado en backend (Java, Spring Boot, Python). Estudiante de Ingeniería de Sistemas (UdeA) y Auxiliar de Programación en la SIU. Especializado en APIs REST, bases de datos, Docker, testing y automatización.",
  metadataBase: new URL("https://samuel-puerta.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Samuel Puerta — Software Developer | Backend",
    description:
      "Software Developer enfocado en backend (Java, Spring Boot, Python). Estudiante de Ingeniería de Sistemas (UdeA) y Auxiliar de Programación en la SIU.",
    url: "https://samuel-puerta.vercel.app",
    siteName: "Samuel Puerta — Portfolio",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary",
    title: "Samuel Puerta — Software Developer | Backend",
    description:
      "Software Developer enfocado en backend (Java, Spring Boot, Python). Estudiante de Ingeniería de Sistemas (UdeA).",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full">
      <body className="crt min-h-full bg-base font-mono text-primary antialiased selection:bg-accent-green/25 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
