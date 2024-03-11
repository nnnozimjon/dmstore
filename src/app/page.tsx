"use client";
import { BatchItems } from "@/components/batch-items";
import { CarouselItems } from "@/components/carousel";
import { Categories } from "@/components/categories";
import { DealsAndOffers } from "@/components/deals-and-offers";
import { RecommendedItems } from "@/components/recommended-items/recommended-items";
import { Flex } from "@mantine/core";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Flex direction="column" className="lg:px-[250px] md:px-[40px] sm:px-0">
        <Categories />
        <CarouselItems />
        <br />
        <Flex direction='column' gap="lg" className="px-3">
          <DealsAndOffers />
          <BatchItems label="Home and outdoor" src="assets/batch-home-things.png" />
          <RecommendedItems label="You may also like" />
          <BatchItems label="Consumer electronics and gadgets" src="assets/batch-electronics.png" />
          <RecommendedItems label="Recommended Items" />
          <RecommendedItems label="Electronics" />
          <RecommendedItems label="Home and outdoor" />
        </Flex>
      </Flex>
    </Fragment>
  );
}
