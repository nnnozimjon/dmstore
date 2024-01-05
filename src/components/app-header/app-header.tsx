'use client'
import React, { Fragment, useState } from 'react'
import { Flex, Indicator, Input, Text } from '@mantine/core'
import { brandName } from '@/utils/brandName'
import { IconHeart, IconSearch, IconShoppingBag, IconUser } from '@tabler/icons-react'

export const AppHeader = () => {
  const [cartItemsLength, setCartItemsLength] = useState('99+');

  return (
    <Flex className='bg-blue-500 p-4 w-full' direction={'column'} gap={'md'}>
      <Flex justify={'space-between'} align={'center'} gap={'lg'} className='lg:px-[300px] md:px-24 sm:px-0'>
        <Text className='text-white font-semibold text-2xl'>{brandName}</Text>
        <Input rightSection={<IconSearch size={20} />} placeholder='Поиск...' className='w-full max-w-[800px] min-w-[500px] lg:grid md:grid hidden' classNames={{
          input: 'border border-gray-300 outline-none bg-gray-100'
        }} />
        <Flex align={'center'} justify={'space-between'} gap={'sm'}>
          <Indicator disabled={!cartItemsLength} label={cartItemsLength} color='white' size={15} classNames={{
            indicator: 'text-black text-[10px] text-black font-semibold'
          }}>
            <IconShoppingBag size={30} color='#fff' className='cursor-pointer' />
          </Indicator>
          <IconHeart size={30} color='#fff' className='cursor-pointer' />
          <IconUser size={30} color='#fff' className='cursor-pointer' />
        </Flex>
      </Flex>
      <Input rightSection={<IconSearch size={20} />} placeholder='Поиск...' className='w-full grid lg:hidden md:hidden rounded-md' classNames={{
        input: 'border border-gray-300 outline-none bg-gray-100'
      }} />
    </Flex>
  )
}
