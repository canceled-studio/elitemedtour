import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { Body, Header, Section } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";

export default function Services({ page }) {
  const { title, image } = page.frontmatter;

  return (
    <Section>
      <Header>{title}</Header>
      <Body>
        <Image width="1270" height="270" src={image} alt={title} />
        <hr />
        <MDXRemote {...page.content} />
      </Body>
    </Section>
  );
}

export const getStaticProps = async ({ params }) => {
  const fullContentSlug = `services/${params.slug}`;
  const page = await getSingleContent(fullContentSlug);

  return { props: { page } };
};

export const getStaticPaths = (params) => {
  const allContent = getAllContentByType("services");
  const allSlugs = allContent.map((item) => item.slug);

  return { paths: allSlugs, fallback: false };
};
