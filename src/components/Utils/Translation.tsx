interface AboutTexts {
  title: string;
  narrative: string;
}

interface ProjectsTexts {
  title: string;
  githubButton: string;
  linkedinButton: string;
  project1Title: string;
  project1Description: string;
  project2Title: string;
  project2Description: string;
  project3Title: string;
  project3Description: string;
  project4Title: string;
  project4Description: string;
}

interface FooterTexts {
  copyright: string;
}

interface TechTexts {
  title: string;
}

interface LanguageTexts {
  about: AboutTexts;
  projects: ProjectsTexts;
  tech: TechTexts;
  footer: FooterTexts;
}

interface Translations {
  en: LanguageTexts;
  pt: LanguageTexts;
}

export const translations: Translations = {
  en: {
    about: {
      title: "The Ethos",
      narrative:
        "I build digital experiences that refuse to be ignored. By merging strict engineering with unapologetic motion design, I craft interfaces that feel alive. No templates. No defaults. Just pure, unadulterated web physics.",
    },
    projects: {
      title: "Selected Work",
      githubButton: "View Repository",
      linkedinButton: "View on LinkedIn",
      project1Title: "MedSys Clinical Managment",
      project1Description:
        "A comprehensive healthcare management system built with React 19, TypeScript, and Tailwind CSS 4. Features include Role-Based Access Control, automated PDF medical reports, and an intuitive UI designed from scratch.",
      project2Title: "Logistics Automation",
      project2Description:
        "An RPA powerhouse built in Python using First Fit Decreasing algorithms to completely optimize mainframe logistics and container packing.",
      project3Title: "Simon Game",
      project3Description:
        "An interactive memory experiment built with raw JavaScript, exploring color theory and cognitive reaction loops.",
      project4Title: "Spotify Clone",
      project4Description:
        "A front-end replica of the Spotify interface built during Alura's front-end immersion, focused on responsive layout and UI fidelity.",
    },
    tech: {
      title: "The Arsenal",
    },
    footer: {
      copyright: "Made by Lázaro Kauã",
    },
  },
  pt: {
    about: {
      title: "O Ethos",
      narrative:
        "Construo experiências digitais que se recusam a ser ignoradas. Unindo engenharia estrita com motion design sem remorsos, crio interfaces que parecem vivas. Sem templates. Sem padrões. Apenas pura física da web.",
    },
    projects: {
      title: "Trabalhos Selecionados",
      githubButton: "Ver Repositório",
      linkedinButton: "Ver no LinkedIn",
      project1Title: "Dashboard Clínico",
      project1Description:
        "Sistema de gestão clínica completo em React 19, TypeScript e Tailwind 4. Possui RBAC, prontuários integrados e geração automática de laudos em PDF.",
      project2Title: "Logistics Automation",
      project2Description:
        "Uma potência de RPA construída em Python usando algoritmos First Fit Decreasing para otimizar completamente a logística de mainframe e empacotamento de contêineres.",
      project3Title: "Simon Game",
      project3Description:
        "Um experimento interativo de memória construído com JavaScript puro, explorando a teoria das cores e loops de reação cognitiva.",
      project4Title: "Spotify Clone",
      project4Description:
        "Uma réplica front-end da interface do Spotify construída durante a imersão front-end da Alura, focada em layout responsivo e fidelidade de interface.",
    },
    tech: {
      title: "O Arsenal",
    },
    footer: {
      copyright: "Feito por Lázaro Kauã",
    },
  },
};
