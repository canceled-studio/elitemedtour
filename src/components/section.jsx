import { MDXRemote } from "next-mdx-remote";

export function Header({ children }) {
  return (
    <div className="flex gap-2 px-3 py-2 font-bold text-white rounded-xl bg-gradient-to-b from-[#d0d0d0] to-[#a19c99] shadow-[1px_2px_5px] shadow-gray-700">
      <Icon />
      <h2>{children}</h2>
    </div>
  );
}

export function Body({ children }) {
  return (
    <article className="p-4 rounded-lg text-justify bg-blue-600/30 shadow-[inset_1px_1px_2px_2px_#3aa8e8,2px_2px_8px_-2px]">
      {children}
    </article>
  );
}

export function Section({ children }) {
  return (
    <section className="flex flex-col gap-3 col-start-2">{children}</section>
  );
}

export function Icon() {
  return (
    <svg
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="500" height="500" rx="75" fill="#008EBB" />
      <rect x="187" y="75" width="125" height="350" rx="24" fill="white" />
      <rect
        x="425"
        y="187"
        width="125"
        height="350"
        rx="24"
        transform="rotate(90 425 187)"
        fill="white"
      />
    </svg>
  );
}
