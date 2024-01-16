import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {LINK_HOME, LINK_LOCATIONS, LINK_PRICING, LINK_SERVICES} from "@/utils/constants";
import ButtonMain from "@/components/common/buttonMain";

export default function Navbar({}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundClass = isScrolled ? "bg-altBase" : "bg-transparent";

  return (
    <div className={`navbar fixed z-50 transition-colors duration-300 top-0 ${backgroundClass}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link href={LINK_PRICING.url}>{LINK_PRICING.name}</Link>
            </li>
            <li>
              <Link href={LINK_LOCATIONS.url}>{LINK_LOCATIONS.name}</Link>
            </li>
            <li>
              <a>Services</a>
              <ul className="p-2">
                {
                  LINK_SERVICES.map((lnk, i) => (
                      <li key={i}>
                        <Link href={lnk.url}>{lnk.name}</Link>
                      </li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost w-fit p-0 h-fit" href={LINK_HOME.url}>
          <Image src="/logo.webp" alt="logo" width={300} height={70} priority />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-neutral-content">
          <li>
            <Link href={LINK_PRICING.url}>{LINK_PRICING.name}</Link>
          </li>
          <li>
            <Link href={LINK_LOCATIONS.url}>{LINK_LOCATIONS.name}</Link>
          </li>
          <li>
            <details>
              <summary>Serices</summary>
              <ul className="p-2 text-base-content">
                {
                  LINK_SERVICES.map((lnk, i) => (
                      <li key={i}>
                        <Link href={lnk.url}>{lnk.name}</Link>
                      </li>
                  ))
                }
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ButtonMain text="Buy Now" buttonClass="btn-secondary" />
      </div>
    </div>
  );
}
