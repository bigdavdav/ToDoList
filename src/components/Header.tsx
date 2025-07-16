import styles from './Header.module.css'
import logo from '../assets/Logo.png'

export function Header() {
  return (
    <header className={ styles.header }>
      <img className={ styles.logo } src={ logo } alt="To-Do logo" />
    </header>
  )
}