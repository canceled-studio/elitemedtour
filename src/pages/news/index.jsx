import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { ContentList } from "@/components/content-list";
import { Body, Header, Section } from "@/components/section";

export default function News({ page, items }) {
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
      page: await getSingleContent("sections/news/index"),
      items: getAllContentByType("news"),
    },
  };
};
