import type { Metadata } from "next";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Puerta Patiño — Desarrollador Backend & QA",
  description:
    "Desarrollador de software backend y QA automation — Auxiliar de Programación en la SIU–UdeA. Java · Spring Boot · Python · Go · Docker · CI/CD.",
  metadataBase: new URL("https://samuelpuerta.vercel.app"),
  openGraph: {
    title: "Samuel Puerta Patiño — Desarrollador Backend & QA",
    description:
      "Desarrollo backend, automatización de procesos, testing y análisis de datos. Java · Spring Boot · Python · Go · Docker.",
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
