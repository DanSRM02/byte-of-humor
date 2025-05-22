import type { InformationListData } from "@/types/UnorderedListImpl";

export const DEFAULT_LANG = "en";
export const SUPPORTED_LANGS = ["es", "pt"];

export const informationListEN: InformationListData = [
  {
    title: "Core Concepts",
    topics: [
      { subtitle: "What is Bite of Humor?", link: "/en/core/what-is" },
      { subtitle: "Behind the Name", link: "/en/core/name-origin" },
      { subtitle: "Logo Philosophy", link: "/en/core/logo-philosophy" },
    ],
  },
  {
    title: "About the Project",
    topics: [
      { subtitle: "Project Overview", link: "/en/about/overview" },
      { subtitle: "Design Goals", link: "/en/about/goals" },
      { subtitle: "Creative Direction", link: "/en/about/creative-direction" },
    ],
  },
  {
    title: "Community",
    topics: [
      { subtitle: "Feedback Forum", link: "/en/community/forum" },
      { subtitle: "Submit a Joke", link: "/en/community/submit-joke" },
      { subtitle: "Design Challenges", link: "/en/community/challenges" },
    ],
  },
];

export const informationListPT: InformationListData = [
  {
    title: "Conceitos Principais",
    topics: [
      { subtitle: "O que é Bite of Humor?", link: "/pt/core/what-is" },
      { subtitle: "Por Trás do Nome", link: "/pt/core/name-origin" },
      { subtitle: "Filosofia do Logotipo", link: "/pt/core/logo-philosophy" },
    ],
  },
  {
    title: "Sobre o Projeto",
    topics: [
      { subtitle: "Visão Geral do Projeto", link: "/pt/about/overview" },
      { subtitle: "Objetivos de Design", link: "/pt/about/goals" },
      { subtitle: "Direção Criativa", link: "/pt/about/creative-direction" },
    ],
  },
  {
    title: "Comunidade",
    topics: [
      { subtitle: "Fórum de Feedback", link: "/pt/community/forum" },
      { subtitle: "Enviar uma Piada", link: "/pt/community/submit-joke" },
      { subtitle: "Desafios de Design", link: "/pt/community/challenges" },
    ],
  },
];

export const informationListES: InformationListData = [
  {
    title: "Conceptos Clave",
    topics: [
      { subtitle: "¿Qué es Bite of Humor?", link: "/es/core/what-is" },
      { subtitle: "Detrás del Nombre", link: "/es/core/name-origin" },
      { subtitle: "Filosofía del Logo", link: "/es/core/logo-philosophy" },
    ],
  },
  {
    title: "Sobre el Proyecto",
    topics: [
      { subtitle: "Resumen del Proyecto", link: "/es/about/overview" },
      { subtitle: "Objetivos de Diseño", link: "/es/about/goals" },
      { subtitle: "Dirección Creativa", link: "/es/about/creative-direction" },
    ],
  },
  {
    title: "Comunidad",
    topics: [
      { subtitle: "Foro de Comentarios", link: "/es/community/forum" },
      { subtitle: "Enviar un Chiste", link: "/es/community/submit-joke" },
      { subtitle: "Desafíos de Diseño", link: "/es/community/challenges" },
    ],
  },
];
