import { Box, Text, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface INavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({ title, children }: INavSectionProps) {
    return (
        <Box>
            <Text fontWeight="bold" color="green.400" fontSize="small">{title}</Text>
            <Stack spacing="4" mt="8" align="stretch">
                {children}
            </Stack>
        </Box>
    )
}