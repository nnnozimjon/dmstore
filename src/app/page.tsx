"use client";
import { DealsAndOffers } from "@/components/deals-and-offers";
import { RecommendedItems } from "@/components/recommended-items/recommended-items";
import { Flex } from "@mantine/core";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Flex direction="column" className="lg:px-[250px] md:px-[40px] sm:px-0">
        <DealsAndOffers />
        <RecommendedItems label="Recommended Items" />
        <RecommendedItems label="Electronics" />
        <RecommendedItems label="Home and outdoor" />
      </Flex>
    </Fragment>
  );
}
