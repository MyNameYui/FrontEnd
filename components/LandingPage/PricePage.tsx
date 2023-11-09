import GodPricingCard from "./PriceCard/GodPricingCard";
import LnwPricingCard from "./PriceCard/LnwPricingCard";
import NoobPricingCard from "./PriceCard/NoobPricingCard";

export default function PricePage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-4 justify-center">
          <div className="scale-75 md:scale-100">
            <NoobPricingCard />
          </div>
          <div className="scale-75 md:scale-100">
            <LnwPricingCard />
          </div>
          <div className="scale-75 md:scale-100">
            <GodPricingCard />
          </div>
        </div>
      </div>
    </>
  );
}
