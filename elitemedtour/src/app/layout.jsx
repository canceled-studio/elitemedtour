import "./globals.css";
import Image from "next/image";

export const metadata = { title: "Elite Med Tour" };

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body class="bg-blue-500">
        <div
          id="page"
          class="my-5 max-w-5xl container mx-auto grid grid-cols-[1fr_4fr] gap-5"
        >
          <header class="col-span-2 flex justify-between">
            <Image
              id="logo"
              src="/img/logo.png"
              width="132"
              height="90"
              alt="Elite Med Tour logo"
            />
            <div id="contacts" class="flex flex-col gap-2">
              <div id="socials" class="flex gap-2">
                <a href="http://vk.com">
                  <Image
                    height="32"
                    width="32"
                    src="https://cdn.simpleicons.org/vk/fff"
                    alt=""
                  />
                </a>
                <a href="http://fb.com">
                  <Image
                    height="32"
                    width="32"
                    src="https://cdn.simpleicons.org/facebook/fff"
                    alt=""
                  />
                </a>
              </div>
              <div class="grid gap-x-3 text-white grid-cols-[1fr_2fr] grid-rows-2">
                <span>Телефон:</span>
                <span id="phone" class="text-right">
                  <a href="tel:+41213201690">+41 21 320-16-90</a>
                </span>
                <span>E-mail:</span>
                <span id="email" class="text-right">
                  <a href="mailto:info@elitemedtour.ch">info@elitemedtour.ch</a>
                </span>
              </div>
            </div>
          </header>
          <aside class="col-start-1 section">
            <h2 class="section-header">Меню</h2>
            {/* <nav class="py-4 px-2 section-body">
                <ul class="text-center flex flex-col gap-2">
                    {% for item in menu %}
                        <li class="w-full">
                            <a class="nav-item {% if item.link === page.url %} nav-item-selected {% endif %}" href="{{item.link}}">{{item.title}}</a>
                        </li>
                    {% endfor %}
                </ul>
            </nav> */}
          </aside>
          <div id="page-content" class="flex flex-col gap-5">
            <section class="col-start-2 section">
              {/* {% if section.title %}
                    <h2 class="section-header">{{ section.title }}</h2>
                {% endif %}
                {% if content %}
                    <article class="p-4 text-justify section-body">
                        {{ content | safe }}
                    </article>
                {% endif %} */}
            </section>
          </div>
        </div>
      </body>
    </html>
  );
}
