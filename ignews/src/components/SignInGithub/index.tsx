import styles from './styles.module.scss'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInGithub () {
  const isUsedLoggedIn = true

  return isUsedLoggedIn ? (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      Gabriel Mendonça
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ): (
    <button 
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#" />
      Sign in with Github
    </button>
  )
}