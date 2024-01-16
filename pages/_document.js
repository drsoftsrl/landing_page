import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="en" className="h-full w-full scroll-smooth" data-theme="light">
      <Head />

      <body className="h-full w-full m-0">
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
