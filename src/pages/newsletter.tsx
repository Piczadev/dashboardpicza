import React from "react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { NewsletterPanel } from "../components/NewsletterPanel";

export default function NewsletterPage() {
  return (
    <>
      <Head>
        <title>Newsletter & Web3 Connections | PiczaDev</title>
      </Head>
      <Layout>
        <div className="pt-24 pb-12">
          <NewsletterPanel />
        </div>
      </Layout>
    </>
  );
}
