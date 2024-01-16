import BaseLayout from "@/components/layouts/baseLayout";
import { SEO_PAGE_HOME_SEO } from "@/projectSettings/seo";
import Hero from "@/components/hero/hero";
import { getPricing } from "@/lib/pricing";
import { getIsps } from "@/lib/categories";
import Pricing from "@/components/pricing/pricing";
import Perks from "@/components/perks/perks";
import Locations from "@/components/locations/locations";
import { getLocations } from "@/lib/locations";
import Support from "@/components/support/support";
import Cta from "@/components/cta/cta";

export default function PageHome({ pricesData, isps, locations }) {
  return (
    <BaseLayout seo={SEO_PAGE_HOME_SEO}>
      <Hero minPrice={pricesData.prices.shared_proxy.price} />
      <Pricing
        title="Lowest prices in the industry"
        description="Our prices have always been competitive and we plan on keeping them that way. On top of that, we always have discounts based on quantity or billing period so make sure you play with our pricing calculator below to estimate your expenses."
        pricesData={pricesData}
        isps={isps}
      />
      <Perks />
      <Locations
        title="Global Datacenter Coverage"
        description="Our datacenters are spread across the globe and we're constantly refreshing our lists to ensure a rich set of countries and locations that you can chose from."
        locations={locations}
      />
      <Support
        title="Support"
        description="Contact us for any questions you have, or open a support ticket inside your account."
      />
      <Cta title="Buy Proxies now" description="HTTP Proxies or SOCKS, Shared or Dedicated, we have them all." />
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const pricesData = await getPricing();
  const isps = await getIsps();
  const locations = await getLocations();

  return {
    props: {
      pricesData,
      isps,
      locations
    },
    revalidate: 60 * 60 * 24
  };
}
