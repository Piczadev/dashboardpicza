import React from "react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { ArtifactsVault } from "../components/ArtifactsVault";
import { FeaturedCarousel } from "../components/FeaturedCarousel";
import { BlogFeed } from "../components/BlogFeed";
import { NewsletterPanel } from "../components/NewsletterPanel";
import { getAllPosts } from "../lib/mdx";
interface HomeProps {
  allPosts: any[];
}
export default function Home({ allPosts }: HomeProps) {
  return (
    <>
      <Head>
        <title>PiczaDev | Senior Frontend & Web3 Engineer</title>
        <meta name="description" content="Senior Frontend & Web3 Engineer building high-trust product surfaces, real-time market interfaces, and secure automation with React, TypeScript, Next.js, Node.js, Solana, and TON." />
        <meta
          name="talentapp:project_verification"
          content="1106ca638b22aaf2ac2ffa9b4ae78d01270153c58b62d8df620e1747535e4f261baba9d1380819c014e05ca2b063eb735a985f14ea1206cb7de6bab1d54e57d4"
        />
      </Head>
      <Layout>
        <Hero />
        <ArtifactsVault />
        <FeaturedCarousel />
        <BlogFeed posts={allPosts} />
        <NewsletterPanel />
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "category",
    "excerpt",
    "gradient",
  ]).slice(0, 6);
  return {
    props: {
      allPosts,
    },
  };
}
