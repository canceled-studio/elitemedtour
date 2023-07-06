import { MDXRemote } from "next-mdx-remote";
import { ContentListItem } from "@/components/content-list-item";
import { Section, Header, Body } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";

export default function SwitzerlandClinics({ page, items }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        <MDXRemote {...page.content} />
      </Body>
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
      page: await getSingleContent("sections/clinics/switzerland/index"),
      items: getAllContentByType("clinics/switzerland"),
    },
  };
}
