import SectionLayout from "@/components/layouts/sectionLayout";
import SectionTitle from "@/components/common/sectionTitle";
import ContainerLayout from "@/components/layouts/containerLayout";
import { Fragment, useEffect, useState } from "react";
import {
  PRICING_ROTATING_SERVICES,
  PRICING_SERVICES,
  SUB_TAB_RESIDENTIAL,
  TAB_ROTATING_IP,
  TAB_STATIC_IP
} from "@/utils/constants";
import PricingCard from "@/components/pricing/pricingCard";

const getPrice = (basePrice, priceMultiplier, quantity, months, discountsQuantity, discountsInterval) => {
  let total = parseFloat(basePrice) * parseFloat(priceMultiplier) * quantity;
  if (months) {
    total *= months;
    total -= (total * getDiscountIntervalPercentage(months, discountsInterval)) / 100;
  }
  total -= (total * getDiscountQuantityPercentage(quantity, discountsQuantity)) / 100;
  return total.toFixed(2);
};

const getDiscountQuantityPercentage = (quantity, discountsQuantity) => {
  let qtyDiscount = 0;
  for (let key of Object.keys(discountsQuantity)) {
    if (quantity >= parseInt(key)) {
      qtyDiscount = parseFloat(discountsQuantity[key]);
    }
  }
  return qtyDiscount;
};

const getDiscountIntervalPercentage = (months, discountsInterval) => {
  for (let key of Object.keys(discountsInterval)) {
    if (parseInt(key) === months) {
      return parseFloat(discountsInterval[key]);
    }
  }
  return 0;
};

const getUnitPrice = (totalPrice, quantity, interval) => {
  return (parseFloat(totalPrice) / quantity / interval).toFixed(2);
};

export default function Pricing({ title, description, pricesData, isps }) {
  const [priceMultipliers, setPriceMultipliers] = useState({});
  const [selectedTab, setSelectedTab] = useState(Object.keys(PRICING_SERVICES)[0]);
  const [selectedSubTab, setSelectedSubTab] = useState(Object.keys(PRICING_SERVICES[selectedTab])[0]);
  const [selectedInterval, setSelectedInterval] = useState(1);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedISP, setSelectedISP] = useState("Residential");

  useEffect(() => {
    let pricesToUse = pricesData.prices;

    let newPriceMultipliers = {};
    for (let key in pricesToUse) {
      if (!key.startsWith("rotating")) {
        for (let tag of pricesToUse[key].tags) {
          if (tag.name) {
            const name = tag.name.replace("Residential ", "");
            newPriceMultipliers[name] = tag.price_multiplier;
          }
        }
      }
    }
    newPriceMultipliers = Object.entries(newPriceMultipliers)
      .sort((a, b) => parseFloat(a[1]) - parseFloat(b[1]))
      .reduce((result, [key, value]) => {
        result[key] = value;
        return result;
      }, {});
    setPriceMultipliers(newPriceMultipliers);
  }, [pricesData]);

  return (
    <SectionLayout id="pricing">
      <SectionTitle title={title} subtitle={description} />

      <ContainerLayout>
        <div className="flex justify-center mb-20 font-normal">
          <div className={`flex flex-col items-center gap-10 w-max`}>
            <div
              className={`w-full flex flex-row flex-wrap justify-start items-center gap-4  ${
                selectedTab !== TAB_ROTATING_IP && Object.keys(PRICING_SERVICES)[0] ? "visible" : "invisible"
              }`}
            >
              <div className="text-base-content text-lg lg:text-xl">Duration:</div>
              <div className="flex flex-row flex-wrap gap-4">
                {[1, 3, 6, 12].map((item) => (
                  <label className="label cursor-pointer flex flex-row justify-center items-center p-0 m-0" key={item}>
                    <input
                      type="radio"
                      name="radio-months"
                      className="radio radio-primary"
                      value={item}
                      checked={selectedInterval === item}
                      onChange={(e) => setSelectedInterval(Number(e.target.value))}
                    />
                    <span className="label-text ml-4 text-lg lg:text-xl">
                      {item}
                      {item === 1 ? "Month" : "Months"}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full min-w-[300px] lg:min-w-[400px]">
              <div className="flex justify-between md:justify-end">
                <div className="text-base-content text-lg lg:text-xl block md:hidden">Quantity:</div>
                <div className="w-14 h-8 rounded-xl bg-base-200 text-center text-base-content">{selectedQuantity}</div>
              </div>
              <div className="slider flex flex-row gap-4 items-center h-[40px]">
                <div className="text-base-content text-lg lg:text-xl hidden md:block">Quantity:</div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={selectedQuantity}
                  onInput={(e) => setSelectedQuantity(Number(e.target.value))}
                  className="range range-primary range-xs"
                  style={{ "--sliderValue": selectedQuantity }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex-row pointer cursor-pointer flex justify-center mb-10">
            {Object.entries(PRICING_SERVICES).map(([key, value]) => (
              <Fragment key={key}>
                <div
                  className={`group relative border-b-4 border-solid border-neutral-content ${
                    selectedTab === key ? "border-primary" : ""
                  }`}
                >
                  <h3
                    className={`text-lg lg:text-3xl flex-wrap-reverse p-4 mb-0 mt-0`}
                    onClick={() => setSelectedTab(key)}
                  >
                    {key}
                  </h3>
                  <div className="absolute h-[4px] left-0 bg-primary w-[0%] transform group-hover:w-[100%] transition-width duration-300 ease-in-out"></div>
                </div>
              </Fragment>
            ))}
          </div>
          <div
            className={`flex-row pointer cursor-pointer flex justify-center ${
              selectedTab === TAB_STATIC_IP ? "visible" : "invisible"
            }`}
          >
            {Object.keys(PRICING_SERVICES[TAB_STATIC_IP]).map((item) => (
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
        <div
          className={`flex flex-col justify-center items-center mb-10 mt-10 ${
            selectedSubTab === SUB_TAB_RESIDENTIAL && selectedTab === TAB_STATIC_IP ? "visible" : "invisible"
          }`}
        >
          <select className="select select-primary w-full max-w-xs" onChange={(e) => setSelectedISP(e.target.value)}>
            {isps.map((item, i) => (
              <option value="Residential" key={i}>
                {item}
              </option>
            ))}
            {Object.entries(priceMultipliers).map(
              ([key, value], i) =>
                key !== "Residential" &&
                key !== "Mailing Proxies" && (
                  <option value={key} key={key}>
                    {key}
                  </option>
                )
            )}
          </select>
        </div>
        <div className={`flex flex-row flex-wrap justify-center items-start gap-6 mt-10`}>
          {selectedTab === TAB_STATIC_IP &&
            Object.entries(PRICING_SERVICES[selectedTab][selectedSubTab]).map(([key, value]) => {
              let multi = 1;
              if (selectedSubTab === SUB_TAB_RESIDENTIAL) {
                multi = priceMultipliers[selectedISP];
              }
              const totalPrice = getPrice(
                pricesData.prices[key].price,
                multi,
                selectedQuantity,
                selectedInterval,
                pricesData.discounts.quantity,
                pricesData.discounts.interval
              );
              return (
                <PricingCard
                  key={selectedTab + key}
                  title={value}
                  discount={
                    getDiscountIntervalPercentage(selectedInterval, pricesData.discounts.interval) +
                    "%" +
                    " + " +
                    getDiscountQuantityPercentage(selectedQuantity, pricesData.discounts.quantity) +
                    "%"
                  }
                  unitPrice={getUnitPrice(totalPrice, selectedQuantity, selectedInterval)}
                  total={totalPrice}
                />
              );
            })}
          {selectedTab === TAB_ROTATING_IP &&
            Object.entries(PRICING_ROTATING_SERVICES).map(([key, value]) => {
              const discountKey = key.replace("rotating_", "");
              const totalPrice = getPrice(
                pricesData.prices[key].price,
                1,
                selectedQuantity,
                null,
                pricesData.discounts_rotating.quantity[discountKey],
                null
              );
              return (
                <PricingCard
                  key={selectedTab + key}
                  title={value}
                  discount={getDiscountQuantityPercentage(
                    selectedQuantity,
                    pricesData.discounts_rotating.quantity[discountKey]
                  )}
                  unitPrice={getUnitPrice(totalPrice, selectedQuantity, 1)}
                  total={totalPrice}
                />
              );
            })}
        </div>
      </ContainerLayout>
    </SectionLayout>
  );
}
