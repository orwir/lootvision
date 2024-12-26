import React from 'react';
import Seo from '../components/seo';
import Layout from '@/components/layout';

export default function IndexPage() {
  return (
    <Layout>
      <div>Choose your game</div>
    </Layout>
  );
}

export const Head = () => <Seo title="Home Page" />;
