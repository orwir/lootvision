import React from 'react';
import Seo from '@/components/seo';
import { graphql, Link } from 'gatsby';

export default function IndexPage({
  data,
}: {
  data: { allGame: { nodes: { version: string; name: string }[] } };
}) {
  return (
    <html>
      <body className="font-ubuntu flex h-screen w-screen flex-col items-center justify-center text-center text-3xl md:text-4xl lg:text-7xl">
        <div className="w-[20ch]">Simple way to create and manage filters</div>
        <div className="mb-24 mt-5 flex flex-col space-y-5 md:mt-10 md:flex-row md:space-x-10 md:space-y-0 lg:mt-20 lg:space-x-20">
          {data.allGame.nodes.map((game) => (
            <Link
              className="hover:text-teal-500"
              key={game.version}
              to={`/${game.version}`}
            >
              {game.name}
            </Link>
          ))}
        </div>
      </body>
    </html>
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
