import Image from "next/image";
import socials from "@/_content/socials.json";
import contacts from "@/_content/contacts.json";

export function SocialIcon({ href, src, alt }) {
  return (
    <a href={href}>
      <Image height="32" width="32" alt={alt} src={src} />
    </a>
  );
}

export function SocialList() {
  return (
    <div id="socials" className="flex gap-2">
      {socials.map((contact) => (
        <SocialIcon key={contact.alt} {...contact} />
      ))}
    </div>
  );
}

export function Contact({ id, title, href, value }) {
  return (
    <>
      <span>{title}:</span>
      <span id={id} className="text-right">
        <a href={href}>{value}</a>
      </span>
    </>
  );
}

export function ContactList() {
  return (
    <div className="grid gap-x-3 text-white grid-cols-[1fr_2fr] grid-rows-2">
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export function Contacts() {
  return (
    <div id="contacts" className="flex flex-col gap-2">
      <SocialList />
      <ContactList />
    </div>
  );
}
