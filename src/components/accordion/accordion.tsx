import { Box, Text } from "@mantine/core"
import { ReactNode } from "react"

interface IAccordion {
  label: string
  children: ReactNode
}

export const Accordion = ({ children, label }: IAccordion) => {
  return <Box>
    <Text className="text-2xl font-semibold mb-4">{label}</Text>
    {children}
  </Box>
}
