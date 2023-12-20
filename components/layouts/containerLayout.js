export default function ContainerLayout({ children, extraClass = "" }) {
  return <div className={`container mx-auto ${extraClass}`}>{children}</div>;
}
