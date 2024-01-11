import { ActionIcon, Box, Button, Flex, Image, Rating, Text } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import { useState } from "react"

export const GridCard = ({ view }: any) => {
  return <Box className={`${view === 'grid' ? 'w-fit' : 'w-full flex'} border border-gray-300 shrink-0`}>
    <Box className="lg:px-[32px] lg:py-[15px] sm:p-2">
      <Image className={`md:w-[232px] md:h-[232px] ${view === 'grid' ? 'w-fit h-fit' : 'w-[230px] h-[150px]'}`} alt="" src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" />
    </Box>
    <Box className={`${view === 'grid' ? 'border-t' : 'w-full border-l'} px-[16px] border-gray-300 flex flex-col gap-2`}>
      <Box>
        <Flex align="center" justify="space-between">
          <Box>
            <Text className="font-semibold my-2">Iphone 14 Pro max</Text>
            <Flex gap='sm'>
              <Text className={`${view === 'grid' ? '' : 'font-semibold text-[16px] md:text-[24px]'}`}>$999.00</Text>
              <Text className={`${view === 'grid' ? 'text-[12px]' : 'text-[18px]'} text-gray-600 line-through hidden md:grid `}>$1250.00</Text>
            </Flex>
            <Rating classNames={{
              starSymbol: 'w-[16px] lg:w-[24px]'
            }} />
          </Box>

          <ActionIcon variant="default">
            <IconHeart size={24} className="text-blue-500" />
          </ActionIcon>
        </Flex>
      </Box>
      <Text className="text-green-500 font-medium grid lg:hidden md:hidden mb-3">
        Free Shipping
      </Text>
      <Text className={`${view === 'grid' ? 'w-[215px]' : 'w-[70%]'} text-gray-600 pb-3 lg:grid md:grid hidden`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>
    </Box>
  </Box>
}