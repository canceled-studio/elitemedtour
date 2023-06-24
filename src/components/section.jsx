export function Header({ children }) {
  return (
    <h2 className="px-3 py-2 font-bold text-white rounded-xl bg-gray-300 shadow-[1px_2px_5px] shadow-gray-700">
      {children}
    </h2>
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
