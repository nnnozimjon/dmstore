import { Button, Flex, TextInput } from '@mantine/core'
import { useState } from 'react'

interface Props {
  onClick?: (price: {
    min: number,
    max: number
  }) => void | undefined
}
export const PriceRanges = ({ onClick = () => { } }: Props) => {
  const [price, setPrice] = useState({
    min: 0,
    max: 0
  })
  return (
    <Flex direction={'column'} gap={'sm'}>
      <Flex gap={'lg'}>
        <TextInput label="Min" type='number' onChange={(e) => setPrice((prev) => ({ ...prev, min: Number(e.target.value) }))} placeholder='0' />
        <TextInput label="Max" type='number' onChange={(e) => setPrice((prev) => ({ ...prev, max: Number(e.target.value) }))} placeholder='9999' />
      </Flex>
      <Button onClick={() => onClick(price)} className='border border-gray-300 w-full text-blue-500'>
        Apply
      </Button>
    </Flex>
  )
}
