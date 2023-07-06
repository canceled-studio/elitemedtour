import { ContentList } from "@/components/content-list";
import { Section, Header, Body } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { MDXRemote } from "next-mdx-remote";

export default function Home({ page, items }) {
  return (
    <>
      <Section>
        <Header>{page.frontmatter.title}</Header>
        <Body>
          <MDXRemote {...page.content} />
        </Body>
      </Section>
      <Section>
        <Header>Главная</Header>
        <Body>
          <ContentList items={items} />
        </Body>
      </Section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      page: await getSingleContent("sections/index"),
      items: getAllContentByType("main"),
    },
  };
}
