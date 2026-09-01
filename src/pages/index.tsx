import React from "react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { PortalBentoGrid } from "../components/PortalBentoGrid";
import { ShowcaseSection } from "../components/ShowcaseSection";
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
        <title>Yahir Rivera Flores · PiczaDev | Engineering Manager & Web3 Systems Architect</title>
        <meta
          name="description"
          content="Yahir Rivera Flores (PiczaDev) — Hands-on Engineering Manager with 4+ years leading frontend pods, consumer financial trading platforms (Kraken, OKX), TON & Solana protocols, and autonomous AI swarms."
        />
        <meta name="author" content="Yahir Rivera Flores (PiczaDev)" />
        <meta property="og:title" content="Yahir Rivera Flores · PiczaDev | Engineering Manager & Web3 Systems Architect" />
        <meta
          property="og:description"
          content="Leading cross-functional pods delivering high-scale consumer financial systems, low-latency market integrations, and sovereign AI agent workflows."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://piczadev.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@piczadev" />
        <meta name="twitter:creator" content="@piczadev" />
        <meta
          name="talentapp:project_verification"
          content="1106ca638b22aaf2ac2ffa9b4ae78d01270153c58b62d8df620e1747535e4f261baba9d1380819c014e05ca2b063eb735a985f14ea1206cb7de6bab1d54e57d4"
        />
      </Head>
      <Layout>
        <Hero />
        <PortalBentoGrid />
        <ShowcaseSection />
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

