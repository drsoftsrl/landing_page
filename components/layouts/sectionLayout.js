export default function SectionLayout({ children, mb = 24, extraClass = "" }) {
  return (
    <div className={`relative flex flex-col justify-center items-center px-8 mb-${mb} ${extraClass}`}>
      {children}
    </div>
  );
}
