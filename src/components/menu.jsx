import Link from "next/link";

import { Header } from "@/components/section";
import menuItems from "@/_content/menu.json";
import { useRouter } from "next/router";

export function MenuItem({ title, link, selected }) {
  const common =
    "px-1 py-2 text-white no-underline flex justify-center text-sm";
  const hover = "hover:bg-yellow-500 hover:shadow-yellow-200";

  return (
    <li>
      <Link
        href={link}
        className={`${common} ${
          selected ? "bg-gray-400 shadow-gray-300" : ""
        } shadow-[inset_4px_4px_8px_0px,inset_-0_-1px_2px_2px] shadow-sky-400 rounded-2xl ${hover}`}
      >
        {title}
      </Link>
    </li>
  );
}

export function MenuItemList() {
  const { asPath } = useRouter();

  return (
    <nav className="py-4 px-2 section-body">
      <ul className="text-center flex flex-col gap-2">
        {menuItems.map(({ title, link }) => (
          <MenuItem
            key={link}
            link={link}
            title={title}
            selected={
              link.length === 1 ? link === asPath : asPath.startsWith(link)
            }
          />
        ))}
      </ul>
    </nav>
  );
}

export function Menu() {
  return (
    <aside className="col-start-1 section">
      <Header>Меню</Header>
      <MenuItemList />
    </aside>
  );
}
