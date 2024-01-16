import React from "react";
import SectionLayout from "@/components/layouts/sectionLayout";
import TextLayout from "@/components/layouts/textLayout";
import BaseLayout from "@/components/layouts/baseLayout";
import PageTitle from "@/components/common/pageTitle";
import { SEO_PAGE_VPN_WIREGUARD } from "@/projectSettings/seo";
import Cta from "@/components/cta/cta";

const PageVpnWireguard = () => {
    return (
        <BaseLayout seo={SEO_PAGE_VPN_WIREGUARD}>
            <PageTitle title="Wireguard VPN" />

            <SectionLayout extraClass="">
                <TextLayout>
                    <h2 className="">WireGuard VPN Services</h2>
                    <p className="">
                        WireGuard is a modern, high-performance VPN protocol, known for its
                        simplicity and strong encryption. It provides <span class="font-semibold"> fast, secure, and reliable </span>
                        internet connections. WireGuard is designed to be much more efficient than traditional
                        VPN protocols, making it ideal for both personal and professional use.
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

export default PageVpnWireguard;
