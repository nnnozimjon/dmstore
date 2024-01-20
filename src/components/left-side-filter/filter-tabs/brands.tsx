import { Checkbox, Flex } from '@mantine/core'
import { ChangeEventHandler } from 'react'


interface ICategory {
  id: number | string,
  name: string
  isActive: boolean
}



interface Props {
  brands?: ICategory[]
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
}

export const Brands = ({ brands, onChange }: Props) => {
  return (
    <Flex direction={'column'} gap={'sm'}>
      {brands?.map((brand) => (
        <Checkbox
          key={brand.id}
          label={brand?.name}
          onChange={onChange}
          checked={brand.isActive}
          value={brand.id}
        />
      ))}
    </Flex>
  )
}
