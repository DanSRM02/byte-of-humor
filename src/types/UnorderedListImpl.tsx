export interface UnorderedListImpl {
  title: string;
  topics: Topic[];
}

interface Topic {
  subtitle: string;
  link: string;
}
