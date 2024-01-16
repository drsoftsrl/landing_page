export default function SectionLayout({ children, extraClass = "", id = "" }) {
  return (
    <div className={`relative flex flex-col justify-center items-center px-8 py-24 ${extraClass}`} id={id}>{children}</div>
  );
}
