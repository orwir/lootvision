import { uuidv4 } from './utils';

export type Filter = {
  game: string;
  leagueVersion: string;
  leagueName: string;
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

export const EmptyFilter = {
  game: '',
  leagueVersion: '',
  leagueName: '',
  id: uuidv4(),
  name: '',
  lastUpdated: new Date(),
  description: '',
  categories: [],
};
