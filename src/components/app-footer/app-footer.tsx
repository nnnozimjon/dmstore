'use client'
import { brandName } from '@/utils/brandName'
import { Button, Flex, Grid, Text } from '@mantine/core'
import { IconDiscount2, IconHome, IconSearch, IconShoppingBag, IconUser } from '@tabler/icons-react'
import React, { Fragment } from 'react'

export const AppFooter = () => {
  const _gridSettings = {
    span: {
      base: 12,
      md: 6,
      lg: 3
    }
  }
  return (
    <Fragment>
      <Flex direction='column'>
        <Grid grow gutter={'lg'} className='bg-gray-900 w-full lg:px-[200px] px-10 py-16'>
          <Grid.Col {..._gridSettings} className='flex flex-col gap-2'>
            <Text color='#fff' className='text-3xl font-semibold mb-2'>{brandName}</Text>
            <Text color='gray'>Customer Supports:</Text>
            <Text color='#fff' className='text-xl'>(+992)101-031-200</Text>
            <Text color='gray'>Mushfiqi 21, Dushanbe 734019</Text>
            <Text color='#fff'>info@dushanbemarket.com</Text>
          </Grid.Col>
          <Grid.Col {..._gridSettings} className='flex flex-col'>
            <Text color='#fff' className='mb-2'>TOP CATEGORY</Text>
            <Text color='gray'>Computer & Laptop</Text>
            <Text color='gray'>SmartPhone</Text>
            <Text color='gray'>Headphone</Text>
            <Text color='gray'>Accessories</Text>
            <Text color='gray'>TV & Homes</Text>
          </Grid.Col>

          <Grid.Col {..._gridSettings} className='flex flex-col'>
            <Text color='#fff' className='mb-2'>QUICK LINKS</Text>
            <Text color='gray'>Shop Product</Text>
            <Text color='gray'>Shoping Cart</Text>
            <Text color='gray'>Wishlist</Text>
            <Text color='gray'>Compare</Text>
            <Text color='gray'>Track Order</Text>
            <Text color='gray'>Customer Help</Text>
            <Text color='gray'>About Us</Text>
          </Grid.Col>
          <Grid.Col {..._gridSettings} className='flex flex-col'>
            <Text color='#fff' className='mb-2'>POPULAR TAGS</Text>
            <Flex className='flex flex-wrap' gap='sm'>
              <Button className='border border-gray-400 w-fit hover:bg-gray-800'>Game</Button>
              <Button className='border border-gray-400 w-fit hover:bg-gray-800'>iPhone</Button>
              <Button className='border border-gray-400 w-fit hover:bg-gray-800'>TV</Button>
              <Button className='border border-gray-400 w-fit hover:bg-gray-800'>Asus Laptops</Button>
              <Button className='border border-gray-400 w-fit hover:bg-gray-800'>Macbook</Button>
            </Flex>
          </Grid.Col>
        </Grid>
        <Flex className='bg-gray-900 w-full border-t border-gray-300' align={'center'} justify={'center'}>
          <Text color='#fff' className='p-3 text-[15px]'>
            All Rights reserved {brandName}!
          </Text>
        </Flex>
      </Flex>
      <Flex className='bg-white py-3 sticky bottom-0 w-full shadow-lg sm:flex lg:hidden' align='center' justify='space-around'>
        <IconHome size={30} className='text-gray-500' />
        <IconSearch size={30} className='text-gray-500' />
        <IconDiscount2 size={30} className='text-gray-500' />
        <IconShoppingBag size={30} className='text-gray-500' />
        <IconUser size={30} className='text-gray-500' />
      </Flex>
    </Fragment>
  )
}
