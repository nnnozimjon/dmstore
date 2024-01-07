import { Badge, Flex, Image, Text } from "@mantine/core"


interface IOffersCardProps {
  label: string,
  src: string
  discount: number | string
}

export const OffersCard = ({ discount, label, src }: IOffersCardProps) => {
  return <Flex className="w-fit py-[20px] px-[21px] border border-gray-300 mb-4 flex-shrink-0" align='center' justify='center' direction='column' gap='md'>
    <Image src={src} alt="smart-watches" className="w-[140px] h-[140px] object-cover bg-cover" />
    <Text>{label}</Text>
    {discount && <Badge className="bg-red-200 text-red-500 text-[12px] lg:text-[16px] p-[10px]">-{discount}%</Badge>}
  </Flex>
}

