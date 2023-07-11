import { MDXRemote } from "next-mdx-remote";
import { Section, Header, Body } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { ContentGrid } from "@/components/content-grid";

export default function Spas({ page, items }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        <MDXRemote {...page.content} />
      </Body>
      <Body>
        <ContentGrid items={items} />
      </Body>
    </Section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      page: await getSingleContent("sections/spas/index"),
      items: getAllContentByType("spas"),
    },
  };
}
