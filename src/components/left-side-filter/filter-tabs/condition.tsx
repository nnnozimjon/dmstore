import { Flex, Radio } from "@mantine/core";

interface Props {
  onChange?: (state: string) => void;
}
export const Condition = ({ onChange = () => { } }: Props) => {
  return (
    <Flex direction={"column"} gap={"md"}>
      <Flex align={"center"} gap={"lg"}>
        <Radio.Group defaultValue="any" onChange={onChange}>
          <Flex direction={"column"} gap={"sm"}>
            <Radio label="Любой" value={"any"} />
            <Radio label="Совершенно новый" value={"brand-new"} />
            <Radio label="Б/У" value={"refurbished"} />
          </Flex>
        </Radio.Group>
      </Flex>
    </Flex>
  );
};
