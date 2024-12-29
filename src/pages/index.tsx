import React from 'react';
import Seo from '../components/seo';
import { graphql, Link } from 'gatsby';
import clsx from 'clsx';

export default function IndexPage({
  data,
}: {
  data: { allGame: { nodes: { version: string; name: string }[] } };
}) {
  return (
    <div className="flex h-screen flex-row items-center justify-center divide-x divide-amber-600">
      {data.allGame.nodes.map((game, index) => (
        <Link
          key={game.version}
          to={`/${game.version}`}
          className={clsx(
            'flex h-full w-1/2 items-center justify-end px-8 text-9xl hover:bg-neutral-900',
            { 'text-right': index === 0 }
          )}
        >
          {game.name}
        </Link>
      ))}
    </div>
  );
}

export const Head = () => <Seo title="" />;

export const query = graphql`
  query {
    allGame {
      nodes {
        version
        name
      }
    }
  }
`;
