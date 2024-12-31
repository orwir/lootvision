import React from 'react';
import { graphql, Link, useStaticQuery, withPrefix } from 'gatsby';
import { useLocation } from '@reach/router';
import clsx from 'clsx';

export default function Layout({ children }: { children: React.ReactNode }) {
  const versions: {
    allGame: { nodes: { name: string; version: string }[] };
    site: { pathPrefix: string };
  } = useStaticQuery(graphql`
    query {
      allGame {
        nodes {
          name
          version
        }
      }
    }
  `);

  return (
    <html>
      <body className="font-roboto flex h-screen flex-col">
        {/* HEADER */}
        <div className="flex w-full flex-row space-x-3 p-3">
          {versions.allGame.nodes.map((item) => (
            <HeaderLink key={item.version} to={item.version} text={item.name} />
          ))}
          <div className="flex-grow" />
          <HeaderLink to="/privacy" text="Privacy" />
          <HeaderLink to="/about" text="About" />
        </div>
        {/* CONTENT */}
        <main className="flex-1">{children}</main>
        {/* FOOTER */}
        <div className="self-center py-2 text-center">
          This product isn't affiliated with or endorsed by Grinding Gear Games
          in any way.
        </div>
      </body>
    </html>
  );
}

function HeaderLink({ to, text }: { to: string; text: string }) {
  const location = useLocation();

  if (!to.startsWith('/')) to = '/' + to;

  const isSelected = (to: string) =>
    location.pathname.startsWith(withPrefix(to));

  return (
    <Link
      key={to}
      to={to}
      className={clsx('font-ubuntu text-xl', {
        'text-teal-500': isSelected(to),
        'hover:font-bold': !isSelected(to),
      })}
    >
      {text}
    </Link>
  );
}
