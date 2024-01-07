import { Button, Flex, Menu } from "@mantine/core"
import { categories } from "./categories.mock"
import { IconArrowRight, IconMenuDeep } from "@tabler/icons-react"

export const Categories = () => {
  return <Flex gap={'md'} className="px-2 lg:px-0 my-4 sm:flex-wrap flex-nowrap overflow-x-scroll overflow-y-hidden scrollbar-hide">
    {categories.map((category) => <Button className="grid md:hidden lg:hidden shrink-0 bg-gray-200 text-blue-500">{category.name}</Button>)}
    <Menu
      loop={false}
      withinPortal={false}
      trapFocus={false}
      trigger="click-hover"
      width={500}
      position="bottom-start"
    >

      <Menu.Target>
        <Button leftSection={<IconMenuDeep size={20} />} className="w-fit border border-gray-300 text-black rounded-none hidden md:grid lg:grid">Categories</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Flex direction="column" className="gap-[2px]">
          {categories.map((category) => {
            if (category.sub) {
              return <Menu
                loop={false}
                withinPortal={false}
                trapFocus={false}
                trigger="click-hover"
                width={500}
                position="right-start"
              >
                <Menu.Target>
                  <Menu.Item className="w-full flex font-semibold text-black" rightSection={<IconArrowRight size={20} />}>{category.name}</Menu.Item>
                </Menu.Target>


                <Menu.Dropdown>
                  {category?.sub?.map((subCategory) =>
                    <Menu.Item>
                      {subCategory.name}
                    </Menu.Item>
                  )}

                </Menu.Dropdown>
              </Menu>
            }
            return <Menu.Item className="font-semibold">{category.name}</Menu.Item>
          })}
        </Flex>
      </Menu.Dropdown>
    </Menu>
  </Flex>
}
