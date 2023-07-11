import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { ContentList } from "@/components/content-list";
import { Body, Header, Section } from "@/components/section";

export default function Main({ page, items }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        <ContentList items={items} />
      </Body>
    </Section>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      page: await getSingleContent("sections/main/index"),
      items: getAllContentByType("main"),
    },
  };
};
