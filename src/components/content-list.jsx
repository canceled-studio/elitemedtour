import Link from "next/link";
import Image from "next/image";

export function ContentListItem({ title, slug, description, image }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-yellow-400">{title}</h4>
      <div className="flex gap-5">
        <Image
          className="shrink-0 object-cover w-[150px] h-[100px]"
          width="150"
          height="100"
          alt={title}
          src={image}
        />
        <p>{description}</p>
      </div>
      <Link className="self-end" href={slug}>
        Подробнее
      </Link>
    </div>
  );
}

export function ContentList({ items }) {
  return (
    <div className="flex flex-col gap-2">
      {items.map(({ slug, frontmatter }) => (
        <ContentListItem {...frontmatter} key={slug} slug={slug} />
      ))}
    </div>
  );
}
