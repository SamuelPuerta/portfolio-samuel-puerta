export type Category = "backend" | "qa" | "sistemas" | "otros";

export type Project = {
  slug: string;
  name: string;
  status: "activo" | "estable" | "archivado";
  category: Category;
  detail: string;
  stack: string[];
  href: string;
};

export const categoryLabels: Record<Category, string> = {
  backend: "backend & datos",
  qa: "calidad & testing",
  sistemas: "sistemas & concurrencia",
  otros: "otros proyectos",
};

export const projects: Project[] = [
  {
    slug: "citasalud",
    name: "CITASalud — Agendamiento Médico",
    status: "activo",
    category: "backend",
    detail:
      "Microservicio de agendamiento médico (CodeFactory UdeA). REST con autenticación JWT, migraciones versionadas con Flyway y documentación con Swagger/OpenAPI. Pipeline de CI/CD en GitHub Actions con análisis de calidad en SonarCloud y cobertura superior al 80% con JaCoCo.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "Flyway"],
    href: "https://github.com/SamuelPuerta/CITASalud-Agendamiento",
  },
  {
    slug: "saber-pro",
    name: "Modelos IA — Saber Pro Colombia",
    status: "estable",
    category: "backend",
    detail:
      "Predicción del rendimiento académico en las pruebas Saber Pro del ICFES. Pipeline completo de EDA, feature engineering y optimización de hiperparámetros con Optuna, más pseudo-etiquetado para datos semi-supervisados.",
    stack: ["Python", "XGBoost", "pandas", "scikit-learn", "Optuna"],
    href: "https://github.com/SamuelPuerta/ModelosIASaberProColombia",
  },
  {
    slug: "paycore-screenplay",
    name: "Paycore ScreenPlay — E2E Suite",
    status: "activo",
    category: "qa",
    detail:
      "Suite de pruebas E2E para una plataforma de pagos embebidos, con Serenity BDD y el patrón Screenplay sobre Cucumber. 14 escenarios de autenticación, credenciales de API y ciclo de vida de transacciones (creación, liquidación, reembolsos) — 14/14 passing.",
    stack: ["Java", "Serenity BDD", "Cucumber", "Gradle"],
    href: "https://github.com/SamuelPuerta/PaycoreScreenPlay",
  },
  {
    slug: "screenplay-bank",
    name: "Screenplay Automation Bank",
    status: "estable",
    category: "qa",
    detail:
      "Automatización E2E del simulador bancario XYZ Bank con patrón Screenplay. 28 escenarios entre gestión de clientes, apertura de cuentas, depósitos/retiros y un flujo bancario completo de extremo a extremo — 28/28 passing.",
    stack: ["Java", "Serenity BDD", "Cucumber", "Selenium"],
    href: "https://github.com/SamuelPuerta/ScreenplayAutomationBank",
  },
  {
    slug: "transcription-service",
    name: "Transcription Service",
    status: "activo",
    category: "qa",
    detail:
      "Servicio de transcripción en Python con análisis de código estático integrado vía SonarQube, mensajería por colas y persistencia en MongoDB. Incluye tests unitarios y de integración con cobertura exportada para Sonar.",
    stack: ["Python", "FastAPI", "Docker", "SonarQube", "MongoDB", "pytest"],
    href: "https://github.com/SamuelPuerta/Transcription-service",
  },
  {
    slug: "sysmonitor",
    name: "System Operative Monitor",
    status: "estable",
    category: "sistemas",
    detail:
      "Suite de monitoreo de sistema Linux en tiempo real, en Bash. Registra métricas de CPU, RAM, disco y red en segundo plano, emite alertas automáticas por uso crítico y genera reportes resumidos apoyada en cron.",
    stack: ["Bash", "Linux", "Cron"],
    href: "https://github.com/SamuelPuerta/System-Operative-Monitor-Bash",
  },
  {
    slug: "concurrency-webserver",
    name: "Concurrency Web Server",
    status: "estable",
    category: "sistemas",
    detail:
      "Servidor web concurrente en C que compara las políticas de scheduling FIFO vs. SFF (shortest-file-first). Automatiza la campaña de experimentos y aplica pruebas estadísticas (Mann-Whitney U, tamaño de efecto) sobre latencia y throughput.",
    stack: ["C", "Python", "pandas", "scipy", "Bash"],
    href: "https://github.com/SamuelPuerta/concurrency-webserver",
  },
  {
    slug: "synchronization-mechanisms",
    name: "Synchronization Mechanisms",
    status: "estable",
    category: "sistemas",
    detail:
      "Tres problemas clásicos de sincronización — cola thread-safe, productor-consumidor y los filósofos comensales — implementados en C y Go, con prueba formal de ausencia de deadlock mediante resource ordering.",
    stack: ["C", "Go", "pthreads", "sync"],
    href: "https://github.com/SamuelPuerta/Synchronization-Mechanisms-SO",
  },
  {
    slug: "matrix-multiplication",
    name: "Matrix Multiplication",
    status: "archivado",
    category: "sistemas",
    detail:
      "Multiplicación de matrices en versión secuencial y paralela por procesos, implementada en C y Go, con generador de matrices de prueba y benchmark automatizado para comparar rendimiento.",
    stack: ["C", "Go", "Python", "Bash"],
    href: "https://github.com/SamuelPuerta/matrix-multiplication-processes",
  },
  {
    slug: "cctv-sockets",
    name: "CCTV Sockets TCP/UDP",
    status: "archivado",
    category: "otros",
    detail:
      "Proyecto de la asignatura de comunicaciones: sistema CCTV construido con sockets TCP y UDP para transmisión de video y datos a bajo nivel.",
    stack: ["Python", "Sockets", "TCP/UDP"],
    href: "https://github.com/SamuelPuerta/CCTV-SOCKETS-TCP-UDP",
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Backend", items: ["Java", "Spring Boot", "REST", "JWT", "Maven"] },
  { label: "Testing & QA", items: ["JUnit5", "Mockito", "Cucumber", "Serenity BDD", "Selenium"] },
  { label: "Datos & ML", items: ["Python", "pandas", "XGBoost", "scikit-learn"] },
  { label: "DevOps & Calidad", items: ["Docker", "GitHub Actions", "SonarCloud/Qube", "JaCoCo"] },
  { label: "Sistemas", items: ["C", "Go", "pthreads", "sockets"] },
  { label: "Bases de datos", items: ["PostgreSQL", "MongoDB", "Flyway"] },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "Auxiliar de Programación",
    org: "SIU — Universidad de Antioquia",
    period: "jul. 2025 — actualidad",
    current: true,
  },
  {
    role: "Técnico de Sistemas / Soporte IT",
    org: "Freelance / Independiente",
    period: "2020 — 2024",
  },
];

export const education: ExperienceItem[] = [
  {
    role: "Ingeniería de Sistemas (9° semestre)",
    org: "Universidad de Antioquia",
    period: "2022 — actualidad",
    current: true,
  },
  {
    role: "Técnico en Sistemas de Información",
    org: "SENA",
    period: "2020 — 2021",
  },
  {
    role: "Bachiller Técnico en Sistemas",
    org: "I.E. Nueva Generación",
    period: "2016 — 2021",
  },
];

export const links = {
  github: "https://github.com/SamuelPuerta",
  linkedin: "https://linkedin.com/in/samuel-puerta-7772a226b",
  email: "puertasamuel04@gmail.com",
  cv: "/cv.pdf",
};
