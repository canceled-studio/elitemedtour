import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import { Body, Header, Section } from "@/components/section";
import { ImageLinkGrid } from "@/components/image-link-grid";

export default function Partners({ page, items }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        <ImageLinkGrid items={items} />
      </Body>
    </Section>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      page: await getSingleContent("sections/partners/index"),
      items: getAllContentByType("partners"),
    },
  };
};
