import type { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Puerta Patiño — Ingeniero de Sistemas",
  description:
    "Portafolio de Samuel Puerta Patiño, estudiante de Ingeniería de Sistemas en la UdeA. Desarrollo backend, automatización y análisis de datos.",
  metadataBase: new URL("https://samuelpuerta.vercel.app"),
  openGraph: {
    title: "Samuel Puerta Patiño — Ingeniero de Sistemas",
    description:
      "Desarrollo backend, automatización de procesos y análisis de datos. Java · Spring Boot · Python · Bash.",
    type: "website",
    locale: "es_CO",
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
