import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import CheckoutButton from "./CheckoutButton";

type Props = {
  redirect: boolean;
};

const PricingCards = ({ redirect }: Props) => {
  const tiers = [
    {
      name: "Starter",
      id: null,
      href: "#",
      priceMonthly: null,
      description: "Get chatting right away with anyone, anywhere!",
      features: [
        "20 Message Chat Limit in Chats",
        "2 Participant limit in Chat",
        "3 Chat Room Limit",
        "Supports 2 languages",
        "48-hour support response time",
      ],
    },
    {
      name: "Pro",
      id: "dwdwdwd",
      href: "#",
      priceMonthly: "$5.00",
      description: "Unlock the Full Potential with Pro!",
      features: [
        "Unlimited Messages in Chats",
        "Unlimited Participants in Chat",
        "Unlimited Chat Rooms",
        "Supports up to 10 languages",
        "Multimedia support in chats (coming soon)",
        "1-hour, dedicated support response time",
        "Early access to New Features",
      ],
    },
  ];
  return (
    <div className="-mt-80 mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
      {tiers.map((tier) => (
        <div
          className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
          key={tier.name}
        >
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
                  <p className="text-base font-semibold text-gray-600">
                    /month
                  </p>
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
      ))}
    </div>
  );
};

export default PricingCards;
