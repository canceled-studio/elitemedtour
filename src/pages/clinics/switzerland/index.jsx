import { MDXRemote } from "next-mdx-remote";
import { ContentList } from "@/components/content-list";
import { Section, Header, Body } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";

export default function SwitzerlandClinics({ page, items }) {
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
      page: await getSingleContent("sections/clinics/switzerland/index"),
      items: getAllContentByType("clinics/switzerland"),
    },
  };
}
