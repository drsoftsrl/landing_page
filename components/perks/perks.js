import PerksCard from "./perksCard";
import SectionLayout from "@/components/layouts/sectionLayout";
import ContainerLayout from "@/components/layouts/containerLayout";
import SectionTitle from "@/components/common/sectionTitle";
import {
  faUserSecret,
  faLifeRing,
  faGlobe,
  faFighterJet,
  faSignal,
  faTerminal,
  faPiggyBank,
  faUsers,
  faRetweet,
  faCrosshairs,
  faCircle,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function Perks() {
  return (
    <SectionLayout extraClass="bg-gradient2 text-neutral-content">
      <SectionTitle
        title="Unique proxy features"
        subtitle="Our infrastructure is unique, battle-tested and carefully monitored by supervisors 24/7. There is no other proxy provider even close to operating at the same level and standards that we do."
      />

      <ContainerLayout extraClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PerksCard
          title="Fast HTTP Proxies and SOCKS5"
          description="All our proxies are carefully set and monitored in
                    order to ensure they are 100% anonymous and without any sort of ip or dns leaks."
          icon={faUserSecret}
        />

        <PerksCard
          title="24/7 Heroic support"
          description="Sometimes the kind of support you offer means more than your product and we
                    know that. We're always available and you can give us a try."
          icon={faLifeRing}
        />

        <PerksCard
          title="Multiple datacenters"
          description="We're offering more than 100 locations for our proxies and we constantly refresh our
                    list to add more locations from all over the world."
          icon={faGlobe}
        />

        <PerksCard
          title="Instant activation"
          description="Your proxies are activated instantly once your payment enters our system and
                    we really stand behind this word which is not just for marketing."
          icon={faFighterJet}
        />

        <PerksCard
          title="High speed connections"
          description="All our servers are attached to 1Gbps and 10Gbps connections and we constantly
                    update our networking stacks to maintain a top position in terms of speed."
          icon={faSignal}
        />

        <PerksCard
          title="Powerful automation"
          description="From status checkers to supervisors and service testers we have it all.
                    Our stack is fully automated and self-healing without any intervention."
          icon={faTerminal}
        />

        <PerksCard
          title="Affordable pricing"
          description="Given the performance and services we provide we can proudly say that our prices are very
                    small and fair. Check out our pricing page and we promise you won't be disappointed."
          icon={faPiggyBank}
        />

        <PerksCard
          title="Dual authentication"
          description="Don't wanna use a username and password combo to authenticate to your proxies?
                    No problem, you can use your ip address instead."
          icon={faUsers}
        />

        <PerksCard
          title="Monthly list refresh"
          description="Each month you can replace your proxies without our intervention.
                    Our control-panel allows you to achieve such advanced operations."
          icon={faRetweet}
        />

        <PerksCard
          title="Unlimited bandwidth"
          description="We're not placing any sorts of limits on your bandwith so you can enjoy really fast
                    and responsive proxies for your applications."
          icon={faChartLine}
        />

        <PerksCard
          title="Pick your proxy"
          description="We don't sell you packages. You can pick each proxy IP individually by subnet, city,
                    state or country. You're in full control."
          icon={faCrosshairs}
        />

        <PerksCard
          title="No leaks"
          description="Our automation suite constantly monitors and checks the proxies against IP leaks or
                    DNS leaks to ensure elite anonymity for our customers."
          icon={faCircle}
        />
      </ContainerLayout>
    </SectionLayout>
  );
}
