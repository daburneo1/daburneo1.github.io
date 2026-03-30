const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];
const revealItems = [...document.querySelectorAll(".reveal")];
const languageToggle = document.querySelector("#language-toggle");
const metaDescription = document.querySelector('meta[name="description"]');
const languagePreferenceKey = "preferredLanguage";

const setText = (selector, value) => {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
};

const setTextList = (selector, values) => {
  const elements = [...document.querySelectorAll(selector)];
  values.forEach((value, index) => {
    if (elements[index]) {
      elements[index].textContent = value;
    }
  });
};

const translations = {
  en: {
    htmlLang: "en",
    metaTitle: "David Burneo | Backend & Full-Stack Developer",
    metaDescription:
      "Portfolio of David Burneo, a backend and full-stack developer focused on .NET, APIs, microservices, enterprise systems, and AI-integrated products.",
    navAriaLabel: "Primary",
    nav: ["About", "Experience", "Projects", "Skills", "Contact"],
    heroEyebrow: "Backend / Full-Stack Developer",
    heroTitle: "Building reliable backend and full-stack products with modern .NET architecture.",
    heroLead:
      "I design and deliver scalable backend and full-stack systems with C#, .NET, React, microservices, and production-grade data workflows across enterprise and product environments. My deepest hands-on experience is in large-scale financial operations, complemented by API integrations, workflow automation, and AI-assisted solutions in other domains.",
    heroButtons: ["View Projects", "Let's Connect"],
    focusLabel: "Current Focus",
    focusItems: [
      ".NET 10 and C# backend engineering",
      "Financial systems and credit process digitization",
      "REST, gRPC, async messaging, and microservices",
      "Applied AI for validation and workflow enhancement",
    ],
    metricTitles: ["3+ years", "Nationwide rollout", "Fintech + AI", "Full ownership"],
    metricBodies: [
      "building enterprise software",
      "credit platform in production",
      "delivery across regulated processes",
      "architecture, delivery, and deployment",
    ],
    aboutEyebrow: "About Me",
    aboutTitle: "Technical depth with product and delivery ownership.",
    aboutParagraphs: [
      "I am a Full-Stack Developer and Technical Lead based in Loja, Ecuador, with experience designing and implementing complex enterprise systems for the financial sector. My work combines backend rigor, pragmatic frontend delivery, and a strong focus on system reliability, maintainability, and business impact.",
      "I work comfortably across architecture, APIs, database design, CI/CD pipelines, and team coordination. I am especially motivated by products that require clean engineering discipline: transactional systems, operational traceability, workflow automation, and AI-enhanced business processes.",
    ],
    strengthsTitle: "Strengths",
    experienceEyebrow: "Experience",
    experienceTitle: "Leading software that supports real operational flow.",
    timelineRole: "Technical Lead / Semi Senior Full-Stack Developer",
    timelineSummary:
      "Lead the analysis, architecture, development, and production rollout of the institution's credit system, replacing a legacy platform and digitizing the end-to-end loan workflow. The solution now serves as the central operational platform for credit processes across the cooperative's branches nationwide.",
    achievements: [
      "Directed architecture, planning, code review, delivery, and deployment across frontend, backend, and data layers.",
      "Designed microservices for loan simulation, application, analysis, digitization, validation, approval, and disbursement.",
      "Built full-stack features with React, TypeScript, .NET 10, and C# using SOLID principles and Clean Architecture.",
      "Integrated credit state workflows with n8n, REST APIs, gRPC, and asynchronous messaging connected to the financial core.",
      "Modeled relational and non-relational data with Sybase and PostgreSQL, including reporting workflows in PL/pgSQL.",
      "Deployed containerized services with Docker and CI/CD pipelines in Jenkins.",
    ],
    internSummary:
      "Supported institutional document digitization initiatives, helping organize, migrate, and structure physical archives into digital workflows with better traceability and backup hygiene.",
    projectsEyebrow: "Selected Projects",
    projectsTitle: "Projects framed around systems impact, not just implementation.",
    projectTypes: [
      "Fintech Platform",
      "Automation / Legal Data",
      "AI Integration",
      "AI / Public Safety",
      "Security / Developer Tools",
      "Internal Platforms",
      "E-commerce / Business Enablement",
    ],
    projectTitles: [
      "Institutional Credit System Modernization",
      "Judicial Status Query Microservices",
      "AI-Powered Document Validation",
      "Road Emergency Early Detection and Alerting System",
      "Hybrid Encryption Library for Distributed .NET and React Applications",
      "Administrative Modules and Technology Migration",
      "Floral Product Promotion and Sales Website",
    ],
    projectParagraphs: [
      "Re-architected and delivered a production credit platform to replace a legacy system, reducing operational friction in loan analysis and approval while improving traceability across the entire process.",
      "Built an automated Python microservices system to query judicial case status information from Ecuador's SATJE platform, improving consistency and reducing manual lookup effort for operational teams.",
      "Contributed to a document validation solution that applied AI to strengthen verification workflows, reflecting a practical interest in combining machine intelligence with enterprise process reliability.",
      "Designed a pipeline for early road emergency detection using text analysis, LLM-assisted classification, workflow automation, and Telegram notifications. The project was built to reduce response latency by transforming unstructured incident signals into actionable alerts for faster operational awareness.",
      "Built a hybrid encryption library to support secure data exchange in distributed applications across .NET backends and React frontends, helping standardize encryption workflows and reduce implementation inconsistency in multi-tier environments.",
      "Delivered internal management modules and participated in system migration efforts to modernize legacy solutions, improving maintainability, delivery speed, and long-term platform evolution.",
      "Developed a commercial website focused on promoting and selling floral products for private businesses in Loja, creating a stronger digital presence and a more accessible purchase journey for local customers.",
    ],
    projectPoints: [
      "Covered the full loan lifecycle from simulation to disbursement.",
      "Combined .NET 10 microservices, React TypeScript, PostgreSQL, Sybase, gRPC, and asynchronous integrations.",
      "Enabled a digitally managed workflow used across all agency operations nationwide.",
      "Combined Python services, PostgreSQL, n8n, LLM workflows, and Telegram delivery into an end-to-end alerting flow.",
      "Focused on turning noisy text inputs into structured emergency events that can be prioritized and communicated in near real-time.",
      "Demonstrates practical AI integration beyond prototypes, with emphasis on automation, reliability, and measurable response improvement potential.",
      "Designed for interoperability between backend and frontend layers, making secure communication easier to adopt in real product architectures.",
      "Improved reusability by packaging encryption logic into a dedicated library rather than duplicating custom implementations per project.",
      "Highlights strength in application security, architecture, and developer-focused platform thinking.",
      "Built with React and PostgreSQL to support a responsive, modern storefront experience aligned with small business growth needs.",
      "Positioned the platform as a practical business channel for product discovery, promotion, and customer conversion.",
      "Demonstrates versatility beyond fintech, showing the ability to deliver clean product-focused experiences with measurable commercial intent.",
    ],
    liveSiteText: "Live Site",
    skillsEyebrow: "Skills",
    skillsTitle: "Engineering capabilities across architecture, delivery, and scale.",
    skillCardTitles: [
      "Backend & APIs",
      "Frontend & Product Delivery",
      "Data & Infrastructure",
      "Practices & Emerging Focus",
    ],
    skillItems: [
      "C# / .NET / .NET Framework",
      "RESTful APIs and gRPC",
      "Microservices",
      "Asynchronous integrations",
      "Clean Architecture",
      "Hexagonal Architecture",
      "React + TypeScript",
      "Vue.js",
      "JavaScript / TypeScript",
      "Workflow-oriented UI delivery",
      "Cross-functional implementation",
      "PostgreSQL",
      "SQL Server",
      "Sybase",
      "MongoDB",
      "PL/pgSQL",
      "Docker, Jenkins, Git",
      "SOLID and maintainable design",
      "Scrum and agile collaboration",
      "DevOps / DevSecOps mindset",
      "n8n automation",
      "ML and LLM curiosity",
      "Applied AI learning path",
    ],
    educationEyebrow: "Education & Learning",
    educationTitle: "Strong software engineering foundation with applied AI momentum.",
    educationCardTitles: ["Education", "Selected Training"],
    educationItems: [
      "Master's in Applied Artificial Intelligence, 2025 - 2026",
      "Master's in Software Engineering, 2024 - 2025",
      "Systems Engineering and Computer Science, 2016 - 2023",
      "Advanced C# Programming in .NET Core",
      "Introduction to Test and Behavior Driven Development",
      "Introduction to DevSecOps",
      "DevOps Advanced",
      "Agile Project Management",
    ],
    contactEyebrow: "Contact",
    contactTitle: "Open to backend, full-stack, fintech, and AI-enabled product roles.",
    contactCopy:
      "If you're building systems where reliability, architecture, and business workflow matter, I'd be glad to connect.",
    githubText: "GitHub Profile",
    linkedInText: "LinkedIn Profile",
  },
  es: {
    htmlLang: "es",
    metaTitle: "David Burneo | Desarrollador Backend y Full-Stack",
    metaDescription:
      "Portafolio de David Burneo, desarrollador backend y full-stack enfocado en .NET, APIs, microservicios, sistemas empresariales y productos con IA.",
    navAriaLabel: "Principal",
    nav: ["Sobre mí", "Experiencia", "Proyectos", "Habilidades", "Contacto"],
    heroEyebrow: "Desarrollador Backend / Full-Stack",
    heroTitle: "Construyendo productos backend y full-stack confiables con arquitectura moderna en .NET.",
    heroLead:
      "Diseño y entrego sistemas backend y full-stack escalables con C#, .NET, React, microservicios y flujos de datos de nivel productivo en entornos empresariales y de producto. Mi experiencia práctica más sólida está en operaciones financieras de gran escala, complementada con integraciones API, automatización de flujos y soluciones asistidas por IA en otros dominios.",
    heroButtons: ["Ver Proyectos", "Conectemos"],
    focusLabel: "Enfoque Actual",
    focusItems: [
      "Ingeniería backend con .NET 10 y C#",
      "Sistemas financieros y digitalización del proceso de crédito",
      "REST, gRPC, mensajería asíncrona y microservicios",
      "IA aplicada para validación y mejora de flujos",
    ],
    metricTitles: ["3+ años", "Despliegue nacional", "Fintech + IA", "Control integral"],
    metricBodies: [
      "construyendo software empresarial",
      "plataforma de crédito en producción",
      "entrega en procesos regulados",
      "arquitectura, entrega y despliegue",
    ],
    aboutEyebrow: "Sobre mí",
    aboutTitle: "Profundidad técnica con enfoque en producto y entrega.",
    aboutParagraphs: [
      "Soy Desarrollador Full-Stack y Líder Técnico en Loja, Ecuador, con experiencia diseñando e implementando sistemas empresariales complejos para el sector financiero. Mi trabajo combina rigor backend, entrega frontend pragmática y un fuerte enfoque en confiabilidad, mantenibilidad e impacto de negocio.",
      "Trabajo con soltura en arquitectura, APIs, diseño de bases de datos, pipelines CI/CD y coordinación de equipos. Me motivan especialmente productos que requieren disciplina de ingeniería limpia: sistemas transaccionales, trazabilidad operativa, automatización de flujos y procesos de negocio mejorados con IA.",
    ],
    strengthsTitle: "Fortalezas",
    experienceEyebrow: "Experiencia",
    experienceTitle: "Liderando software que soporta flujos operativos reales.",
    timelineRole: "Líder Técnico / Desarrollador Full-Stack Semi Senior",
    timelineSummary:
      "Lideré el análisis, arquitectura, desarrollo y salida a producción del sistema de crédito de la institución, reemplazando una plataforma legacy y digitalizando el flujo de préstamos de punta a punta. La solución ahora funciona como plataforma operativa central para procesos de crédito en agencias a nivel nacional.",
    achievements: [
      "Dirigí arquitectura, planificación, revisión de código, entrega y despliegue en capas frontend, backend y datos.",
      "Diseñé microservicios para simulación, solicitud, análisis, digitalización, validación, aprobación y desembolso de créditos.",
      "Construí funcionalidades full-stack con React, TypeScript, .NET 10 y C# aplicando principios SOLID y Clean Architecture.",
      "Integré flujos de estados de crédito con n8n, APIs REST, gRPC y mensajería asíncrona conectada al core financiero.",
      "Modelé datos relacionales y no relacionales con Sybase y PostgreSQL, incluyendo reportes en PL/pgSQL.",
      "Desplegué servicios contenerizados con Docker y pipelines CI/CD en Jenkins.",
    ],
    internSummary:
      "Apoyé iniciativas institucionales de digitalización documental, ayudando a organizar, migrar y estructurar archivos físicos en flujos digitales con mejor trazabilidad y respaldo.",
    projectsEyebrow: "Proyectos Seleccionados",
    projectsTitle: "Proyectos enfocados en impacto de sistemas, no solo implementación.",
    projectTypes: [
      "Plataforma Fintech",
      "Automatización / Datos Legales",
      "Integración de IA",
      "IA / Seguridad Vial",
      "Seguridad / Herramientas de Desarrollo",
      "Plataformas Internas",
      "E-commerce / Impulso de Negocio",
    ],
    projectTitles: [
      "Modernización del Sistema Institucional de Crédito",
      "Microservicios de Consulta de Estado Judicial",
      "Validación Documental Potenciada con IA",
      "Sistema de Detección Temprana y Alertas de Emergencias Viales",
      "Librería de Cifrado Híbrido para Aplicaciones Distribuidas en .NET y React",
      "Módulos Administrativos y Migración Tecnológica",
      "Sitio Web para Promoción y Venta de Productos Florales",
    ],
    projectParagraphs: [
      "Rearquitecté y entregué una plataforma de crédito en producción para reemplazar un sistema legacy, reduciendo fricción operativa en análisis y aprobación de préstamos y mejorando la trazabilidad de todo el proceso.",
      "Construí un sistema automatizado de microservicios en Python para consultar estados judiciales en la plataforma SATJE de Ecuador, mejorando consistencia y reduciendo búsquedas manuales en equipos operativos.",
      "Contribuí a una solución de validación documental que aplicó IA para fortalecer flujos de verificación, reflejando un interés práctico en combinar inteligencia de máquina con confiabilidad de procesos empresariales.",
      "Diseñé un pipeline de detección temprana de emergencias viales usando análisis de texto, clasificación asistida por LLM, automatización de flujos y notificaciones por Telegram. El proyecto se construyó para reducir tiempos de respuesta al transformar señales no estructuradas en alertas accionables.",
      "Construí una librería de cifrado híbrido para intercambio seguro de datos en aplicaciones distribuidas entre backends .NET y frontends React, ayudando a estandarizar flujos de cifrado y reducir inconsistencias de implementación.",
      "Entregué módulos internos de gestión y participé en esfuerzos de migración para modernizar soluciones legacy, mejorando mantenibilidad, velocidad de entrega y evolución de plataforma.",
      "Desarrollé un sitio comercial enfocado en promoción y venta de productos florales para negocios privados en Loja, fortaleciendo presencia digital y una experiencia de compra más accesible.",
    ],
    projectPoints: [
      "Cubrió el ciclo completo del crédito, desde simulación hasta desembolso.",
      "Combinó microservicios .NET 10, React TypeScript, PostgreSQL, Sybase, gRPC e integraciones asíncronas.",
      "Habilitó un flujo digital utilizado en operaciones de agencias a nivel nacional.",
      "Combinó servicios Python, PostgreSQL, n8n, flujos LLM y entrega por Telegram en un flujo completo de alertas.",
      "Se enfocó en convertir texto ruidoso en eventos de emergencia estructurados, priorizables y comunicables casi en tiempo real.",
      "Demuestra integración práctica de IA más allá de prototipos, con énfasis en automatización, confiabilidad y mejora medible de respuesta.",
      "Diseñado para interoperabilidad entre capas backend y frontend, facilitando la adopción de comunicación segura en arquitecturas reales.",
      "Mejoró la reutilización al empaquetar la lógica de cifrado en una librería dedicada en lugar de duplicar implementaciones por proyecto.",
      "Resalta fortaleza en seguridad de aplicaciones, arquitectura y enfoque de plataforma para desarrolladores.",
      "Construido con React y PostgreSQL para una experiencia de vitrina moderna y responsiva, alineada con crecimiento de pequeños negocios.",
      "Posicionó la plataforma como canal práctico para descubrimiento de productos, promoción y conversión de clientes.",
      "Demuestra versatilidad más allá de fintech, con capacidad para entregar experiencias limpias orientadas a producto e impacto comercial.",
    ],
    liveSiteText: "Sitio en Vivo",
    skillsEyebrow: "Habilidades",
    skillsTitle: "Capacidades de ingeniería en arquitectura, entrega y escala.",
    skillCardTitles: [
      "Backend y APIs",
      "Frontend y Entrega de Producto",
      "Datos e Infraestructura",
      "Prácticas y Enfoque Emergente",
    ],
    skillItems: [
      "C# / .NET / .NET Framework",
      "APIs RESTful y gRPC",
      "Microservicios",
      "Integraciones asíncronas",
      "Clean Architecture",
      "Arquitectura Hexagonal",
      "React + TypeScript",
      "Vue.js",
      "JavaScript / TypeScript",
      "Entrega de UI orientada a flujos",
      "Implementación interfuncional",
      "PostgreSQL",
      "SQL Server",
      "Sybase",
      "MongoDB",
      "PL/pgSQL",
      "Docker, Jenkins, Git",
      "Diseño mantenible y principios SOLID",
      "Scrum y colaboración ágil",
      "Mentalidad DevOps / DevSecOps",
      "Automatización con n8n",
      "Curiosidad por ML y LLM",
      "Ruta de aprendizaje en IA aplicada",
    ],
    educationEyebrow: "Educación y Aprendizaje",
    educationTitle: "Base sólida en ingeniería de software con impulso en IA aplicada.",
    educationCardTitles: ["Educación", "Formación Seleccionada"],
    educationItems: [
      "Maestría en Inteligencia Artificial Aplicada, 2025 - 2026",
      "Maestría en Ingeniería de Software, 2024 - 2025",
      "Ingeniería en Sistemas y Computación, 2016 - 2023",
      "Programación Avanzada en C# con .NET Core",
      "Introducción a Test y Behavior Driven Development",
      "Introducción a DevSecOps",
      "DevOps Avanzado",
      "Gestión Ágil de Proyectos",
    ],
    contactEyebrow: "Contacto",
    contactTitle: "Abierto a roles backend, full-stack, fintech y productos potenciados con IA.",
    contactCopy:
      "Si estás construyendo sistemas donde importan la confiabilidad, la arquitectura y el flujo de negocio, será un gusto conectar.",
    githubText: "Perfil de GitHub",
    linkedInText: "Perfil de LinkedIn",
  },
};

let currentLanguage = "en";

const applyLanguage = (language) => {
  const selectedLanguage = translations[language] ? language : "en";
  const dictionary = translations[selectedLanguage];

  currentLanguage = selectedLanguage;
  document.documentElement.lang = dictionary.htmlLang;
  document.title = dictionary.metaTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }

  const siteNav = document.querySelector(".site-nav");
  if (siteNav) {
    siteNav.setAttribute("aria-label", dictionary.navAriaLabel);
  }

  setTextList(".site-nav a", dictionary.nav);
  setText(".hero-copy .eyebrow", dictionary.heroEyebrow);
  setText(".hero-copy h1", dictionary.heroTitle);
  setText(".hero-lead", dictionary.heroLead);
  setTextList(".hero-actions a", dictionary.heroButtons);
  setText(".panel-label", dictionary.focusLabel);
  setTextList(".focus-list li", dictionary.focusItems);
  setTextList(".metric-card strong", dictionary.metricTitles);
  setTextList(".metric-card span", dictionary.metricBodies);

  setText("#about .section-heading .eyebrow", dictionary.aboutEyebrow);
  setText("#about .section-heading h2", dictionary.aboutTitle);
  setTextList("#about .content-card:first-child p", dictionary.aboutParagraphs);
  setText("#about .compact-card .card-title", dictionary.strengthsTitle);

  setText("#experience .section-heading .eyebrow", dictionary.experienceEyebrow);
  setText("#experience .section-heading h2", dictionary.experienceTitle);
  setText("#experience .timeline-item:first-child .timeline-content h3", dictionary.timelineRole);
  setText("#experience .timeline-item:first-child .timeline-content p:nth-of-type(2)", dictionary.timelineSummary);
  setTextList("#experience .timeline-item:first-child .achievement-list li", dictionary.achievements);
  setText("#experience .timeline-item:last-child .timeline-content p:nth-of-type(2)", dictionary.internSummary);

  setText("#projects .section-heading .eyebrow", dictionary.projectsEyebrow);
  setText("#projects .section-heading h2", dictionary.projectsTitle);
  setTextList("#projects .project-type", dictionary.projectTypes);
  setTextList("#projects .project-card h3", dictionary.projectTitles);
  setTextList("#projects .project-card > p:not(.project-type)", dictionary.projectParagraphs);
  setTextList("#projects .project-points li", dictionary.projectPoints);
  setText("#projects .project-card .project-stack a", dictionary.liveSiteText);

  setText("#skills .section-heading .eyebrow", dictionary.skillsEyebrow);
  setText("#skills .section-heading h2", dictionary.skillsTitle);
  setTextList("#skills .content-card .card-title", dictionary.skillCardTitles);
  setTextList("#skills .skill-column li", dictionary.skillItems);

  setText("#education .section-heading .eyebrow", dictionary.educationEyebrow);
  setText("#education .section-heading h2", dictionary.educationTitle);
  setTextList("#education .content-card .card-title", dictionary.educationCardTitles);
  setTextList("#education .skill-column li", dictionary.educationItems);

  setText("#contact .eyebrow", dictionary.contactEyebrow);
  setText("#contact h2", dictionary.contactTitle);
  setText("#contact .contact-copy", dictionary.contactCopy);
  setText("#contact .contact-links a[href*='github.com']", dictionary.githubText);
  setText("#contact .contact-links a[href*='linkedin.com']", dictionary.linkedInText);

  if (languageToggle) {
    const isSpanish = selectedLanguage === "es";
    languageToggle.textContent = isSpanish ? "ES" : "EN";
    languageToggle.setAttribute(
      "aria-label",
      isSpanish ? "Cambiar idioma a inglés" : "Switch language to Spanish"
    );
    languageToggle.setAttribute("aria-pressed", String(isSpanish));
  }

  try {
    localStorage.setItem(languagePreferenceKey, selectedLanguage);
  } catch (_error) {
    // Ignore storage errors in restricted environments.
  }
};

const getInitialLanguage = () => {
  try {
    const storedLanguage = localStorage.getItem(languagePreferenceKey);
    if (storedLanguage && translations[storedLanguage]) {
      return storedLanguage;
    }
  } catch (_error) {
    // Ignore storage errors in restricted environments.
  }
  return "en";
};

applyLanguage(getInitialLanguage());

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "es" : "en");
  });
}

const activateNav = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activateNav(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-40% 0px -45% 0px",
    threshold: 0.1,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));
