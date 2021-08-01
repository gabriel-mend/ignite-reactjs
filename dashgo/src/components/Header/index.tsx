import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header () {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      marginX="auto"
      marginTop="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />
      <Flex
        align="center"
        ml="auto"
      >
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}