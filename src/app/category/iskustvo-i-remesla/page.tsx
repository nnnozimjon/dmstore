"use client";

import { Fragment, useState } from "react";
import { ActionIcon, Button, Drawer, Flex, Grid, Text } from "@mantine/core";
import { LeftSideFilter } from "@/components/left-side-filter/left-side-filter";
import { IconFilter, IconLayoutGrid, IconLayoutList, } from "@tabler/icons-react";
import { Categories } from "@/components/categories";
import { GridCard } from "@/components/grid-card";
import { useDisclosure } from "@mantine/hooks";

export default function IskustvoIRemeslaCategoryPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Fragment>
      <Flex direction="column" className="lg:px-[250px] md:px-[40px] sm:px-0 overflow-x-hidden">
        <Grid className="mb-4">
          <Grid.Col span={{ lg: 3, sm: 12 }} className="">
            <Categories />
            <LeftSideFilter className="hidden md:block lg:block" />
          </Grid.Col>
          <Grid.Col span={{ lg: 9, sm: 12 }} className="mt-0 md:mt-4">
            <Flex className="border border-gray-300 md:rounded-md rounded-none p-2" align={'center'} justify={'space-between'}>
              <Text className="hidden md:block">{'Найдено 192 товара в категории'} <strong>Искусство и ремесла</strong></Text>
              <Button onClick={open} className="block md:hidden" leftSection={<IconFilter size={20} />} variant="default">
                Filter
              </Button>
              <Flex className="border border-gray-300 rounded-md p-2" justify={'space-between'} gap={'sm'}>
                <ActionIcon onClick={() => setView('grid')} bg={view == 'grid' ? 'blue' : ''}>
                  <IconLayoutGrid size={20} color={view == 'grid' ? '#fff' : '#000'} />
                </ActionIcon>
                <ActionIcon onClick={() => setView('list')} bg={view == 'list' ? 'blue' : ''}>
                  <IconLayoutList size={20} color={view == 'list' ? '#fff' : '#000'} />
                </ActionIcon>
              </Flex>
            </Flex>
            <br />
            <Flex gap='lg' className="flex-wrap justify-between md:px-0 px-2 overflow-x-hidden">
              <GridCard view={view} />
              <GridCard view={view} />
              <GridCard view={view} />
              <GridCard view={view} />
            </Flex>
          </Grid.Col>
        </Grid>
      </Flex>
      <Drawer classNames={{
        header: 'border-b border-gray-300'
      }} className="block md:hidden lg:hidden" opened={opened} onClose={close} title="Filters">
        <LeftSideFilter />
        <br />
        <Button className='bg-white border border-gray-300 w-full text-blue-500 h-[50px] sticky bottom-3'>
          Apply
        </Button>
      </Drawer>
    </Fragment>
  );
}
