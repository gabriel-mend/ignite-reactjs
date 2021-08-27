import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps {
  name: string
  link?: string
  icon: ElementType
  href: string
}

export function NavLink ({ link, name, icon, href }: NavLinkProps) {
  return(
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" href={link}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{name}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}