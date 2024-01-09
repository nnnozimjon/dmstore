import { ActionIcon, Box, Button, Flex, Image, Rating, Text } from "@mantine/core"
import { IconHeart } from "@tabler/icons-react"
import { useState } from "react"

export const GridCard = ({ view }: any) => {
  return <Box className={`${view === 'grid' ? 'w-fit' : 'w-full flex'} border border-gray-300 shrink-0`}>
    <Box className="px-[32px] py-[15px]">
      <Image className="w-[232px] h-[232px]" alt="" src="https://retailminded.com/wp-content/uploads/2016/03/EN_GreenOlive-1.jpg" />
    </Box>
    <Box className={`${view === 'grid' ? 'border-t' : 'w-full border-l'} px-[16px] border-gray-300 flex flex-col gap-2`}>
      <Box>
        <Flex align="center" justify="space-between">
          <Box>
            <Text className="font-semibold my-2">Iphone 14 Pro max</Text>
            <Flex gap='sm'>
              <Text className={`${view === 'grid' ? '' : 'font-semibold text-[24px]'}`}>$999.00</Text>
              <Text className={`${view === 'grid' ? 'text-[12px]' : 'text-[18px]'} text-gray-600 line-through`}>$1250.00</Text>
            </Flex>
            <Rating size={view === 'grid' ? 'sm' : 'lg'} />
          </Box>

          <ActionIcon variant="default">
            <IconHeart size={24} className="text-blue-500" />
          </ActionIcon>
        </Flex>
      </Box>
      <Text className={`${view === 'grid' ? 'w-[215px]' : 'w-[70%]'} text-gray-600`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam odio, modi explicabo quidem nihil et corporis debitis quos excepturi molestias, praesentium recusandae sed consequuntur a nesciunt, iste cupiditate possimus.
      </Text>
    </Box>
  </Box>
}