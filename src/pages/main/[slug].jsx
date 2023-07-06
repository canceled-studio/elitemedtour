import { Body, Header, Section } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { MDXRemote } from "next-mdx-remote";

export default function Main({ page }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        <MDXRemote {...page.content} />
      </Body>
    </Section>
  );
}

export const getStaticProps = async ({ params }) => {
  const fullContentSlug = `main/${params.slug}`;
  const page = await getSingleContent(fullContentSlug);

  return { props: { page } };
};

export const getStaticPaths = (params) => {
  const allContent = getAllContentByType("main");
  const allSlugs = allContent.map((item) => item.slug);

  return { paths: allSlugs, fallback: false };
};
