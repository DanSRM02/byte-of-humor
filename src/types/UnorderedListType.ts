export type UnorderedListTopic = {
  subtitle: string;
  link: string;
};

export type UnorderedListImpl = {
  title: string;
  topics: UnorderedListTopic[];
};

export type InformationListData = UnorderedListImpl[];