import React from "react";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { FeaturedCarousel } from "../components/FeaturedCarousel";

export default function DestacadosPage() {
  return (
    <>
      <Head>
        <title>Artículos Destacados | PiczaDev</title>
      </Head>
      <Layout>
        <div className="pt-24 pb-12">
          <FeaturedCarousel />
        </div>
      </Layout>
    </>
  );
}
