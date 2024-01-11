"use client";

import { Fragment, useState } from "react";
import { ActionIcon, Button, Flex, Grid, Text } from "@mantine/core";
import { LeftSideFilter } from "@/components/left-side-filter/left-side-filter";
import { IconLayoutGrid, IconLayoutList, IconX } from "@tabler/icons-react";
import { Categories } from "@/components/categories";
import { GridCard } from "@/components/grid-card";

export default function ProductsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <Fragment>
      <Flex direction="column" className="lg:px-[250px] md:px-[40px] sm:px-0 overflow-x-hidden">
        <Categories />
        <Grid className="mb-4">
          <Grid.Col span={{ lg: 3, sm: 12 }} className="">
            <LeftSideFilter />
          </Grid.Col>
          <Grid.Col span={{ lg: 9, sm: 12 }} className="">
            <Flex className="border border-gray-300 rounded-md p-2" align={'center'} justify={'space-between'}>
              <Text>{'12,911 items in'} <strong>Mobile accessory</strong></Text>
              <Flex className="border border-gray-300 rounded-md p-2" justify={'space-between'} gap={'sm'}>
                <ActionIcon onClick={() => setView('grid')} bg={view == 'grid' ? 'blue' : ''}>
                  <IconLayoutGrid size={20} color={view == 'grid' ? '#fff' : '#000'} />
                </ActionIcon>
                <ActionIcon onClick={() => setView('list')} bg={view == 'list' ? 'blue' : ''}>
                  <IconLayoutList size={20} color={view == 'list' ? '#fff' : '#000'} />
                </ActionIcon>
              </Flex>
            </Flex>
            <Flex gap={'md'} className="p-2">
              <Button className="border-blue-400 text-gray-600 font-medium" rightSection={<IconX className="text-gray-500" size={20} />}>Sumsung</Button>
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
    </Fragment>
  );
}
