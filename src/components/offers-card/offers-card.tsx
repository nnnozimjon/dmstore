import { Badge, Flex, Image, Text } from "@mantine/core"


interface IOffersCardProps {
  label: string,
  src: string
  discount: number | string
}

export const OffersCard = ({ discount, label, src }: IOffersCardProps) => {
  return <Flex className="w-fit p-[20px]" align='center' justify='center' direction='column' gap='md'>
    <Image src={src} alt="smart-watches" />
    <Text>{label}</Text>
    {discount && <Badge className="bg-red-200 text-red-500 text-[12px] lg:text-[16px] p-[10px]">-{discount}%</Badge>}
  </Flex>
}

