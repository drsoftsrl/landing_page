import { SITE_NAME } from "@/projectSettings/website";
import Image from "next/image";
import Link from "next/link";
import {
  LINK_PRIVACY_POLICY,
  LINK_REFUNDS,
  LINK_RESTRICTIONS,
  LINK_SERVICES_HTTP_PROXY,
  LINK_SERVICES_SHADOWSOCKS_PROXY,
  LINK_SERVICES_SOCKS5_PROXY,
  LINK_SERVICES_VPN_WIREGUARD,
  LINK_TERMS_OF_SERVICE
} from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-gradient3 text-neutral-content">
      <aside>
        <Image src="/logo.webp" alt="logo" width={300} height={70} />
        <p className="text-2xl">{SITE_NAME}</p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <Link href={LINK_SERVICES_HTTP_PROXY.url} className="link link-hover">
          {LINK_SERVICES_HTTP_PROXY.name}
        </Link>
        <Link href={LINK_SERVICES_SOCKS5_PROXY.url} className="link link-hover">
          {LINK_SERVICES_SOCKS5_PROXY.name}
        </Link>
        <Link href={LINK_SERVICES_SHADOWSOCKS_PROXY.url} className="link link-hover">
          {LINK_SERVICES_SHADOWSOCKS_PROXY.name}
        </Link>
        <Link href={LINK_SERVICES_VPN_WIREGUARD.url} className="link link-hover">
          {LINK_SERVICES_VPN_WIREGUARD.name}
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Resources</header>
        <Link href={LINK_REFUNDS.url} className="link link-hover">
          {LINK_REFUNDS.name}
        </Link>
        <Link href={LINK_RESTRICTIONS.url} className="link link-hover">
          {LINK_RESTRICTIONS.name}
        </Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <Link href={LINK_PRIVACY_POLICY.url} className="link link-hover">
          {LINK_PRIVACY_POLICY.name}
        </Link>
        <Link href={LINK_TERMS_OF_SERVICE.url} className="link link-hover">
          {LINK_TERMS_OF_SERVICE.name}
        </Link>
      </nav>
    </footer>
  );
}
