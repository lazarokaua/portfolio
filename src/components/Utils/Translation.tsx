interface AboutTexts {
  title: string;
  narrative: string;
}

interface ProjectsTexts {
  title: string;
  project1Title: string;
  project1Description: string;
  project2Title: string;
  project2Description: string;
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
      project1Title: "Logistics Automation",
      project1Description:
        "An RPA powerhouse built in Python using First Fit Decreasing algorithms to completely optimize mainframe logistics and container packing.",
      project2Title: "Simon Game",
      project2Description:
        "An interactive memory experiment built with raw JavaScript, exploring color theory and cognitive reaction loops.",
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
      project1Title: "Logistics Automation",
      project1Description:
        "Uma potência de RPA construída em Python usando algoritmos First Fit Decreasing para otimizar completamente a logística de mainframe e empacotamento de contêineres.",
      project2Title: "Simon Game",
      project2Description:
        "Um experimento interativo de memória construído com JavaScript puro, explorando a teoria das cores e loops de reação cognitiva.",
    },
    tech: {
      title: "O Arsenal",
    },
    footer: {
      copyright: "Feito por Lázaro Kauã",
    },
  },
};
