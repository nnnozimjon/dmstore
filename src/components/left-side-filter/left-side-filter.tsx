import { Accordion } from "@mantine/core";
import {
  Brands,
  Category,
  Condition,
  Features,
  PriceRanges,
  Ratings,
} from "./filter-tabs";
import { ChangeEventHandler } from "react";

interface ICategory {
  id: number | string;
  name: string;
  isActive: boolean;
}

interface filtersType {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  data: ICategory[];
}
interface LeftSideFilterProps {
  className?: string;
  filterByCategory?: filtersType;
  filterByBrands?: filtersType;
  filterByCondition?: {
    active?: boolean;
    onChange?: (state: string) => void;
  };
  filterByRatings?: {
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    data: {
      id: number;
      value: number;
      isActive: boolean;
    }[];
  };
  filterByFeatures?: filtersType;
  filterByPrice?: {
    active: boolean;
    onClick: (price: any) => void;
  };
}

export const LeftSideFilter = ({
  className,
  filterByCategory = {
    data: [],
    onChange: () => { },
  },
  filterByBrands = {
    data: [],
    onChange: () => { },
  },
  filterByCondition = {
    active: false,
    onChange: () => { },
  },
  filterByRatings = {
    data: [],
    onChange: () => { },
  },
  filterByFeatures = {
    data: [],
    onChange: () => { },
  },
  filterByPrice = {
    active: false,
    onClick: () => { },
  },
}: LeftSideFilterProps) => {
  const filterTypes = [
    {
      label: "Category",
      content: filterByCategory.data.length ? (
        <Category
          categories={filterByCategory?.data}
          onChange={filterByCategory?.onChange}
        />
      ) : null,
    },
    {
      label: "Brands",
      content: filterByBrands.data.length ? (
        <Brands
          brands={filterByBrands?.data}
          onChange={filterByBrands?.onChange}
        />
      ) : null,
    },
    {
      label: "Features",
      content: filterByFeatures.data.length ? <Features /> : null,
    },
    {
      label: "Price Range",
      content: filterByPrice.active ? (
        <PriceRanges onClick={(price) => filterByPrice.onClick(price)} />
      ) : null,
    },
    {
      label: "Condition",
      content: filterByCondition.active ? (
        <Condition onChange={filterByCondition.onChange} />
      ) : null,
    },
    {
      label: "Ratings",
      content: filterByRatings.data.length ? (
        <Ratings
          onChange={filterByRatings.onChange}
          ratings={filterByRatings.data}
        />
      ) : null,
    },
  ];

  return (
    <Accordion
      defaultChecked={true}
      defaultValue={[
        "Category",
        "Brands",
        "Features",
        "Price Range",
        "Condition",
        "Ratings",
      ]}
      multiple
      className={className}
    >
      {filterTypes?.map((filter) => {
        if (filter.content == null) {
          return null;
        }

        return (
          <Accordion.Item value={filter.label} defaultChecked={true}>
            <Accordion.Control>{filter.label}</Accordion.Control>
            <Accordion.Panel>{filter.content}</Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
