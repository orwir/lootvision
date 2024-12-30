import Layout from '@/components/layout';
import React from 'react';

export default function Page() {
  return (
    <Layout>
      <div className="flex h-full flex-col items-center space-y-5 pt-8">
        <div className="self-center pt-12 text-4xl">404 - Not found!</div>
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
