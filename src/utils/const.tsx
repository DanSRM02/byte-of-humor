import type { UnorderedListImpl } from "@/types/UnorderedListImpl";

export const buttonMessages: string[] = [
  "Enter into the real page!",
  "I want to laugh, press again!",
  "Hey come on, press again!",
  "This is the last time, I promise!",
];

export const informationListOne: UnorderedListImpl = {
  title: "Core Concepts",
  topics: [
    { subtitle: "What is Bite of Humor?", link: "/core/what-is" },
    { subtitle: "Behind the Name", link: "/core/name-origin" },
    { subtitle: "Logo Philosophy", link: "/core/logo-philosophy" },
  ],
};

export const informationListTwo: UnorderedListImpl = {
  title: "About the Project",
  topics: [
    { subtitle: "Project Overview", link: "/about/overview" },
    { subtitle: "Design Goals", link: "/about/goals" },
    { subtitle: "Creative Direction", link: "/about/creative-direction" },
  ],
};

export const informationListThree: UnorderedListImpl = {
  title: "Community",
  topics: [
    { subtitle: "Feedback Forum", link: "/community/forum" },
    { subtitle: "Submit a Joke", link: "/community/submit-joke" },
    { subtitle: "Design Challenges", link: "/community/challenges" },
  ],
};
 