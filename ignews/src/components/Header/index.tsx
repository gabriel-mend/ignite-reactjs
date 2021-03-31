import { SignInGithub } from '../SignInGithub'
import styles from './styles.module.scss'

export function Header () {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt=""/>
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInGithub />
      </div>
    </header>
  )
}