import React from "react";

export default function SectionTitle({ title, subtitle, useH1 }) {
  const Heading = useH1 ? "h1" : "h2";

  return (
    <div className="flex flex-col justify-center items-center text-center mb-24">
      <Heading>{title}</Heading>

      <p className="w-3/4 text-center">{subtitle}</p>
    </div>
  );
}
