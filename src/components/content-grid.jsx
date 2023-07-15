import Link from "next/link";
import Image from "next/image";

export function ContentGridItem({ title, slug, image }) {
  return (
    <div className="flex flex-col gap-2">
      <Link className="no-underline" href={slug}>
        <h4 className="text-yellow-400">{title}</h4>
        <hr className="my-2" />
        <Image
          className="object-cover w-[250px] h-[125px]"
          width="250"
          height="200"
          alt={title}
          src={image}
        />
      </Link>
    </div>
  );
}

export function ContentGrid({ items }) {
  return (
    <div className="grid grid-cols-3 gap-5 items-end">
      {items.map(({ slug, frontmatter }) => (
        <ContentGridItem {...frontmatter} key={slug} slug={slug} />
      ))}
    </div>
  );
}
