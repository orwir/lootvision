import { Filter } from './data';

const isBrowser = typeof window !== 'undefined';

export function uuidv4() {
  return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

export function obtainFilters(game: string): Filter[] {
  const data = getItem('filters_' + game) || {};
  return Object.values(data);
  // return dataExample;
}

export function obtainFilter(game: string, id: string): Filter | null {
  const data: Record<string, Filter> = getItem('filters_' + game) || {};
  return data[id];
  // return dataExample[0];
}

export function removeFilter(filter: Filter): void {
  const data: Record<string, Filter> = getItem('filters_' + filter.game) || {};
  delete data[filter.id];
  setItem('filters_' + filter.game, data);
}

export function saveFilter(filter: Filter): void {
  if (!isBrowser) return;

  const key = 'filters_' + filter.game;
  const data: Record<string, Filter> = getItem(key) || {};
  data[filter.id] = filter;
  setItem(key, data);
}

function getItem<T>(key: string): T | null {
  if (!isBrowser) return null;

  const jsonValue = localStorage.getItem(key);
  const value = jsonValue ? JSON.parse(jsonValue) : null;
  return value;
}

function setItem<T>(key: string, value: T): void {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
}

export const dataExample: Filter[] = [
  {
    game: 'poe1',
    id: '1',
    name: 'Filter #1',
    description: 'The very first filter',
    leagueVersion: '3.25',
    leagueName: 'Settlers of Kalguur',
    lastUpdated: new Date(),
    categories: [
      {
        id: '1',
        name: 'Currency',
        rules: [
          {
            id: '1',
            name: 'Tier 0',
            description:
              'Highlight highly valuable currency such as divines and mirrors',
            actions: [
              {
                id: '1',
                label: 'Font size',
                description: 'Sets the font size of the item label.',
                name: 'SetFontSize',
                value: '45',
              },
              {
                id: '2',
                label: 'Text color',
                description:
                  'Sets the text colour of the item label. Ruthless filters must have an alpha value of 80 or above',
                name: 'SetTextColor',
                value: '255 0 0 255',
              },
              {
                id: '3',
                label: 'Border color',
                description: 'Sets the border colour of the item label.',
                name: 'SetBorderColor',
                value: '255 0 0 255',
              },
              {
                id: '4',
                label: 'Background color',
                description: 'Sets the background colour of the item label.',
                name: 'SetBackgroundColor',
                value: '255 255 255 255',
              },
              {
                id: '5',
                label: 'Alert sound',
                description:
                  'Plays a built-in alert sound when the item appears. Can be disabled by specifying "None".',
                name: 'PlayAlertSound',
                value: '6 300',
              },
              {
                id: '6',
                label: 'Effect',
                description:
                  'Displays a coloured beam of light above an item highlighted by an item filter. When the value is Temp, the beam only appears as the item drops, Otherwise the beam will be permanently visible.',
                name: 'PlayEffect',
                value: 'Red',
              },
              {
                id: '7',
                label: 'Minimap icon',
                description: 'Displays an icon on your minimap.',
                name: 'MinimapIcon',
                value: '0 Red Star',
              },
            ],
            conditions: [
              {
                id: '1',
                label: 'Class',
                description: 'Filter by item class name.',
                name: 'Class',
                value: 'Currency',
              },
              {
                id: '2',
                label: 'BaseType',
                description: 'Filter by base type name.',
                name: 'BaseType',
                value: '"Mirror" "Divine" "Perfect Jeweller\'s Orb"',
              },
            ],
          },
          {
            id: '2',
            name: 'Tier 1',
            description:
              'Highlight valuable currency such as exalted orbs, chaos orbs, etc',
            actions: [
              {
                id: '1',
                label: 'Font size',
                description: 'Sets the font size of the item label.',
                name: 'SetFontSize',
                value: '45',
              },
              {
                id: '2',
                label: 'Text color',
                description:
                  'Sets the text colour of the item label. Ruthless filters must have an alpha value of 80 or above',
                name: 'SetTextColor',
                value: '255 0 0 255',
              },
              {
                id: '3',
                label: 'Border color',
                description: 'Sets the border colour of the item label.',
                name: 'SetBorderColor',
                value: '255 0 0 255',
              },
              {
                id: '4',
                label: 'Background color',
                description: 'Sets the background colour of the item label.',
                name: 'SetBackgroundColor',
                value: '255 255 255 255',
              },
              {
                id: '5',
                label: 'Alert sound',
                description:
                  'Plays a built-in alert sound when the item appears. Can be disabled by specifying "None".',
                name: 'PlayAlertSound',
                value: '6 300',
              },
              {
                id: '6',
                label: 'Effect',
                description:
                  'Displays a coloured beam of light above an item highlighted by an item filter. When the value is Temp, the beam only appears as the item drops, Otherwise the beam will be permanently visible.',
                name: 'PlayEffect',
                value: 'Red',
              },
              {
                id: '7',
                label: 'Minimap icon',
                description: 'Displays an icon on your minimap.',
                name: 'MinimapIcon',
                value: '0 Red Star',
              },
            ],
            conditions: [
              {
                id: '1',
                label: 'Class',
                description: 'Filter by item class name.',
                name: 'Class',
                value: 'Currency',
              },
              {
                id: '2',
                label: 'BaseType',
                description: 'Filter by base type name.',
                name: 'BaseType',
                value: '"Mirror" "Divine" "Perfect Jeweller\'s Orb"',
              },
            ],
          },
          {
            id: '3',
            name: 'Tier 3',
            description:
              'Highlight currency such as regal orbs, transmutation orbs',
            actions: [
              {
                id: '1',
                label: 'Font size',
                description: 'Sets the font size of the item label.',
                name: 'SetFontSize',
                value: '45',
              },
              {
                id: '2',
                label: 'Text color',
                description:
                  'Sets the text colour of the item label. Ruthless filters must have an alpha value of 80 or above',
                name: 'SetTextColor',
                value: '255 0 0 255',
              },
              {
                id: '3',
                label: 'Border color',
                description: 'Sets the border colour of the item label.',
                name: 'SetBorderColor',
                value: '255 0 0 255',
              },
              {
                id: '4',
                label: 'Background color',
                description: 'Sets the background colour of the item label.',
                name: 'SetBackgroundColor',
                value: '255 255 255 255',
              },
              {
                id: '5',
                label: 'Alert sound',
                description:
                  'Plays a built-in alert sound when the item appears. Can be disabled by specifying "None".',
                name: 'PlayAlertSound',
                value: '6 300',
              },
              {
                id: '6',
                label: 'Effect',
                description:
                  'Displays a coloured beam of light above an item highlighted by an item filter. When the value is Temp, the beam only appears as the item drops, Otherwise the beam will be permanently visible.',
                name: 'PlayEffect',
                value: 'Red',
              },
              {
                id: '7',
                label: 'Minimap icon',
                description: 'Displays an icon on your minimap.',
                name: 'MinimapIcon',
                value: '0 Red Star',
              },
            ],
            conditions: [
              {
                id: '1',
                label: 'Class',
                description: 'Filter by item class name.',
                name: 'Class',
                value: 'Currency',
              },
              {
                id: '2',
                label: 'BaseType',
                description: 'Filter by base type name.',
                name: 'BaseType',
                value: '"Mirror" "Divine" "Perfect Jeweller\'s Orb"',
              },
            ],
          },
        ],
      },
      {
        id: '2',
        name: 'Delirium',
        rules: [],
      },
      {
        id: '3',
        name: 'Breach',
        rules: [],
      },
      {
        id: '4',
        name: 'Fragments',
        rules: [],
      },
      {
        id: '5',
        name: 'Expedition',
        rules: [],
      },
      {
        id: '6',
        name: 'Essences',
        rules: [],
      },
      {
        id: '7',
        name: 'Runes',
        rules: [],
      },
      {
        id: '8',
        name: 'Omens',
        rules: [],
      },
      {
        id: '9',
        name: 'Gems (Skill, Spirit, Support)',
        rules: [],
      },
    ],
  },
  {
    game: 'poe1',
    id: '2',
    name: 'Filter #2',
    description: 'Next cool filter',
    leagueVersion: '3.25',
    leagueName: 'Settlers of Kalguur',
    lastUpdated: new Date(),
    categories: [],
  },
  {
    game: 'poe2',
    id: '3',
    name: 'Filter #3',
    description: 'Filter for juicy MF guys',
    leagueVersion: '3.25',
    leagueName: 'Settlers of Kalguur',
    lastUpdated: new Date(),
    categories: [],
  },
  {
    game: 'poe2',
    id: '4',
    name: 'Filter #4',
    description: 'The krangled one!',
    leagueVersion: '3.25',
    leagueName: 'Settlers of Kalguur',
    lastUpdated: new Date(),
    categories: [],
  },
];
