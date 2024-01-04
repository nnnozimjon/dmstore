import { brandName } from '@/utils/brandName'
import { Container, Flex, Input, Text } from '@mantine/core'
import React from 'react'

export const AppHeader = () => {
  return (
    <div className='bg-blue-500 p-2 w-full'>
      <Container>
        <Flex justify={'space-between'} align={'center'} gap={'lg'}>
          <Text>{brandName}</Text>
          <Input placeholder='search..' className='w-full' />
          <Text className='w-fit'>some more thing</Text>
        </Flex>
      </Container>
    </div>
  )
}
