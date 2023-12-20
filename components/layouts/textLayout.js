import Image from "next/image";

export default function TextLayout({ children, showDecor = true }) {
  return (
    <>
      {showDecor && (
        <Image
          src="/images/shapes/shape9.webp"
          alt="shape9"
          className="absolute bw-full h-auto left-0 top-[-96px] hidden md:block -z-1"
          width={301}
          height={1653}
          priority
        />
      )}

      <section className="max-w-6xl mx-auto prose lg:prose-2xl break-words">{children}</section>
    </>
  );
}
