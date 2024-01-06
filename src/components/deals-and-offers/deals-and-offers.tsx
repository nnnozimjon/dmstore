import { Flex } from "@mantine/core"
import { OffersCard } from "../offers-card"
import { Accordion } from "../accordion"

export const DealsAndOffers = () => {
  return (
    <Accordion label="Deals and Offers">
      <Flex justify='space-evenly' className="flex-wrap">
        <OffersCard discount={10} label="Smart Watches" src="assets/smart-watch.png" />
        <OffersCard discount={25} label="Laptops" src="assets/laptop.png" />
        <OffersCard discount={25} label="GoPro Cameras" src="assets/canon-cameras.png" />
        <OffersCard discount={25} label="Head Phones" src="assets/head-phones.png" />
        <OffersCard discount={25} label="Smart Phones" src="assets/smart-phones.png" />
      </Flex>
    </Accordion>
  )
}

