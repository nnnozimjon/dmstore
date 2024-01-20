'use client'

import { Accordion } from "@/components/accordion"
import { Categories } from "@/components/categories"
import { DealsAndOffers } from "@/components/deals-and-offers"
import { RecommendedItems } from "@/components/recommended-items/recommended-items"
import { Carousel } from "@mantine/carousel"
import { ActionIcon, Avatar, Box, Button, Divider, Flex, Grid, Image, NavLink, Rating, Text } from "@mantine/core"
import { IconBasket, IconHeart, IconMapPin, IconMessage, IconZoomCheck } from "@tabler/icons-react"
import { Fragment } from "react"

export default function ProductPage() {
  return <Fragment>
    <Box className="lg:px-[250px] md:px-[40px] sm:px-0 overflow-x-hidden">
      <Categories />
      <Grid className="md:border md:border-gray-300 p-5 rounded-md mb-4">
        <Grid.Col span={{ lg: 4, sm: 12 }}>
          <Flex gap={'lg'} direction='column'>
            <Carousel>
              <Carousel.Slide>
                <Image src="https://printrove.com/wp-content/uploads/2022/10/Oversized-T-shirt-Product-Image.jpeg" className="border border-gray-300 rounded-md w-[380px] h-[380px]" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src="https://printrove.com/wp-content/uploads/2022/10/Oversized-T-shirt-Product-Image.jpeg" className="border border-gray-300 rounded-md w-[380px] h-[380px]" />
              </Carousel.Slide>
            </Carousel>
            <Flex justify='start' className="w-full md:flex hidden" wrap={'wrap'} gap={'lg'}>
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
          <Flex className="mt-2 p-4 bg-green-100 rounded-md " align={'center'}>
            <Text className="text-[24px]">450.00 c</Text>
          </Flex>
          <Flex className="mt-2 flex md:hidden" align={'center'} gap={'lg'} >
            <Button leftSection={<IconBasket />} className="h-12 w-full" variant="filled" bg={'blue'} >
              Add to Cart
            </Button>
            <ActionIcon
              size="xl"
              className="border border-gray-300"
            >
              <IconHeart color="blue" />
            </ActionIcon>
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
        <Grid.Col span={{ lg: 3, md: 12 }}>
          <Flex direction={'column'} className="border border-gray-300 w-full rounded-md p-2" gap={'md'}>
            <Flex align={'center'} gap={'md'}>
              <Avatar color="cyan" radius="sm" size={50}>MK</Avatar>
              <Box>
                <Text>Supplier</Text>
                <Text>Dushanbe Market</Text>
              </Box>
            </Flex>
            <Divider />

            <Box>
              <NavLink
                href="#required-for-focus"
                label="Dushanbe, Mushfiqi 21"
                leftSection={<IconMapPin size="20" stroke={1.5} />}
                disabled
              />
              <NavLink
                href="#required-for-focus"
                label="Not verified"
                leftSection={<IconZoomCheck size="20" stroke={1.5} />}
                disabled
              />
            </Box>

            <Button leftSection={<IconBasket />} className="h-12 hidden md:grid" variant="filled" bg={'blue'} >
              Add to Cart
            </Button>
          </Flex>
          <br />
          <Button leftSection={<IconHeart />} className="w-full text-blue-500 hidden md:grid">
            Save for later
          </Button>
        </Grid.Col>
      </Grid>
      <Box className="p-3 border border-gray-300 rounded-lg mx-2 md:mx-0">
        <Accordion label="Description">
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia eaque ipsa, laborum beatae dolor! Numquam porro exercitationem placeat amet in, dolore commodi quibusdam atque, unde labore perferendis voluptates doloremque.</Text>
        </Accordion>
      </Box>
      <br />
      <Box className="mx-2 md:mx-0">
        <RecommendedItems label="You may also like" />
        <DealsAndOffers />
        <RecommendedItems label="Recommended Items" />
      </Box>
    </Box>
  </Fragment>
}