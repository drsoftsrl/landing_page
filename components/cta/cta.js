import SectionTitle from "@/components/common/sectionTitle";
import ContainerLayout from "@/components/layouts/containerLayout";
import SectionLayout from "@/components/layouts/sectionLayout";
import ButtonMain from "@/components/common/buttonMain";

export default function Cta({ title, description, inverted }) {
  let extraClass = "";
  if (inverted) {
    extraClass = "bg-gradient2 text-neutral-content";
  }
  return (
    <SectionLayout extraClass={extraClass}>
      <SectionTitle
        title={title || "Buy Proxies now"}
        subtitle={description || "HTTP Proxies or SOCKS, Shared or Dedicated, Shadowsocks, or Wireguard VPN. We have them all."}
      />

      <ContainerLayout>
        <div className="flex justify-center">
          <ButtonMain text="Order Now" buttonClass="btn-secondary" />
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
