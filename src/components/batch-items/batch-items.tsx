import { BackgroundImage, Box, Button, Divider, Flex, Text } from "@mantine/core"
import { BatchCard } from "../batch-card"
import { IconArrowRight } from "@tabler/icons-react"


interface IBatchItemsProps {
  label: string
  src: string
}

export const BatchItems = ({ label, src }: IBatchItemsProps) => {
  return <Flex className="w-full mb-4" gap="sm">
    <Box className="w-[280px] border border-gray-300 hidden lg:grid">
      <BackgroundImage src={src} className="w-full h-full p-[20px]">
        <Text className="font-semibold text-[20px] mb-2 w-[150px]">{label}</Text>
        <Button className="bg-white text-black">Source now</Button>
      </BackgroundImage>
    </Box>
    <Flex direction="column" gap="sm" className="sm:flex-wrap flex-nowrap overflow-x-scroll overflow-y-hidden scrollbar-hide">
      <Text className="pl-3 text-black font-semibold text-[20px] mb-2 lg:hidden grid">{label}</Text>
      <Flex gap="md" className="ml-2 px-2 sm:flex-wrap flex-nowrap overflow-x-scroll overflow-y-hidden scrollbar-hide">
        <BatchCard label="Soft chairs" price={12} src="assets/sofa.png" />
        <BatchCard label="Soft chairs" price={12} src="assets/lamp.png" />
        <BatchCard label="Soft chairs" price={12} src="assets/ballon-sofa.png" />
        <BatchCard label="Soft chairs" price={12} src="assets/pot.png" />
        <BatchCard label="Soft chairs" price={12} src="assets/pot.png" />
        <BatchCard label="Soft chairs" price={12} src="assets/pot.png" />
        <BatchCard label="Soft chairs" price={12} src="assets/pot.png" />
        <BatchCard label="Soft chairs" price={12} src="assets/pot.png" />
      </Flex>
      <Button className="text-blue-600 w-fit ml-2 lg:hidden grid" rightSection={<IconArrowRight />}>Source now</Button>
      <Divider className="lg:hidden grid" />
    </Flex>
  </Flex>
}