export type Filter = {
  id: string;
  label: string;
  categories: Category[];
};

export type Category = {
  id: string;
  label: string;
  rules: Rule[];
};

export type Rule = {
  id: string;
  label: string;
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
