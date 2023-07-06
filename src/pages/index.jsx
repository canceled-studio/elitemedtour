import { ContentItem } from "@/components/content-list-item";
import { Section, Header, MDXBody, Body } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";

export default function Home({ page, items }) {
  return (
    <>
      <Section>
        <Header>{page.frontmatter.title}</Header>
        <MDXBody>{page.content}</MDXBody>
      </Section>
      <Section>
        <Header>Главная</Header>
        <Body>
          {items.map(({ slug, frontmatter }) => (
            <ContentItem key={slug} slug={slug} {...frontmatter} />
          ))}
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
