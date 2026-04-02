import React from "react";
import Head from "next/head";
import { Layout } from "../../components/Layout";
import { GlassCard } from "../../components/GlassCard";
import { getPostBySlug, getAllPosts } from "../../lib/mdx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface PostProps {
  post: {
    title: string;
    date: string;
    category: string;
    slug: string;
    content: string;
    [key: string]: any;
  };
  mdxSource: MDXRemoteSerializeResult;
}

export default function BlogPost({ post, mdxSource }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | PiczaDev</title>
      </Head>
      <Layout>
        <div className="max-w-4xl mx-auto py-24 px-6 md:px-12">
          <GlassCard variant="elevated" className="p-8 md:p-12 mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs font-mono text-accent-cyan/60 uppercase tracking-widest mb-12">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
            
            <div className="prose prose-invert prose-lg prose-p:font-sans prose-p:text-gray-300 prose-headings:font-serif prose-a:text-accent-cyan prose-a:no-underline hover:prose-a:underline max-w-none">
              <MDXRemote {...mdxSource} />
            </div>
          </GlassCard>
        </div>
      </Layout>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'category',
  ]);
  
  const mdxSource = await serialize(post.content || '');

  return {
    props: {
      post,
      mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
