import { Noto_Sans_Thai } from "next/font/google";
import LandingCard from "./LandingCard";
import BusinessPartner from "./BusinessPartner";

const notosansthaifont = Noto_Sans_Thai({ subsets: ["thai"] });

const WhyKonHack = () => {
  return (
    <div
      className={`${notosansthaifont.className} pt-64 flex justify-center pb-32`}
    >
      <div>
        <div>
          <p className="font-bold text-3xl lg:text-6xl justify-center flex pb-20">
            ทําไมต้อง “คนแฮกเว็บ”
          </p>
        </div>
        <div>
          <LandingCard />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-8 pt-20 justify-center">
          <BusinessPartner />
          <BusinessPartner />
          <BusinessPartner />
          <BusinessPartner />
          <BusinessPartner />
          <BusinessPartner />
          <BusinessPartner />
          <BusinessPartner />
        </div>
        <div className="flex justify-center pt-20">
          <div className="text-4xl font-inter font-light">Business Partner</div>
        </div>
      </div>
    </div>
  );
};

export default WhyKonHack;
