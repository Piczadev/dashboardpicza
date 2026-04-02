import React from 'react';
import Head from 'next/head';
import { Layout } from '../../components/Layout';
import { BlogFeed } from '../../components/BlogFeed';
import { getAllPosts } from '../../lib/mdx';

export default function BlogIndex({ allPosts }: { allPosts: any[] }) {
  return (
    <>
      <Head>
        <title>Artifacts & Research | PiczaDev</title>
      </Head>
      <Layout>
        <div className="pt-24 pb-12">
          <BlogFeed posts={allPosts} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'category',
    'excerpt',
    'gradient',
  ]);

  return {
    props: { allPosts },
  };
}
