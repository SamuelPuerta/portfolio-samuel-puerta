export type Category = "backend" | "qa" | "sistemas" | "otros";

export type Project = {
  slug: string;
  name: string;
  status: "activo" | "estable" | "archivado";
  category: Category;
  detail: string;
  stack: string[];
  href: string;
  featured: boolean;
  metric?: string;
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
      "Microservicio de agendamiento médico (CodeFactory UdeA). REST con autenticación JWT, migraciones versionadas con Flyway y documentación con Swagger/OpenAPI.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT", "Flyway"],
    href: "https://github.com/SamuelPuerta/CITASalud-Agendamiento",
    featured: true,
    metric: "CI/CD · cobertura >80%",
  },
  {
    slug: "transcription-service",
    name: "Transcription Service",
    status: "activo",
    category: "backend",
    detail:
      "Servicio de transcripción en Python con análisis de código estático integrado vía SonarQube, mensajería por colas y persistencia en MongoDB. Tests unitarios y de integración con cobertura para Sonar.",
    stack: ["Python", "FastAPI", "Docker", "SonarQube", "MongoDB", "pytest"],
    href: "https://github.com/SamuelPuerta/Transcription-service",
    featured: true,
  },
  {
    slug: "paycore-screenplay",
    name: "Paycore ScreenPlay — E2E Suite",
    status: "activo",
    category: "qa",
    detail:
      "Suite de pruebas E2E para una plataforma de pagos embebidos, con Serenity BDD y el patrón Screenplay sobre Cucumber. Escenarios de autenticación, credenciales de API y ciclo de vida de transacciones.",
    stack: ["Java", "Serenity BDD", "Cucumber", "Gradle"],
    href: "https://github.com/SamuelPuerta/PaycoreScreenPlay",
    featured: true,
    metric: "14/14 escenarios",
  },
  {
    slug: "concurrency-webserver",
    name: "Concurrency Web Server",
    status: "estable",
    category: "sistemas",
    detail:
      "Servidor web concurrente en C que compara las políticas de scheduling FIFO vs. SFF (shortest-file-first). Aplica pruebas estadísticas sobre latencia y throughput.",
    stack: ["C", "Python", "pandas", "scipy", "Bash"],
    href: "https://github.com/SamuelPuerta/concurrency-webserver",
    featured: true,
  },
  {
    slug: "saber-pro",
    name: "Modelos IA — Saber Pro Colombia",
    status: "estable",
    category: "backend",
    detail:
      "Predicción del rendimiento académico en las pruebas Saber Pro del ICFES. Pipeline completo de EDA, feature engineering, optimización con Optuna y pseudo-etiquetado para datos semi-supervisados.",
    stack: ["Python", "XGBoost", "pandas", "scikit-learn", "Optuna"],
    href: "https://github.com/SamuelPuerta/ModelosIASaberProColombia",
    featured: true,
  },
  {
    slug: "screenplay-bank",
    name: "Screenplay Automation Bank",
    status: "estable",
    category: "qa",
    detail:
      "Automatización E2E del simulador bancario XYZ Bank con patrón Screenplay. Escenarios de gestión de clientes, apertura de cuentas y un flujo bancario completo de extremo a extremo.",
    stack: ["Java", "Serenity BDD", "Cucumber", "Selenium"],
    href: "https://github.com/SamuelPuerta/ScreenplayAutomationBank",
    featured: false,
    metric: "28/28 escenarios",
  },
  {
    slug: "sysmonitor",
    name: "System Operative Monitor",
    status: "estable",
    category: "sistemas",
    detail:
      "Suite de monitoreo de sistema Linux en tiempo real, en Bash. Registra métricas de CPU, RAM, disco y red en segundo plano, emite alertas automáticas y genera reportes resumidos.",
    stack: ["Bash", "Linux", "Cron"],
    href: "https://github.com/SamuelPuerta/System-Operative-Monitor-Bash",
    featured: false,
  },
  {
    slug: "synchronization-mechanisms",
    name: "Synchronization Mechanisms",
    status: "estable",
    category: "sistemas",
    detail:
      "Tres problemas clásicos de sincronización — cola thread-safe, productor-consumidor y los filósofos comensales — implementados en C y Go, con prueba de ausencia de deadlock.",
    stack: ["C", "Go", "pthreads", "sync"],
    href: "https://github.com/SamuelPuerta/Synchronization-Mechanisms-SO",
    featured: false,
  },
  {
    slug: "matrix-multiplication",
    name: "Matrix Multiplication",
    status: "archivado",
    category: "sistemas",
    detail:
      "Multiplicación de matrices en versión secuencial y paralela por procesos, implementada en C y Go, con generador de matrices de prueba y benchmark automatizado.",
    stack: ["C", "Go", "Python", "Bash"],
    href: "https://github.com/SamuelPuerta/matrix-multiplication-processes",
    featured: false,
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
    featured: false,
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Backend", items: ["Java", "Spring Boot", "REST", "Maven", "JWT"] },
  { label: "Testing & QA", items: ["JUnit 5", "Mockito", "Cucumber", "Serenity BDD", "Selenium"] },
  { label: "DevOps & Quality", items: ["Docker", "GitHub Actions", "CI/CD", "SonarQube", "SonarCloud", "Snyk"] },
  { label: "Data / ML", items: ["Python", "pandas", "scikit-learn", "XGBoost", "Optuna"] },
  { label: "Systems", items: ["C", "Go", "Linux", "pthreads", "sockets"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Flyway"] },
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
    role: "Desarrollador Backend (Freelance)",
    org: "CENTIR del Sur",
    period: "ene. 2026 — jun. 2026 · 6 meses",
  },
  {
    role: "Técnico de Sistemas / Soporte IT",
    org: "Freelance / Independiente",
    period: "2020 — 2024",
  },
];

export type AppliedProject = {
  org: string;
  title: string;
  period: string;
  duration: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const appliedProject: AppliedProject = {
  org: "CENTIR del Sur",
  title: "Agendamiento médico y automatización por WhatsApp",
  period: "semestre 2026-1",
  duration: "proyecto aplicado universitario · pago · ~6 meses",
  summary:
    "Proyecto aplicado a una organización real como parte de la formación en Ingeniería de Sistemas (UdeA). Desarrollo bajo modalidad freelance con reuniones directas con el cliente, levantamiento de requisitos y entregas iterativas.",
  points: [
    "Módulo de gestión y agendamiento de citas médicas",
    "Desarrollo del backend e integración con código existente",
    "Panel administrativo para la gestión de citas",
    "Automatización de confirmación y cancelación de citas vía WhatsApp mediante n8n",
    "Reuniones semanales con el cliente para validación y ajustes",
    "Entrega en producción y capacitación al equipo",
  ],
  stack: ["Backend", "n8n", "WhatsApp API", "Panel admin"],
};

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
  linkedin: "https://www.linkedin.com/in/samuelpuerta-softwaredev/",
  portfolio: "https://samuel-puerta.vercel.app/",
  email: "puertasamuel04@gmail.com",
  cv: "/cv.pdf",
};
