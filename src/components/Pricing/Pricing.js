import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: ["unlimited project", "lifetime free", "localized deals"],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benefits: [
        "unlimited project",
        "lifetime free",
        "localized & national deals",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 19.22,
      benefits: [
        "unlimited project",
        "lifetime free",
        "national & international deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-3">
      <h1 className="text-2xl font-mono">Best Deals of the Town</h1>
      <div className="grid md:grid-cols-3 gap-3 mt-3">
        {pricingOptions.map((option) => {
          return (
            <PricingOption key={option.id} option={option}></PricingOption>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
