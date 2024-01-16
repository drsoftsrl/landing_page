import "@/styles/globals.css";
import React from "react";

import { Lato } from "next/font/google";
import { CookieConsent } from "@/components/cookieConsent";
import Script from "next/script";
import { GOOGLE_TRACKING_ID } from "@/projectSettings/website";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato"
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-lato: ${lato.style.fontFamily};
        }
      `}</style>
      <CookieConsent />
      <Component {...pageProps} />

      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}`} />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_TRACKING_ID}', {
                page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  );
}

export default MyApp;
