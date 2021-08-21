import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" aling="flex-start">
      <NavSection title="GERAL">
        <NavLink 
          name="Dashboard"
          icon={RiDashboardLine}
        />
        <NavLink 
          name="Usuários"
          icon={RiContactsLine}
        />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink 
          name="Formulários"
          icon={RiInputMethodLine}
        />
        <NavLink 
          name="Automação"
          icon={RiGitMergeLine}
        />
        </NavSection> 
    </Stack>
  )
}