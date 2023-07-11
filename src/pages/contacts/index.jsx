import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { ContentList } from "@/components/content-list";
import { Body, Header, Section } from "@/components/section";
import { MDXRemote } from "next-mdx-remote";

export default function Main({ page, items }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        <MDXRemote {...page.content} />
      </Body>
    </Section>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      page: await getSingleContent("sections/contacts/index"),
    },
  };
};
