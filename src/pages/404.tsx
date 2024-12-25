import Layout from '@/components/layout';
import React from 'react';

export default function Page() {
  return (
    <Layout>
      <div className="flex h-full flex-col items-center justify-center space-y-5 pt-8">
        <div className="self-center text-2xl">ʕノ•ᴥ•ʔノ ︵ ┻━┻</div>
        <div className="self-center text-xl">404 - Not found!</div>
      </div>
    </Layout>
  );
}
