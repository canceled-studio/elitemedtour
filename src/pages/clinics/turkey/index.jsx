import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { ContentListItem } from "@/components/content-list-item";
import { Body, Header, Section } from "@/components/section";

export default function TurkeyClinics({ page, items }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        {items.map(({ slug, frontmatter }) => (
          <ContentListItem key={slug} slug={slug} {...frontmatter} />
        ))}
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
