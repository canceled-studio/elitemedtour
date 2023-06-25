import Image from "next/image";

import { Menu } from "@/components/menu";
import { Contacts } from "@/components/contacts";

export function Header() {
  return (
    <header className="col-span-2 flex justify-between">
      <Image
        id="logo"
        width="132"
        height="90"
        src="/img/logo.png"
        alt="Elite Med Tour logo"
      />
      <Contacts />
    </header>
  );
}

export default function Layout({ children }) {
  return (
    <div className="my-5 max-w-5xl container mx-auto grid grid-cols-[1fr_4fr] gap-5">
      <Header />
      <Menu />
      <div id="page-content" className="flex flex-col section">
        {children}
      </div>
    </div>
  );
}
