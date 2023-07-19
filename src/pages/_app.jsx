import Head from "next/head";
import Layout from "@/components/layout";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const title = `${pageProps?.page?.frontmatter?.title} | Elitemedtour`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
