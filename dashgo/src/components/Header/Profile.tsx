import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile () {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Gabriel Mendonça</Text>
        <Text color="gray.300" fontSize="small">crowofcode@gmail.com</Text>
      </Box>
      <Avatar size="md" name="Gabriel Mendonça">

      </Avatar>
    </Flex>
  )
}