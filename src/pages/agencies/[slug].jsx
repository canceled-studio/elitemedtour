import { MDXRemote } from "next-mdx-remote";
import { Body, Header, Section } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import Image from "next/image";

export default function Spring({ page }) {
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
  const page = await getSingleContent(`agencies/${params.slug}`);

  return { props: { page } };
};

export const getStaticPaths = (params) => {
  const allContent = getAllContentByType("agencies");
  const allSlugs = allContent.map((item) => item.slug);

  return { paths: allSlugs, fallback: false };
};
