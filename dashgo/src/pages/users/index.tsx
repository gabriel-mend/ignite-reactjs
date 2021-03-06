import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue, Link } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";


export default function UserList ({ users, totalCount }) {
  const [page, setPage] = useState(1)

  const { data, isLoading, isFetching, error } = useUsers(page, {
    initialData: { users, totalCount }
  })

  async function handlePrefecthUser(id: number) {
    await queryClient.prefetchQuery(['user', id], async () => {
      const response = await api.get(`/users/${id}`)

      return response.data
    }, {
      staleTime: 1000 * 60 * 10
    })
  }

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
            <Heading size="lg" fontWeight="normal">
              Usuários 

              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>

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
                  {data.users.map(user => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="pink"/>
                      </Td>
                      <Td>
                        <Box>
                          <Link color="purple.400" onMouseEnter={() => handlePrefecthUser(Number(user.id))}>
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text fontSize="sm" color="gray.300">{user.email}</Text>
                        </Box>
                      </Td>
                      { isWideVersion && (<Th>{user.createdAt}</Th>) }
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination 
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { users, totalCount } = await getUsers(1)

  return {
    props: {
      users,
      totalCount
    }
  }
}