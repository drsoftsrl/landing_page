import React from "react";
import SectionLayout from "@/components/layouts/sectionLayout";
import TextLayout from "@/components/layouts/textLayout";
import BaseLayout from "@/components/layouts/baseLayout";
import PageTitle from "@/components/common/pageTitle";
import { SEO_PAGE_SOCKS5_PROXY } from "@/projectSettings/seo";
import Cta from "@/components/cta/cta";

const PageSocks5Proxy = () => {
  return (
    <BaseLayout seo={SEO_PAGE_SOCKS5_PROXY}>
      <PageTitle title="SOCKSv5 Proxies" />

      <SectionLayout extraClass="">
        <TextLayout>
          <h2 className="">SOCKSv5 Proxy Services</h2>
          <p className="">
            A SOCKSv5 proxy serves as an intermediary for your HTTP requests, providing{" "}
            <span class="font-semibold"> security and anonymity</span>. When you connect to the proxy server, you can
            request a connection, file, or other resource from a different server. Unlike HTTP proxies, the{" "}
            <span class="font-semibold"> SOCKS proxy is more versatile</span>, supporting any protocol or port, while
            HTTP proxies are limited to HTTP traffic.
          </p>
          <p>We offer a range of SOCKSv5 proxy options:</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Shared SOCKSv5 Proxies:</span> Suitable for general use, shared among
              multiple users.
            </li>
            <li>
              <span className="font-semibold">Dedicated SOCKSv5 Proxies:</span> Exclusive to one user, offering enhanced
              security and performance.
            </li>
            <li>
              <span className="font-semibold">Dedicated Residential SOCKSv5 Proxies:</span> Provide real residential IP
              addresses, ideal for high anonymity needs.
            </li>
          </ul>
        </TextLayout>
      </SectionLayout>
      <Cta inverted />
    </BaseLayout>
  );
};

export default PageSocks5Proxy;
