export type Filter = {
  game: string;
  gameVersion: string;
  id: string;
  name: string;
  description: string;
  lastUpdated: Date;
  categories: Category[];
};

export type Category = {
  id: string;
  name: string;
  rules: Rule[];
};

export type Rule = {
  id: string;
  name: string;
  description: string;
  actions: Action[];
  conditions: Condition[];
};

export type Action = {
  id: string;
  label: string;
  description: string;
  name: string;
  value: string;
};

export type Condition = {
  id: string;
  label: string;
  description: string;
  name: string;
  value: string;
};
