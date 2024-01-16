import React from "react";
import SectionLayout from "@/components/layouts/sectionLayout";
import TextLayout from "@/components/layouts/textLayout";
import BaseLayout from "@/components/layouts/baseLayout";
import PageTitle from "@/components/common/pageTitle";
import { SEO_PAGE_HTTP_PROXY } from "@/projectSettings/seo";
import Cta from "@/components/cta/cta";

const PageHttpProxy = () => {
  return (
    <BaseLayout seo={SEO_PAGE_HTTP_PROXY}>
      <PageTitle title="Anonymous HTTP Proxies" />

      <SectionLayout extraClass="">
        <TextLayout>
          <h2 className="">HTTP Proxy Services</h2>
          <p className="">
            HTTP proxies act as intermediaries for your HTTP requests, providing
            <span className="font-semibold"> enhanced security and anonymity</span>. When you connect to a proxy server,
            you can request a connection, file, or other resource from a different server. The proxy facilitates this
            either by connecting to the specified server or by serving the resource from its cache. Moreover, our
            proxies <span className="font-semibold">change your IP address</span>, making it impossible to trace the
            request back to you.
          </p>
          <p>We offer a range of HTTP proxy options:</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <span className="font-semibold">Shared HTTP Proxies:</span> Cost-effective and suitable for general
              browsing.
            </li>
            <li>
              <span className="font-semibold">Dedicated HTTP Proxies:</span> Exclusive to one user, offering higher
              security and performance.
            </li>
            <li>
              <span className="font-semibold">Dedicated Residential HTTP Proxies:</span> Provide real residential IP
              addresses for the highest level of anonymity.
            </li>
          </ul>
        </TextLayout>
      </SectionLayout>
      <Cta inverted />
    </BaseLayout>
  );
};

export default PageHttpProxy;
