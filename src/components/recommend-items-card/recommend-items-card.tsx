import { Flex, Image, Rating, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";


interface IRecommendedItemsCardProps {
  price: number | string
  src: string
  description: string,
  rating?: number,
  discount?: number | string
}

export const RecommendedItemsCard = ({ description, price, src, discount, rating = 0 }: IRecommendedItemsCardProps) => {
  return (
    <Flex direction='column' className="p-2 border border-gray-300 rounded-md flex-shrink-0 w-[220px] lg:flex-shrink">
      <Image src={src} alt="" className="w-full" />
      <Flex align='center' justify='space-between'>
        <Text className="text-[18px] font-medium">{price}</Text>
        {discount && <Text className="text-[14px] font-medium line-through text-gray-500">{discount}</Text>}
      </Flex>
      <Flex align='center' justify='space-between'>
        <Rating defaultValue={rating} readOnly />
        <IconHeart size={25} className="text-blue-400 cursor-pointer" />
      </Flex>
      <Text className="text-gray-800">{description}</Text>
    </Flex>
  );
};
