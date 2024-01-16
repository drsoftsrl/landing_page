import {BASE_DOMAIN} from "@/projectSettings/website";

export const BASE_SITE_URL = `https://${BASE_DOMAIN}`;
export const BACKEND_URL = `https://ipn.${BASE_DOMAIN}`;
export const DASHBOARD_URL = `https://myaccount.${BASE_DOMAIN}`;
export const SUPPORT_URL = `${BACKEND_URL}/support/`;


export const LINK_HOME = {
  url: "/",
  name: "Home"
}

export const LINK_PRICING = {
  url: "/#pricing",
  name: "Pricing"
}

export const LINK_LOCATIONS = {
  url: "/#locations",
  name: "Locations"
}


export const LINK_REFUNDS = {
  url: "/refunds/",
  name: "Refunds"
}

export const LINK_RESTRICTIONS = {
  url: "/restrictions/",
  name: "Restrictions"
}

export const LINK_PRIVACY_POLICY = {
  url: "/privacy-policy/",
  name: "Privacy Policy"
}

export const LINK_TERMS_OF_SERVICE = {
  url: "/terms-of-service/",
  name: "Terms Of Service"
}

export const LINK_SERVICES_HTTP_PROXY = {
  url: "/services/http-proxy/",
  name: "HTTP Proxy"
}

export const LINK_SERVICES_SOCKS5_PROXY = {
  url: "/services/socks5-proxy/",
  name: "SOCKSv5 Proxy"
}

export const LINK_SERVICES_SHADOWSOCKS_PROXY = {
  url: "/services/shadowsocks-proxy/",
  name: "ShadowSocks Proxy"
}

export const LINK_SERVICES_VPN_WIREGUARD = {
  url: "/services/vpn-wireguard/",
  name: "VPN Wireguard"
}

export const LINK_SERVICES= [
  LINK_SERVICES_HTTP_PROXY,
  LINK_SERVICES_SOCKS5_PROXY,
  LINK_SERVICES_SHADOWSOCKS_PROXY,
  LINK_SERVICES_VPN_WIREGUARD
];

// Pricing & Locations
export const TAB_STATIC_IP = 'Static IP';
export const TAB_ROTATING_IP = 'Rotating IP';

export const TABS_TYPE = [
  TAB_STATIC_IP,
  TAB_ROTATING_IP
]


export const SUB_TAB_DATACENTER = 'Datacenter';
export const SUB_TAB_RESIDENTIAL = 'Residential';

export const SUB_TAB_TYPES = [
  SUB_TAB_DATACENTER,
  SUB_TAB_RESIDENTIAL
]

export const PRICING_RESIDENTIAL_SERVICES = {
  proxy: "HTTP Proxy",
  socks: "SOCKS5 Proxy",
  shadowsocks: "ShadowSocks",
  vpn_wireguard: "Wireguard VPN"
};


export const PRICING_DATACENTER_SERVICES = {
  proxy: "HTTP Proxy",
  shared_proxy: "Shared HTTP Proxy",
  socks: "SOCKS5 Proxy",
  shared_socks: "Shared SOCKS5 Proxy",
  shadowsocks: "ShadowSocks",
  dns_proxy: "DNS Proxy",
  vpn_wireguard: "Wireguard VPN"
};

export const PRICING_ROTATING_SERVICES = {
  rotating_datacenter_proxy: "Datacenter HTTP Proxy",
  rotating_residential_proxy: "Residential HTTP Proxy",

};

export const PRICING_SERVICES = {
  [TAB_STATIC_IP]: {
    [SUB_TAB_DATACENTER]: PRICING_DATACENTER_SERVICES,
    [SUB_TAB_RESIDENTIAL]: PRICING_RESIDENTIAL_SERVICES,
  },
  [TAB_ROTATING_IP]: {}
};
