"use client";

import { Fragment, useState } from "react";
import { ActionIcon, Button, Drawer, Flex, Grid, Text } from "@mantine/core";
import { LeftSideFilter } from "@/components/left-side-filter/left-side-filter";
import {
  IconFilter,
  IconLayoutGrid,
  IconLayoutList,
} from "@tabler/icons-react";
import { Categories } from "@/components/categories";
import { GridCard } from "@/components/grid-card";
import { useDisclosure } from "@mantine/hooks";

export default function ModaCategoryPage() {
  const [filterByCategory, setFilterByCategory] = useState<
    { id: number; name: string; isActive: boolean }[]
  >([
    { id: 8, name: "Мужская одежда", isActive: false },
    { id: 9, name: "Женская одежда", isActive: false },
    { id: 10, name: "Обувь", isActive: false },
    { id: 11, name: "Аксессуары", isActive: false },
    { id: 12, name: "Спортивная одежда", isActive: false },
  ]);
  const [filterByBrands, setFilterByBrands] = useState<
    { id: number; name: string; isActive: boolean }[]
  >([
    { id: 31, name: 'Ralph Lauren', isActive: false },
    { id: 32, name: 'Hugo Boss', isActive: false },
    { id: 33, name: 'Giorgio Armani', isActive: false },
    { id: 34, name: 'Calvin Klein', isActive: false },
    { id: 35, name: 'Burberry', isActive: false },
    { id: 36, name: 'Chanel', isActive: false },
    { id: 37, name: 'Gucci', isActive: false },
    { id: 38, name: 'Versace', isActive: false },
    { id: 39, name: 'Prada', isActive: false },
    { id: 40, name: 'Dolce & Gabbana', isActive: false },
    { id: 41, name: 'Nike', isActive: false },
    { id: 42, name: 'Adidas', isActive: false },
    { id: 43, name: 'Puma', isActive: false },
    { id: 44, name: 'Converse', isActive: false },
    { id: 45, name: 'Reebok', isActive: false },
    { id: 46, name: 'Louis Vuitton', isActive: false },
    { id: 47, name: 'Hermès', isActive: false },
    { id: 48, name: 'Tiffany & Co.', isActive: false },
    { id: 49, name: 'Cartier', isActive: false },
    { id: 50, name: 'Fendi', isActive: false },
    { id: 51, name: 'Nike', isActive: false },
    { id: 52, name: 'Adidas', isActive: false },
    { id: 53, name: 'Puma', isActive: false },
    { id: 54, name: 'Converse', isActive: false },
    { id: 55, name: 'Reebok', isActive: false },
    { id: 56, name: 'Under Armour', isActive: false },
    { id: 57, name: 'Lululemon', isActive: false },
    { id: 58, name: 'Columbia Sportswear', isActive: false },
    { id: 59, name: 'The North Face', isActive: false },
    { id: 60, name: 'Patagonia', isActive: false }
  ]);

  const [filterByRatings, setFilterByRatings] = useState<
    { id: number; value: number; isActive: boolean }[]
  >([
    { id: 1, isActive: false, value: 5 },
    { id: 2, isActive: false, value: 4 },
    { id: 3, isActive: false, value: 3 },
    { id: 4, isActive: false, value: 2 },
  ]);

  const [view, setView] = useState<"grid" | "list">("grid");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Fragment>
      <Flex
        direction="column"
        className="lg:px-[250px] md:px-[40px] sm:px-0 overflow-x-hidden"
      >
        <Grid className="mb-4">
          <Grid.Col span={{ lg: 3, sm: 12 }} className="">
            <Categories />
            <LeftSideFilter
              filterByCategory={{
                data: filterByCategory,
                onChange: () => { },
              }}
              filterByBrands={{
                data: filterByBrands,
                onChange: () => { },
              }}
              filterByCondition={{
                active: true,
                onChange: () => { },
              }}
              filterByPrice={{
                active: true,
                onClick: (price) => { },
              }}
              filterByRatings={{
                data: filterByRatings,
                onChange: () => { },
              }}
              className="hidden md:block lg:block"
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 9, sm: 12 }} className="mt-0 md:mt-4">
            <Flex
              className="border border-gray-300 md:rounded-md rounded-none p-2"
              align={"center"}
              justify={"space-between"}
            >
              <Text className="hidden md:block">
                {"Найдено 192 товара в категории"} <strong>Мода</strong>
              </Text>
              <Button
                onClick={open}
                className="block md:hidden"
                leftSection={<IconFilter size={20} />}
                variant="default"
              >
                Filter
              </Button>
              <Flex
                className="border border-gray-300 rounded-md p-2"
                justify={"space-between"}
                gap={"sm"}
              >
                <ActionIcon
                  onClick={() => setView("grid")}
                  bg={view == "grid" ? "blue" : ""}
                >
                  <IconLayoutGrid
                    size={20}
                    color={view == "grid" ? "#fff" : "#000"}
                  />
                </ActionIcon>
                <ActionIcon
                  onClick={() => setView("list")}
                  bg={view == "list" ? "blue" : ""}
                >
                  <IconLayoutList
                    size={20}
                    color={view == "list" ? "#fff" : "#000"}
                  />
                </ActionIcon>
              </Flex>
            </Flex>
            <br />
            <Flex
              gap="lg"
              className="flex-wrap justify-between md:px-0 px-2 overflow-x-hidden"
            >
              <GridCard view={view} />
              <GridCard view={view} />
              <GridCard view={view} />
              <GridCard view={view} />
            </Flex>
          </Grid.Col>
        </Grid>
      </Flex>
      <Drawer
        classNames={{
          header: "border-b border-gray-300",
        }}
        className="block md:hidden lg:hidden"
        opened={opened}
        onClose={close}
        title="Filters"
      >
        <LeftSideFilter />
        <br />
        <Button className="bg-white border border-gray-300 w-full text-blue-500 h-[50px] sticky bottom-3">
          Apply
        </Button>
      </Drawer>
    </Fragment>
  );
}
