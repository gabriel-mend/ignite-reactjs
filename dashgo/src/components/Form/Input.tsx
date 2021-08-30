import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps } from '@chakra-ui/react' 

// forwardRef: Serve para passar a ref para um componente e receber no componente base como segundo parâmetro
// ForwardRefRenderFunction: Serve para tipar a ref e receber tipagem dos outros parâmetros
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> 
  = ({ name, label, ...rest }, ref) => {
  return(
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900"
        }}
        ref={ref}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)