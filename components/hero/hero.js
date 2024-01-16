import ButtonMain from "@/components/common/buttonMain";
import Image from "next/image";

export default function Hero({ minPrice }) {
  return (
    <div className="hero min-h-screen relative bg-gradient1 overflow-hidden">
      <Image
        src="/images/hero/hero.webp"
        alt="#"
        width={1645}
        height={1498}
        priority
        className="absolute -bottom-[10%] max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]"
      />

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5">
            Anonymous <br />
            HTTP & SOCKSv5 Proxies
          </h1>
          <p className="mb-5">
            Fully anonymous private proxies <br />
            (shared or dedicated) starting at just ${minPrice}
          </p>
          <ButtonMain text="Members" buttonClass="btn-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </ButtonMain>
        </div>
      </div>
    </div>
  );
}
