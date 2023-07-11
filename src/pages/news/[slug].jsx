import { Body, Header, Section } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { MDXRemote } from "next-mdx-remote";

export default function News({ page }) {
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
  const fullContentSlug = `news/${params.slug}`;
  const page = await getSingleContent(fullContentSlug);

  return { props: { page } };
};

export const getStaticPaths = (params) => {
  const allContent = getAllContentByType("news");
  const allSlugs = allContent.map((item) => item.slug);

  return { paths: allSlugs, fallback: false };
};
