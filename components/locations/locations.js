import React from "react";

import SectionTitle from "@/components/common/sectionTitle";
import ContainerLayout from "@/components/layouts/containerLayout";
import SectionLayout from "@/components/layouts/sectionLayout";
import {
  SUB_TAB_DATACENTER,
  SUB_TAB_RESIDENTIAL,
  SUB_TAB_TYPES,
  TAB_ROTATING_IP,
  TAB_STATIC_IP,
  TABS_TYPE
} from "@/utils/constants";
import { Fragment, useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import WorldMap from "@/utils/world-50m.json";
import { ShadeColor } from "@/utils/functions";
import { Primary } from "@/projectSettings/colors";
import uniq from "lodash/uniq";

const setCountries = (locations) => {
  let countries = [];
  for (let continent in locations) {
    if (locations.hasOwnProperty(continent)) {
      let k = locations[continent].countries;

      for (let country in k) {
        if (k.hasOwnProperty(country)) {
          const countryName = k[country].name;
          const countryIso = k[country].iso_3166;

          let j = k[country].states;

          let services = [];
          let hasResidential = false;
          let hasDatacenter = false;

          for (let state in j) {
            if (j.hasOwnProperty(state)) {
              let x = j[state].cities;

              for (let city in x) {
                if (x.hasOwnProperty(city)) {
                  let s = x[city].services;
                  services = services.concat(Object.keys(s));

                  for (let service in s) {
                    if (s.hasOwnProperty(service)) {
                      for (let tagI in s[service]) {
                        const tag = s[service][tagI];
                        if (tag === "") {
                          hasDatacenter = true;
                        } else if (tag.indexOf("Residential") !== -1) {
                          hasResidential = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          countries.push({
            iso: countryIso,
            name: countryName,
            products: uniq(services),
            hasResidential: hasResidential,
            hasDatacenter: hasDatacenter
          });
        }
      }
    }
  }
  return countries;
};

export default function Locations({ title, description, locations }) {
  const [selectedTab, setSelectedTab] = useState(TAB_STATIC_IP);
  const [selectedSubTab, setSelectedSubTab] = useState(SUB_TAB_DATACENTER);

  const countries = setCountries(locations);

  const countryColorGet = (v) => {
    return countryHasSelectedProducts(v.properties.ISO_A2) ? ShadeColor(Primary, 0.3) : ShadeColor(Primary, 0.9);
  };

  const countryHasSelectedProducts = (iso2) => {
    if (selectedTab === TAB_ROTATING_IP && selectedSubTab === SUB_TAB_RESIDENTIAL) {
      return true;
    }
    for (let i = 0; i < countries.length; i++) {
      const cty = countries[i];
      if (cty.iso === iso2) {
        return (
          (selectedTab === TAB_STATIC_IP && selectedSubTab === SUB_TAB_DATACENTER && cty.hasDatacenter) ||
          (selectedTab === TAB_STATIC_IP && selectedSubTab === SUB_TAB_RESIDENTIAL && cty.hasResidential) ||
          (selectedTab === TAB_ROTATING_IP &&
            selectedSubTab === SUB_TAB_DATACENTER &&
            cty.products.includes("shared_proxy"))
        );
      }
    }

    return false;
  };

  return (
    <SectionLayout id="locations">
      <SectionTitle title={title} subtitle={description} />

      <ContainerLayout>
        <div className="flex flex-col">
          <div className="flex-row pointer cursor-pointer flex justify-center mb-10">
            {TABS_TYPE.map((tab) => (
              <Fragment key={tab}>
                <div
                  className={`group relative border-b-4 border-solid border-neutral-content ${
                    selectedTab === tab ? "border-primary" : ""
                  }`}
                >
                  <h3
                    className={`text-lg lg:text-3xl flex-wrap-reverse p-4 mb-0 mt-0`}
                    onClick={() => setSelectedTab(tab)}
                  >
                    {tab}
                  </h3>
                  <div className="absolute h-[4px] left-0 bg-primary w-[0%] transform group-hover:w-[100%] transition-width duration-300 ease-in-out"></div>
                </div>
              </Fragment>
            ))}
          </div>
          <div className={`flex-row pointer cursor-pointer flex justify-center`}>
            {SUB_TAB_TYPES.map((item) => (
              <Fragment key={item}>
                <div
                  className={`group relative border-b-4 border-solid border-neutral-content ${
                    selectedSubTab === item ? "border-primary" : ""
                  }`}
                  key={item}
                >
                  <h3
                    className={`text-lg lg:text-3xl flex-wrap-reverse p-4 mb-0 mt-0`}
                    onClick={() => setSelectedSubTab(item)}
                  >
                    {item}
                  </h3>
                  <div className="absolute h-[4px] left-0 bg-primary w-[0%] transform group-hover:w-[100%] transition-width duration-300 ease-in-out"></div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div>
          <ComposableMap
            style={{
              width: "100%",
              height: "auto"
            }}
          >
            <ZoomableGroup center={[0, 25]}>
              <Geographies geography={WorldMap}>
                {({ geographies }) =>
                  geographies.map((geography, i) => {
                    const countryColor = countryColorGet(geography);
                    const hasProduct = countryHasSelectedProducts(geography.properties.ISO_A2);

                    return (
                      <Geography
                        key={`${geography.properties.ISO_A2}-${i}`}
                        geography={geography}
                        style={{
                          default: {
                            fill: countryColor,
                            stroke: ShadeColor(Primary, 0.7),
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          hover: {
                            fill: countryColor,
                            stroke: ShadeColor(Primary, 0.7),
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          pressed: {
                            fill: ShadeColor(countryColor, hasProduct ? -0.2 : 0),
                            stroke: ShadeColor(Primary, 0.7),
                            strokeWidth: 0.75,
                            outline: "none"
                          }
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
