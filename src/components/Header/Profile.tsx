import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Diego Almeida</Text>
        <Text color="gray.300" fontSize="small">diego@email.com</Text>
      </Box>

      <Avatar size="md" name="Diego Almeida" src="https://github.com/diegoalmda.png" />
    </Flex>
  )
}