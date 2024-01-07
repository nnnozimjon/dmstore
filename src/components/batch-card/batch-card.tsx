import { Box, Flex, Image, Text } from "@mantine/core"

interface IBatchCardProps {
  label: string
  price: string | number
  src: string
}

export const BatchCard = ({ label, price, src }: IBatchCardProps) => {
  return <Box className="border border-gray-300 p-2 w-[230px] flex-shrink-0">
    <Text>{label}</Text>
    <Flex justify="space-between">
      <Box>
        <Text color="gray" size="sm">From</Text>
        <Text color="gray" size="sm">USD {price}</Text>
      </Box>
      <Image src={src} alt="" className="h-[82px] w-[82px] bg-cover object-cover" />
    </Flex>
  </Box>
}
