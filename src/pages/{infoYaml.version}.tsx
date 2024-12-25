import Game from '@/components/filter/game';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import { graphql } from 'gatsby';
import React from 'react';

export default function GamePage({
  data,
  children,
}: {
  data: Data;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Game filters={dataExample} />
    </Layout>
  );
}

export const Head = ({ data }: { data: Data }) => (
  <Seo title={data.infoYaml.label} />
);

export const query = graphql`
  query ($version: String) {
    infoYaml(version: { eq: $version }) {
      label
      version
    }
  }
`;

type Data = {
  infoYaml: {
    label: string;
    version: string;
  };
};

const dataExample = [
  {
    id: '1',
    label: 'Filter #1',
    categories: [
      {
        id: '1',
        label: 'Currency',
        rules: [
          {
            id: '1',
            label: 'Currency: Tier 0',
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
            label: 'Currency: Tier 1',
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
            label: 'Currency: Tier 3',
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
        label: 'Delirium',
        rules: [],
      },
      {
        id: '3',
        label: 'Breach',
        rules: [],
      },
      {
        id: '4',
        label: 'Fragments',
        rules: [],
      },
      {
        id: '5',
        label: 'Expedition',
        rules: [],
      },
      {
        id: '6',
        label: 'Essences',
        rules: [],
      },
      {
        id: '7',
        label: 'Runes',
        rules: [],
      },
      {
        id: '8',
        label: 'Omens',
        rules: [],
      },
      {
        id: '9',
        label: 'Gems (Skill, Spirit, Support)',
        rules: [],
      },
    ],
  },
  {
    id: '2',
    label: 'Filter #2',
    categories: [],
  },
  {
    id: '3',
    label: 'Filter #3',
    categories: [],
  },
  {
    id: '4',
    label: 'Filter #4',
    categories: [],
  },
];
