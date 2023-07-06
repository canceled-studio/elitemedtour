import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { ContentList } from "@/components/content-list";
import { Body, Header, Section } from "@/components/section";

export default function TurkeyClinics({ page, items }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        <ContentList items={items} />
      </Body>
    </Section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      page: await getSingleContent("sections/clinics/turkey/index"),
      items: getAllContentByType("clinics/turkey"),
    },
  };
}
