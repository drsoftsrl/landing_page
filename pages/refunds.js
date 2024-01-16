import React from "react";
import SectionLayout from "@/components/layouts/sectionLayout";
import TextLayout from "@/components/layouts/textLayout";
import BaseLayout from "@/components/layouts/baseLayout";
import PageTitle from "@/components/common/pageTitle";
import { SEO_PAGE_REFUNDS } from "@/projectSettings/seo";
import { SITE_NAME } from "@/projectSettings/website";
import Cta from "@/components/cta/cta";

const PageRefunds = () => {
  return (
    <BaseLayout seo={SEO_PAGE_REFUNDS}>
      <PageTitle title="Refunds" subTitle={SITE_NAME} />

      <SectionLayout>
        <TextLayout>
          <div id="refunds">
            Since our website is offering intangible goods refunds are honored for the following reasons:
            <br />
            <br />*{" "}
            <b>
              non-delivery of the product: in case we fail to deliver the purchased goods you are entitled for a full
              refund
            </b>{" "}
            <br />*{" "}
            <b>
              service issues: in case our service is not functioning as advertised you are entitled for a full refund
            </b>
            <br />
            <br />
            Please note that after purchase you have 24h to test your proxies and VPNs. In this time frame you can ask
            for replacement or refunds by opening a support ticket inside your account.
            <br />
            <br />
            Our Technical Support Team is always eager to assist you and deliver highly professional support in a timely
            manner.
          </div>
        </TextLayout>
      </SectionLayout>
      <Cta inverted />
    </BaseLayout>
  );
};

export default PageRefunds;
