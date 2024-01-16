import React from "react";
import SectionLayout from "@/components/layouts/sectionLayout";
import TextLayout from "@/components/layouts/textLayout";
import BaseLayout from "@/components/layouts/baseLayout";
import PageTitle from "@/components/common/pageTitle";
import { getRestrictions } from "@/lib/restrictions";
import { SEO_PAGE_RESTRICTIONS } from "@/projectSettings/seo";
import { SITE_NAME } from "@/projectSettings/website";
import Cta from "@/components/cta/cta";

const PageRestrictions = ({ restrictions }) => {
  return (
    <BaseLayout seo={SEO_PAGE_RESTRICTIONS}>
      <PageTitle title="Restrictions" subTitle={SITE_NAME} />

      <SectionLayout>
        <TextLayout>
          <p>
            When using our services, the following restrictions apply:
            <br />
          </p>

          <ul className="text-center list-none">
            {restrictions.map((restriction, i) => (
              <li key={i} className="text">
                {restriction}
              </li>
            ))}
          </ul>
        </TextLayout>
      </SectionLayout>

      <Cta inverted />
    </BaseLayout>
  );
};

export default PageRestrictions;

export async function getStaticProps() {
  const restrictions = await getRestrictions();
  return {
    props: {
      restrictions
    },
    revalidate: 60 * 60 * 24 * 7
  };
}
