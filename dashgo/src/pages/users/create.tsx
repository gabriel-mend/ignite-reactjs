import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

interface createUserFormData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No minimo 6 caracteres'),
  password_confirmation: yup.string().required('Confirmar senha obrigatória').oneOf([
    null,
    yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CreateUser () {
  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<createUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }


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

        <Box flex="1" borderRadius={8} bgColor="gray.800" p={["6","8"]} as="form" onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="name" label="Nome Completo" {...register('name')} error={errors.name}/>
              <Input name="email" label="E-mail" type="email" {...register('email')} error={errors.email}/>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="password" label="Senha" type="password" {...register('password')} error={errors.password}/>
              <Input name="password_confirmation" label="Confirmar senha" type="password" {...register('password_confirmation')} error={errors.password_confirmation}/>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}