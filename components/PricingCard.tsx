import { Tier } from "@/lib/types";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import CheckoutButton from "./CheckoutButton";

type Props = {
  redirect: boolean;
  tier: Tier;
};

const PricingCard = ({ tier, redirect }: Props) => {
  return (
    <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
      <div>
        <h3 className="text-base font-semibold leading-7 text-indigo-600">
          {tier.name}
        </h3>
        <div className="mt-4 flex items-baseline gap-x-2">
          {tier.priceMonthly ? (
            <>
              <p className="text-5xl font-bold tracking-tight text-gray-900">
                {tier.priceMonthly}
              </p>
              <p className="text-base font-semibold text-gray-600">/month</p>
            </>
          ) : (
            <p className="text-5xl font-bold tracking-tight text-gray-900">
              Free
            </p>
          )}
        </div>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {tier.description}
        </p>
        <ul
          className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
          role="list"
        >
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-x-3">
              <FaCheck
                className="h-6 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {redirect ? (
        <Link
          href={"/register"}
          className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80"
        >
          Get Started Today
        </Link>
      ) : (
        tier.id && <CheckoutButton />
      )}
    </div>
  );
};

export default PricingCard;
