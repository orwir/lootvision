import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export default function Layout({ children }: { children: React.ReactNode }) {
  const metadata: SiteMetadata = useStaticQuery(graphql`
    query {
      allInfoYaml {
        nodes {
          version
          label
        }
      }
    }
  `);

  return (
    <div>
      <div className="flex flex-row space-x-2 px-2 py-3">
        {metadata.allInfoYaml.nodes.map((item) => (
          <Link key={item.version} to={`/${item.version}`}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="px-2">{children}</div>
    </div>
  );
}

type SiteMetadata = {
  allInfoYaml: {
    nodes: { version: string; label: string }[];
  };
};
