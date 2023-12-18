import { MDXRemote } from "next-mdx-remote";
import { ContentList } from "@/components/content-list";
import { Body, Header, Section } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";

export default function Main({ page, items }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        <MDXRemote {...page.content} />
      </Body>
      <Body>
        <ContentList items={items} />
      </Body>
    </Section>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      page: await getSingleContent("sections/services/index"),
      items: getAllContentByType("services"),
    },
  };
};
