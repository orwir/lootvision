import Rule from '@/components/filter/rule';
import Layout from '@/components/layout';
import Seo from '@/components/seo';
import { Dropdown, IconButton } from '@/components/widgets';
import { Filter } from '@/lib/data';
import { obtainFilter } from '@/lib/utils';
import clsx from 'clsx';
import { graphql, navigate } from 'gatsby';
import React, { useState } from 'react';

export default function FilterPage({
  data,
  params,
}: {
  data: { allPoeMetadata: { nodes: { version: string; league: string }[] } };
  params: { version: string; '*': string };
}) {
  const { version, '*': id } = params;
  const filter: Filter | null = obtainFilter(version, id);
  if (!filter) {
    // TODO: show warning about localStorage data instead
    navigate('/404', { replace: true });
    return;
  }
  const [selected, setSelected] = useState({
    index: 0,
    category: filter.categories[0],
  });

  const lastIndex = (filter.categories.length ?? 0) - 1;

  return (
    <Layout>
      <div className="flex w-[900px] flex-col space-y-2">
        <div className="flex flex-row items-center space-x-4 pe-7 pt-2">
          <div className="w-44 truncate ps-3 text-lg">{filter.name}</div>
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
            data={data.allPoeMetadata.nodes.map((v) => ({
              text: v.league,
              value: v,
            }))}
            onSelected={() => {}}
          />
          <IconButton icon="mingcute:settings-6-line" onClick={() => {}} />
        </div>
        <div className="flex flex-row rounded-md border border-neutral-500">
          <div className="flex w-44 flex-col">
            {filter.categories.map((item, index) => (
              <div key={item.id} className="flex flex-row">
                <button
                  onClick={() => setSelected({ index: index, category: item })}
                  className={clsx(
                    'w-full truncate border-b border-r border-neutral-500 px-3 py-4 text-left text-xl',
                    {
                      'border-b-0 border-r-0 text-amber-600':
                        selected.category === item,
                      'rounded-tr-md border-t': index === selected.index + 1,
                      'rounded-br-md': index === selected.index - 1,
                    }
                  )}
                >
                  {item.name}
                </button>
              </div>
            ))}
            <div
              className={clsx('flex flex-grow border-r border-neutral-500', {
                'rounded-tr-md border-t': selected.index === lastIndex,
              })}
            />
          </div>
          <div className="flex w-full">
            {selected.category && (
              <div className="flex w-full flex-col space-y-2 px-4 py-2">
                {selected.category.rules.map((rule) => (
                  <Rule rule={rule} key={rule.id} />
                ))}
              </div>
            )}
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
