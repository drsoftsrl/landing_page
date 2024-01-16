"use client";
import { setCookie, getCookie } from "cookies-next";
import { useState, useEffect } from "react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = getCookie("consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    setShowConsent(false);
    setCookie("consent", "true", { maxAge: 60 * 60 * 24 * 365 });
  };

  if (!showConsent) return null;

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 rounded-xl p-4 gap-4 bg-base-content z-20 text-white flex flex-row flex-wrap items-center justify-center w-full lg:w-1/2">
      <p className="text-center">We use cookies to provide a better experience.</p>
      <button className="btn btn-secondary ml-5" onClick={acceptConsent}>
        Accept
      </button>
    </div>
  );
};
