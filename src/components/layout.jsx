import Image from "next/image";
import { Menu } from "@/components/menu";
import { Header } from "@/components/section";

function Icon({ src, alt }) {
  return <Image height="32" width="32" alt={alt} src={src} />;
}

function Contacts() {
  return (
    <div id="contacts" className="flex flex-col gap-2">
      <div id="socials" className="flex gap-2">
        <a href="http://vk.com">
          <Icon alt="vkontakte" src="https://cdn.simpleicons.org/vk/fff" />
        </a>
        <a href="http://fb.com">
          <Icon alt="Facebook" src="https://cdn.simpleicons.org/facebook/fff" />
        </a>
      </div>
      <div className="grid gap-x-3 text-white grid-cols-[1fr_2fr] grid-rows-2">
        <span>Телефон:</span>
        <span id="phone" className="text-right">
          <a href="tel:+41213201690">+41 21 320-16-90</a>
        </span>
        <span>E-mail:</span>
        <span id="email" className="text-right">
          <a href="mailto:info@elitemedtour.ch">info@elitemedtour.ch</a>
        </span>
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className=" my-5 max-w-5xl container mx-auto grid grid-cols-[1fr_4fr] gap-5">
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

      <aside className="col-start-1 section">
        <Header>Меню</Header>
        <Menu />
      </aside>

      <div id="page-content" className="flex flex-col gap-5">
        {children}
      </div>
    </div>
  );
}
