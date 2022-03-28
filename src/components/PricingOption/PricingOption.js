import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefits from "../Benefits/Benefits";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <p className="bg-white text-indigo-800 py-3 rounded text-xl font-bold">
        {name}
      </p>
      <p>
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-xl font-bold text-gray-500">/mo</span>
      </p>
      <div>
        <h3 className="text-xl font-bold mt-3 text-left">Benefits:</h3>
        {benefits.map((benefit) => {
          return <Benefits benefit={benefit}></Benefits>;
        })}
      </div>
      <button className="flex justify-center align-center py-2 font-bold mt-3 w-full bg-indigo-500 mb-0 rounded text-white hover:text-indigo-500 hover:bg-white hover:border-indigo-500">
        Choose This
        <ArrowCircleRightIcon className="ml-2 w-4 h-4 text-white hover:text-indigo-500"></ArrowCircleRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
