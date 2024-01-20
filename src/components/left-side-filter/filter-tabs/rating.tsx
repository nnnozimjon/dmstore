import { Box, Checkbox, Flex, Rating } from '@mantine/core'
import { ChangeEventHandler } from 'react'


interface Props {
  ratings?: {
    id: number,
    value: number,
    isActive: boolean
  }[],
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

export const Ratings = ({ onChange = () => { }, ratings = [] }: Props) => {
  return (
    <Flex direction={'column'} gap={'md'}>
      {ratings?.map((rating) =>
        <Flex align={'center'} gap={'lg'}>
          <Checkbox
            onChange={onChange}
            checked={rating.isActive}
            value={rating.value}
          />
          <Box className='-z-10'>
            <Rating
              readOnly
              defaultValue={rating.value}
            />
          </Box>
        </Flex>
      )}
    </Flex>
  )
}
