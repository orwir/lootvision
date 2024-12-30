import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useLocation } from '@reach/router';
import clsx from 'clsx';

export default function Layout({ children }: { children: React.ReactNode }) {
  const versions: { allGame: { nodes: { name: string; version: string }[] } } =
    useStaticQuery(graphql`
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
    <body className="flex h-screen flex-col">
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
        This product isn't affiliated with or endorsed by Grinding Gear Games in
        any way.
      </div>
    </body>
  );
}

function HeaderLink({ to, text }: { to: string; text: string }) {
  const location = useLocation();

  if (!to.startsWith('/')) to = '/' + to;

  const isSelected = (to: string) => location.pathname.startsWith(to);

  return (
    <Link
      key={to}
      to={to}
      className={clsx('text-lg', {
        'text-amber-600': isSelected(to),
        'hover:text-amber-500': !isSelected(to),
      })}
    >
      {text}
    </Link>
  );
}
