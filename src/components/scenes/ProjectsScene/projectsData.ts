import dashboardImage from "../../../assets/dashboard.jpeg";
import simmonGame from "../../../assets/simmoGame.png";
import deviceManagement from "../../../assets/deviceManagement.png";
import spotify from "../../../assets/spotify.png";
import inventoryService from "../../../assets/inventoryService.jpg";
import rpaCubagem from "../../../assets/rpaCubagem.jpg";

export type ProjectCategory = "all" | "frontend" | "backend" | "automation";

export interface ProjectItem {
  id: string;
  category: "frontend" | "backend" | "automation";
  inProduction?: boolean;
  year: string;
  image: string;
  link: string;
  linkType?: "github" | "linkedin";
  tags: string[];
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "medsys-dashboard",
    category: "frontend",
    inProduction: true,
    year: "2025",
    image: dashboardImage,
    link: "https://www.linkedin.com/posts/lazarokaua_frontend-reactjs-typescript-activity-7477692453190492160-Y8nJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEDTT28Biyr9pTF7MORUR2U0WEkYsCYpHfE",
    linkType: "linkedin",
    tags: ["React 19", "TypeScript", "Tailwind CSS 4"],
    title: {
      pt: "Dashboard Clínico",
      en: "MedSys Clinical Management",
    },
    description: {
      pt: "Sistema de gestão clínica completo em produção com React 19, TypeScript e Tailwind 4. Possui RBAC, prontuários integrados e geração automática de laudos em PDF.",
      en: "A comprehensive in-production healthcare management system built with React 19, TypeScript, and Tailwind CSS 4. Features include Role-Based Access Control and automated PDF reports.",
    },
  },
  {
    id: "logistics-automation",
    category: "automation",
    inProduction: true,
    year: "2024",
    image: rpaCubagem,
    link: "https://github.com/lazarokaua/RPA-Mainframe-Logistics-Automation",
    linkType: "github",
    tags: ["Python", "RPA", "First Fit Decreasing", "Cubagem", "Mainframe"],
    title: {
      pt: "RPA Logística & Cubagem",
      en: "RPA Mainframe Logistics & Cubage",
    },
    description: {
      pt: "Sistema de RPA em produção para alocação inteligente de cargas em boxes (bins) e cálculo volumétrico de cubagem integrado ao mainframe via algoritmos First Fit Decreasing.",
      en: "In-production Robotic Process Automation (RPA) system for intelligent cargo packing in bins and volumetric cubage calculation integrated with mainframe systems using First Fit Decreasing algorithms.",
    },
  },
  {
    id: "inventory-service",
    category: "backend",
    year: "2026",
    image: inventoryService,
    link: "https://github.com/lazarokaua/inventory-service",
    linkType: "github",
    tags: ["Java 17", "Spring Boot", "PostgreSQL", "Docker", "DDD", "Flyway"],
    title: {
      pt: "Inventory Service",
      en: "Inventory Service",
    },
    description: {
      pt: "Microsserviço de alta performance voltado para gestão de estoque e endereçamento logístico (WMS), desenhado sob princípios de Domain-Driven Design (DDD).",
      en: "High-performance microservice designed for warehouse stock control and logistics addressing (WMS), engineered with Domain-Driven Design (DDD) principles.",
    },
  },
  {
    id: "device-management",
    category: "frontend",
    year: "2024",
    image: deviceManagement,
    link: "https://github.com/lazarokaua/emprestimo-dispositivos",
    linkType: "github",
    tags: ["React", "JavaScript", "Gestão de Dispositivos"],
    title: {
      pt: "Empréstimo de Dispositivos",
      en: "Device Loan Management",
    },
    description: {
      pt: "Aplicação para controle e registro operacional de empréstimos e devoluções de dispositivos corporativos, garantindo rastreabilidade do patrimônio físico.",
      en: "Corporate device loan and return tracking application designed to ensure equipment accountability and asset control.",
    },
  },
  {
    id: "simon-game",
    category: "frontend",
    year: "2024",
    image: simmonGame,
    link: "https://github.com/lazarokaua/simon-game",
    linkType: "github",
    tags: ["JavaScript", "CSS", "Game Logic"],
    title: {
      pt: "Simon Game",
      en: "Simon Game",
    },
    description: {
      pt: "Um experimento interativo de memória construído com JavaScript puro, explorando a teoria das cores e loops de reação cognitiva.",
      en: "An interactive memory experiment built with raw JavaScript, exploring color theory and cognitive reaction loops.",
    },
  },
  {
    id: "spotify-clone",
    category: "frontend",
    year: "2023",
    image: spotify,
    link: "https://github.com/lazarokaua/spotify-clone",
    linkType: "github",
    tags: ["HTML", "CSS", "JavaScript"],
    title: {
      pt: "Spotify Clone",
      en: "Spotify Clone",
    },
    description: {
      pt: "Uma réplica front-end da interface do Spotify construída durante a imersão front-end da Alura, focada em layout responsivo e fidelidade de interface.",
      en: "A front-end replica of the Spotify interface built during Alura's front-end immersion, focused on responsive layout and UI fidelity.",
    },
  },
];
