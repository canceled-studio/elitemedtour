import Link from "next/link";
import menuItems from "@/content/menu.json";

export function MenuItem({ title, link }) {
  const common =
    "px-1 py-2 text-white no-underline flex justify-center text-sm";
  const hover = "hover:bg-yellow-500 hover:shadow-yellow-200";
  const selected = "bg-gray-400 shadow-gray-300";

  return (
    <li>
      <Link
        href={link}
        className={`${common} shadow-[inset_4px_4px_8px_0px,inset_-0_-1px_2px_2px] shadow-sky-400 rounded-2xl ${hover}`}
      >
        {title}
      </Link>
    </li>
  );
}

export function Menu() {
  return (
    <nav className="py-4 px-2 section-body">
      <ul className="text-center flex flex-col gap-2">
        {menuItems.map(({ title, link }) => (
          <MenuItem key={link} title={title} link={link} />
        ))}
      </ul>
    </nav>
  );
}
