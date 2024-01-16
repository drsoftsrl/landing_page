export default function TextLayout({ children }) {
  return (
    <>
      <section className="max-w-6xl mx-auto prose lg:prose-2xl break-words">{children}</section>
    </>
  );
}
