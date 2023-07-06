import { getAllContentByType } from "@/lib/api/content";
import { ContentList } from "@/components/content-list";
import { Body, Header, Section } from "@/components/section";

export default function Main({ items }) {
  return (
    <Section>
      <Header>Главная</Header>
      <Body>
        <ContentList items={items} />
      </Body>
    </Section>
  );
}

export const getStaticProps = () => {
  return { props: { items: getAllContentByType("main") } };
};
