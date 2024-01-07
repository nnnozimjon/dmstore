import { Flex } from "@mantine/core";
import { Accordion } from "../accordion";
import { RecommendedItemsCard } from "../recommend-items-card";


interface IRecommendedItems {
  label: string
}

export const RecommendedItems = ({ label }: IRecommendedItems) => {
  return (
    <Accordion label={label}>
      <Flex gap='lg' className="sm:flex-wrap flex-nowrap overflow-x-scroll overflow-y-hidden scrollbar-hide mb-4">
        <RecommendedItemsCard discount="$20" description="1" price='$1500.30' src="https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp" />
        <RecommendedItemsCard discount="$20" description="1" price='$1500.30' src="https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp" />
        <RecommendedItemsCard discount="$20" description="1" price='$1500.30' src="https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp" />
        <RecommendedItemsCard discount="$20" description="1" price='$1500.30' src="https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp" />
        <RecommendedItemsCard discount="$20" description="1" price='$1500.30' src="https://s7d1.scene7.com/is/image/dish/iPhone_14_Pro_Deep_Purple_phonewall?$ProductBase$&fmt=webp" />
      </Flex>
    </Accordion>
  );
};

