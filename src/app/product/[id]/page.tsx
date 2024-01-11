'use client'

import { Categories } from "@/components/categories"
import { Box, Divider, Flex, Grid, Image, Rating, Text } from "@mantine/core"
import { IconBasket, IconMessage } from "@tabler/icons-react"
import { Fragment } from "react"

export default function ProductPage() {
  return <Fragment>
    <Box className="lg:px-[250px] md:px-[40px] sm:px-0 overflow-x-hidden">
      <Categories />
      <Grid className="md:border md:border-gray-300 p-5 rounded-md">
        <Grid.Col span={{ lg: 4, sm: 12 }}>
          <Flex gap={'lg'} direction='column'>
            <Image src="https://printrove.com/wp-content/uploads/2022/10/Oversized-T-shirt-Product-Image.jpeg" className="border border-gray-300 rounded-md w-[380px] h-[380px]" />
            <Flex justify='space-around' className="w-[380px]">
              <Image src="https://printrove.com/wp-content/uploads/2022/10/Oversized-T-shirt-Product-Image.jpeg" className="border border-gray-300 rounded-md w-[56px] h-[56px]" />
              <Image src="https://printrove.com/wp-content/uploads/2022/10/Oversized-T-shirt-Product-Image.jpeg" className="border border-gray-300 rounded-md w-[56px] h-[56px]" />
              <Image src="https://printrove.com/wp-content/uploads/2022/10/Oversized-T-shirt-Product-Image.jpeg" className="border border-gray-300 rounded-md w-[56px] h-[56px]" />
              <Image src="https://printrove.com/wp-content/uploads/2022/10/Oversized-T-shirt-Product-Image.jpeg" className="border border-gray-300 rounded-md w-[56px] h-[56px]" />
              <Image src="https://printrove.com/wp-content/uploads/2022/10/Oversized-T-shirt-Product-Image.jpeg" className="border border-gray-300 rounded-md w-[56px] h-[56px]" />
              <Image src="https://printrove.com/wp-content/uploads/2022/10/Oversized-T-shirt-Product-Image.jpeg" className="border border-gray-300 rounded-md w-[56px] h-[56px]" />
            </Flex>
          </Flex>
        </Grid.Col>
        <Grid.Col span={{ lg: 5, md: 12 }}>
          <Text className="text-[24px] font-medium">Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</Text>
          <Flex gap={'md'} align={'center'}>
            <Rating defaultValue={3} />
            <Flex className="gap-1" align={'center'}>
              <IconMessage className="text-gray-500" />
              <Text className="text-gray-500">32 reviews</Text>
            </Flex>
            <Flex className="gap-1" align={'center'}>
              <IconBasket className="text-gray-500" />
              <Text className="text-gray-500">154 sold</Text>
            </Flex>
          </Flex>
          <Flex className="mt-2 p-4 bg-red-100 rounded-md " align={'center'}>
            <Text className="text-[24px]">450.00 c</Text>
          </Flex>
          <Flex className="my-4" gap={'lg'}>
            <Text className="text-gray-500">Price:</Text>
            <Text className="text-gray-600">Negotiable</Text>
          </Flex>
          <Divider />
          <Flex className="my-4" gap={'lg'}>
            <Text className="text-gray-500">Type:</Text>
            <Text className="text-gray-600">Classic shoes</Text>
          </Flex>
          <Flex className="my-4" gap={'lg'}>
            <Text className="text-gray-500">Material:</Text>
            <Text className="text-gray-600">Plastic material</Text>
          </Flex>
          <Flex className="my-4" gap={'lg'}>
            <Text className="text-gray-500">Design:</Text>
            <Text className="text-gray-600">Modern nice</Text>
          </Flex>
          <Divider />
        </Grid.Col>
        <Grid.Col span={{ lg: 3, md: 12 }}>C</Grid.Col>
      </Grid>
      <br />
    </Box>
  </Fragment>
}