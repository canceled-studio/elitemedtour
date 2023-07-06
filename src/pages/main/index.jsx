import { getAllContentByType } from "@/lib/api/content";
import { ContentListItem } from "@/components/content-list-item";
import { Body, Header, Section } from "@/components/section";

export default function Main({ items }) {
  return (
    <Section>
      <Header>Главная</Header>
      <Body>
        {items.map(({ slug, frontmatter }) => (
          <ContentListItem key={slug} slug={slug} {...frontmatter} />
        ))}
      </Body>
    </Section>
  );
}

export const getStaticProps = () => {
  return { props: { items: getAllContentByType("main") } };
};
