import type { Country } from "@/types/CountryImpl";
import type { UnorderedListImpl } from "@/types/UnorderedListType";
import { LuCrown, LuUsers, LuMail, LuCircle, LuStar } from "react-icons/lu";

export const countries: Country[] = [
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "US", name: "United States", flag: "🇺🇸" },
];

export const plans: UnorderedListImpl[] = [
  {
    title: "basic",
    icon: LuCircle,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 0,
  },
  {
    title: "pro",
    icon: LuStar,
    popular: true,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 9.99,
  },
  {
    title: "premium",
    icon: LuCrown,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 19.99,
  },
];

export const platformSections: UnorderedListImpl[] = [
  {
    title: "communicationHub",
    icon: LuMail,
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
  {
    title: "socialFeatures",
    icon: LuUsers,
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
  {
    title: "premiumExperience",
    icon: LuCrown,
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
];

export const informationListEN: UnorderedListImpl[] = [
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

export const informationListFR: UnorderedListImpl[] = [
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

export const informationListDE: UnorderedListImpl[] = [
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
