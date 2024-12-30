import Categories from '@/components/filter/categories';
import Rule from '@/components/filter/rule';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import { Dropdown, Editable, IconButton } from '@/components/widgets';
import { Category, Filter } from '@/lib/data';
import { obtainFilter, saveFilter, uuidv4 } from '@/lib/utils';
import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';

export default function FilterPage({
  data,
  params,
}: {
  data: { allPoeMetadata: { nodes: { version: string; league: string }[] } };
  params: { version: string; '*': string };
}) {
  const { version, '*': id } = params;
  const leagues: { name: string; version: string }[] =
    data.allPoeMetadata.nodes.map((v) => ({
      name: v.league,
      version: v.version,
    }));
  const saved: Filter | null = obtainFilter(version, id);
  if (!saved && id) {
    return <FilterNotFound />;
  }

  const [filter, setFilter] = useState<Filter>(
    saved || {
      game: version,
      gameVersion: leagues[0].version,
      id: uuidv4(),
      name: '',
      lastUpdated: new Date(),
      description: '',
      categories: [],
    }
  );
  const [category, setCategory] = useState<Category | null>(
    filter.categories[0]
  );

  useEffect(() => {
    // saveFilter(filter);
    console.log('saveFilter: ', filter);
  }, [filter]);

  return (
    <Layout>
      <div className="flex h-full justify-center">
        <div className="flex w-[900px] flex-col space-y-2">
          <div className="flex flex-row items-center space-x-4 pe-7 pt-2">
            <div className="w-44">
              <Editable
                className="truncate ps-3 text-lg"
                text={filter.name}
                onTextChange={(text) =>
                  setFilter({
                    ...filter,
                    name: text,
                  })
                }
              />
            </div>
            {/* <div className="flex flex-row self-end ps-2">
            <IconButton
              icon={
                false
                  ? 'mingcute:square-arrow-up-line'
                  : 'mingcute:square-arrow-down-line'
              }
              onClick={() => {
                // setExpanded(!expanded);
              }}
            />
            <div className="ps-3">all</div>
          </div> */}
            <div className="flex-grow" />
            <Dropdown
              data={leagues.map((v) => ({
                text: v.name,
                value: v,
              }))}
              onSelected={() => {}}
            />
            <IconButton icon="mingcute:settings-6-line" onClick={() => {}} />
          </div>
          <div className="flex h-full flex-row rounded-md border border-neutral-500">
            <Categories
              categories={filter.categories}
              onSelected={setCategory}
              onNewCategory={() => {
                setFilter({
                  ...filter,
                  categories: [
                    ...filter.categories,
                    {
                      id: uuidv4(),
                      name: 'new category',
                      rules: [],
                    },
                  ],
                });
              }}
            />
            <div className="flex w-full">
              {category && (
                <div className="flex w-full flex-col space-y-2 px-4 py-2">
                  {category.rules.map((rule) => (
                    <Rule rule={rule} key={rule.id} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="" />;

export const query = graphql`
  query ($version: String) {
    allPoeMetadata(
      filter: { game_version: { eq: $version } }
      sort: { version: DESC }
    ) {
      nodes {
        game_version
        league
        version
      }
    }
  }
`;

function FilterNotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-6 pt-24">
        <div className="text-4xl">Exile!</div>
        <div className="text-3xl">Your filter is in another browser!</div>
        <div className="w-[38ch] whitespace-pre-wrap">
          ░░░░░░░░▄▄▄▀▀▀▄▄███▄░░░░░░░░░░░░░░ ░░░░░▄▀▀░░░░░░░▐░▀██▌░░░░░░░░░░░░░
          ░░░▄▀░░░░▄▄███░▌▀▀░▀█░░░░░░░░░░░░░ ░░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░░░░░░░░░░░░
          ░▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄░░░░░░░░░░░ ░▌▄▄▀▀░░░░░░░░▌░░░░▄███████▄░░░░░░
          ░░░░░░░░░░░░░▐░░░░▐███████████▄░░░ ░░░░░le░░░░░░░▐░░░░▐█████████████▄
          ░░░░toucan░░░░░░▀▄░░░▐█████████████▄
          ░░░░░░has░░░░░░░░▀▄▄███████████████ ░░░░░arrived░░░░░░░░░░░░█▀██████░░
        </div>
      </div>
    </Layout>
  );
}
