import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps {
  name: string
  link?: string
  icon: ElementType
}

export function NavLink ({ link, name, icon }: NavLinkProps) {
  return(
    <Link display="flex" align="center" href={link}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{name}</Text>
    </Link>
  )
}