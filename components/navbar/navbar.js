import { useEffect, useState } from "react";
import ButtonMain from "@/components/common/buttonMain";
import Link from "next/link";
import Image from "next/image";
import {LINK_DATACENTERS, LINK_FEATURES, LINK_HOME, LINK_PRICING, LINK_SUPPORT} from "@/utils/constants";

export default function Navbar({ }) {
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
        <div className="dropdown text-neutral">
          <label tabIndex="0" className="btn btn-ghost lg:hidden text-neutral-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>

          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 z-50 p-2 shadow bg-altBase rounded-box w-52 text-sm"
          >
            <li>
              <Link
                href={LINK_PRICING.url}
                className="text-neutral-content"
              >
                {LINK_PRICING.name}
              </Link>
            </li>

            <li>
              <Link
                href={LINK_DATACENTERS.url}
                className="text-neutral-content"
              >
                {LINK_DATACENTERS.name}
              </Link>
            </li>

            <li>
              <Link
                href={LINK_FEATURES.url}
                className="text-neutral-content"
              >
                {LINK_FEATURES.name}
              </Link>
            </li>

            <li>
              <Link
                href={LINK_SUPPORT.url}
                className="text-neutral-content"
              >
                {LINK_SUPPORT.name}
              </Link>
            </li>

          </ul>
        </div>

        <Link className="btn btn-ghost w-fit p-0 h-fit" href={LINK_HOME.url}>
          <Image src="/logo.webp" alt="logo" width={300} height={70} priority />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex text-neutral">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href={LINK_PRICING.url}
              className="text-neutral-content"
            >
              {LINK_PRICING.name}
            </Link>
          </li>

          <li>
            <Link
              href={LINK_DATACENTERS.url}
              className="text-neutral-content"
            >
              {LINK_DATACENTERS.name}
            </Link>
          </li>

          <li>
            <Link
              href={LINK_FEATURES.url}
              className="text-neutral-content"
            >
              {LINK_FEATURES.name}
            </Link>
          </li>

          <li>
            <Link
              href={LINK_SUPPORT.url}
              className="text-neutral-content"
            >
              {LINK_SUPPORT.name}
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end lg:w-1/3">
        <ButtonMain text="Buy Now" />
      </div>
    </div>
  );
}
