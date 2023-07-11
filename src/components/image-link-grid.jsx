import Image from "next/image";
import Link from "next/link";

export function ImageLinkGridItem({ image, title, subtitle, link }) {
  return (
    <Link
      className="no-underline flex flex-col items-center text-center"
      href={link}
    >
      <Image
        width="200"
        height="200"
        alt={title}
        src={image}
        className="object-fit mb-1"
      />
      <h4 className="text-black font-bold text-sm px-5">{title}</h4>
      {subtitle && <p className="text-black text-sm px-5">{subtitle}</p>}
      <p
        href={link}
        className="text-link underline text-sm leading-normal px-5"
      >
        {link.replaceAll(/https?:\/\/|\//g, "")}
      </p>
    </Link>
  );
}

export function ImageLinkGrid({ items }) {
  return (
    <div className="grid grid-cols-3 gap-5">
      {items.map(({ slug, frontmatter }) => (
        <ImageLinkGridItem {...frontmatter} key={slug} slug={slug} />
      ))}
    </div>
  );
}
