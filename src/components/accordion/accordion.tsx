import { Box, Text } from "@mantine/core"
import { ReactNode } from "react"

interface IAccordion {
  label: string
  children: ReactNode
}

export const Accordion = ({ children, label }: IAccordion) => {
  return <Box className="mb-4">
    <Text className="text-[20px] font-semibold mb-4">{label}</Text>
    <Box>
      {children}
    </Box>
  </Box>
}
