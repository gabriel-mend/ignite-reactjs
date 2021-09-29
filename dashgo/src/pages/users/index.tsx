import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

import { useQuery } from 'react-query'

export default function UserList () {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    return data
  })


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true 
  })

  useEffect(() => {
    
  }, [])
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        mx="auto"
        px="6"
        maxW={1480}
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bgColor="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center"> 
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="16"/>}
              >
                Criar novo usuário
              </Button>
            </Link>
          </Flex>
          
          { isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">Falha ao carregar usuários</Flex>
          ): (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" w="8">
                      <Checkbox colorScheme="pink"/>
                    </Th>
                    <Th>usuário</Th>
                    
                    { isWideVersion && (<Th>Data de cadastro</Th>) }

                    <Th w="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink"/>
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Gabriel Mendonça</Text>
                        <Text fontSize="sm" color="gray.300">crowofcode@gmail.com</Text>
                      </Box>
                    </Td>
                    { isWideVersion && (<Th>04 de abril de 2021</Th>) }
                  </Tr>
                  <Tr>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink"/>
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Gabriel Mendonça</Text>
                        <Text fontSize="sm" color="gray.300">crowofcode@gmail.com</Text>
                      </Box>
                    </Td>
                    { isWideVersion && (<Th>04 de abril de 2021</Th>) }
                  </Tr>
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}