import React from "react";
import SectionLayout from "@/components/layouts/sectionLayout";
import TextLayout from "@/components/layouts/textLayout";
import BaseLayout from "@/components/layouts/baseLayout";
import PageTitle from "@/components/common/pageTitle";
import { SEO_PAGE_SHADOWSOCKS } from "@/projectSettings/seo";
import Cta from "@/components/cta/cta";

const PageShadowSocksProxy = () => {
  return (
    <BaseLayout seo={SEO_PAGE_SHADOWSOCKS}>
      <PageTitle title="ShadowSocks Proxies" />

      <SectionLayout extraClass="">
        <TextLayout>
          <h2 className="">Shadowsocks Proxy Services</h2>
          <p className="">
            Shadowsocks is an advanced proxy that operates at the TCP level, designed to provide{" "}
            <span class="font-semibold"> secure and private internet access</span>. It's particularly effective in
            bypassing internet censorship and ensuring privacy. Unlike traditional proxies, Shadowsocks can handle both
            HTTP and HTTPS traffic, offering superior versatility.
          </p>
          <p>We offer the following Shadowsocks proxy options:</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Dedicated Shadowsocks Proxies:</span> Exclusively assigned to one user,
              ensuring top-notch security and high performance.
            </li>
            <li>
              <span className="font-semibold">Dedicated Residential Shadowsocks Proxies:</span> Provide genuine
              residential IP addresses for the utmost in anonymity and reliability, particularly suited for sensitive
              operations.
            </li>
          </ul>
        </TextLayout>
      </SectionLayout>
      <Cta inverted />
    </BaseLayout>
  );
};

export default PageShadowSocksProxy;
