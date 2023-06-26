import { MDXProvider } from "@mdx-js/react";
import Layout from "@/components/layout";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
