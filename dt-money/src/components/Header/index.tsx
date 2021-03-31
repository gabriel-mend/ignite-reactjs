import LogoImg from '../../assets/logo.svg'
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header ({ onOpenNewTransactionModal }: HeaderProps) {
  const { handleChangeTheme } = useThemeSwitcher()
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dt money"/>
        <div>
          <button onClick={handleChangeTheme}>Mudar tema</button>
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
        </div>
      </Content>
    </Container>
  )
}