import { Checkbox, Flex } from '@mantine/core'
import { ChangeEventHandler } from 'react'

interface ICategory {
  id: number | string,
  name: string
  isActive: boolean
}



interface Props {
  categories?: ICategory[]
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}


export const Category = ({ categories, onChange }: Props) => {
  return (
    <Flex direction={'column'} gap={'sm'}>
      {categories?.map((category) => (
        <Checkbox
          key={category.id}
          label={category?.name}
          onChange={onChange}
          checked={category.isActive}
          value={category.id}
        />
      ))}
    </Flex>
  )
}