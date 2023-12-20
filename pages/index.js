import BaseLayout from "@/components/layouts/baseLayout";
import {PAGE_HOME_SEO} from "@/projectSettings/seo";
import Hero from "@/components/hero/hero";
import {getPricing} from "@/lib/pricing";
import {getIsps} from "@/lib/categories";


export default function PageHome({ pricesData, isps }) {
  return (
    <BaseLayout seo={PAGE_HOME_SEO}>
      <Hero minPrice={pricesData.prices.shared_proxy.price} />
      <div
      className="h-[2000px] w-full"
      ></div>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const pricesData = await getPricing();
  const isps = await getIsps();

  return {
    props: {
      pricesData,
      isps,
    },
    revalidate: 60 * 60 * 24 * 7
  };
}
