import { Accordion } from "@mantine/core";

export const LeftSideFilter = () => {
  const filterTypes = [
    {
      label: "Category",
      content: <></>,
    },
    {
      label: "Brands",
      content: <></>,
    },
    {
      label: "Features",
      content: <></>,
    },
    {
      label: "Price Range",
      content: <></>,
    },
    {
      label: "Condition",
      content: <></>,
    },
    {
      label: "Ratings",
      content: <></>,
    },
  ];

  return (
    <Accordion defaultChecked={true}>
      {filterTypes?.map((filter) => (
        <Accordion.Item value={filter.label} defaultChecked={true}>
          <Accordion.Control>{filter.label}</Accordion.Control>
          <Accordion.Panel>{filter.content}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
