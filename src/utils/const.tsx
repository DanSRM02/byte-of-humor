import type { Country } from "@/types/CountryType";
import { LuCrown, LuUsers, LuMail } from "react-icons/lu";
import type { InformationListData } from "@/types/UnorderedListImpl";

export const DEFAULT_LANG = "en";
export const DEFAULT_LOCAL = "US";
export const SUPPORTED_LANGS = ["fr", "de"];

export const locales: Country[] = [
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "US", name: "United States", flag: "🇺🇸" },
];

export const platformSections = [
  {
    title: "Communication Hub",
    icon: LuMail,
    description: "Stay connected with your joke community",
    features: [
      "Daily joke newsletters",
      "Community notifications",
      "Personalized recommendations",
      "Weekly humor digest",
    ],
    badge: "Essential",
  },
  {
    title: "Social Features",
    icon: LuUsers,
    description: "Connect and share with fellow joke enthusiasts",
    features: [
      "Share favorite jokes",
      "Follow other users",
      "Create joke collections",
      "Community discussions",
    ],
    badge: "Interactive",
  },
  {
    title: "Premium Experience",
    icon: LuCrown,
    description: "Unlock advanced features and exclusive content",
    features: [
      "Unlimited joke access",
      "Advanced filtering",
      "Premium categories",
      "Ad-free experience",
    ],
    badge: "Exclusive",
  },
];

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

export const informationListFR: InformationListData = [
  {
    title: "Concepts Clés",
    topics: [
      { subtitle: "Qu'est-ce que Bite of Humor ?", link: "/fr/core/what-is" },
      { subtitle: "Derrière le Nom", link: "/fr/core/name-origin" },
      { subtitle: "Philosophie du Logo", link: "/fr/core/logo-philosophy" },
    ],
  },
  {
    title: "À Propos du Projet",
    topics: [
      { subtitle: "Aperçu du Projet", link: "/fr/about/overview" },
      { subtitle: "Objectifs de Conception", link: "/fr/about/goals" },
      { subtitle: "Direction Créative", link: "/fr/about/creative-direction" },
    ],
  },
  {
    title: "Communauté",
    topics: [
      { subtitle: "Forum de Discussion", link: "/fr/community/forum" },
      { subtitle: "Proposer une Blague", link: "/fr/community/submit-joke" },
      { subtitle: "Défis de Conception", link: "/fr/community/challenges" },
    ],
  },
];
export const informationListDE: InformationListData = [
  {
    title: "Kernkonzepte",
    topics: [
      { subtitle: "Was ist Bite of Humor?", link: "/de/core/what-is" },
      { subtitle: "Hinter dem Namen", link: "/de/core/name-origin" },
      { subtitle: "Logo-Philosophie", link: "/de/core/logo-philosophy" },
    ],
  },
  {
    title: "Über das Projekt",
    topics: [
      { subtitle: "Projektübersicht", link: "/de/about/overview" },
      { subtitle: "Designziele", link: "/de/about/goals" },
      { subtitle: "Kreative Leitung", link: "/de/about/creative-direction" },
    ],
  },
  {
    title: "Community",
    topics: [
      { subtitle: "Feedback-Forum", link: "/de/community/forum" },
      { subtitle: "Witz einreichen", link: "/de/community/submit-joke" },
      {
        subtitle: "Design-Herausforderungen",
        link: "/de/community/challenges",
      },
    ],
  },
];
