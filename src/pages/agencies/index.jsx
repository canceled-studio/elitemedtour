import { MDXRemote } from "next-mdx-remote";
import { Section, Header, Body } from "@/components/section";
import { getSingleContent } from "@/lib/api/content";

export default function Springs({ page, items }) {
  return (
    <Section>
      <Header>{page.frontmatter.title}</Header>
      <Body>
        <MDXRemote {...page.content} />
      </Body>
    </Section>
  );
}

export async function getStaticProps() {
  return {
    props: {
      page: await getSingleContent("sections/agencies/index"),
    },
  };
}
