import { MDXRemote } from "next-mdx-remote";
import { Body, Header, Section } from "@/components/section";
import { getAllContentByType, getSingleContent } from "@/lib/api/content";
import Image from "next/image";

function ClinicLocation({ country, city }) {
  return (
    <table>
      <tbody>
        <tr>
          <th className="pr-4">Страна:</th>
          <td>{country}</td>
        </tr>
        <tr>
          <th>Город:</th>
          <td>{city}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default function Clinic({ page }) {
  const { title, image, city, country } = page.frontmatter;

  return (
    <Section>
      <Header>{title}</Header>
      <Body>
        <Image
          width="300"
          height="270"
          src={image}
          alt={title}
          className="float-left m-4"
        />
        <ClinicLocation city={city} country={country} />
        <MDXRemote {...page.content} />
      </Body>
    </Section>
  );
}

export const getStaticProps = async ({ params }) => {
  const page = await getSingleContent(`clinics/${params.slug.join("/")}`);

  return { props: { page } };
};

export const getStaticPaths = (params) => {
  const allContent = getAllContentByType("clinics", { recursive: true });
  const allSlugs = allContent.map((item) => item.slug);

  return { paths: allSlugs, fallback: false };
};
