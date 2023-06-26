import { Body, Header, MDXBody, Section } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";

export default function Main({ page }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <MDXBody>{page.content}</MDXBody>
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
