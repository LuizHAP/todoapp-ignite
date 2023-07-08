import todoAppLogo from '../../assets/todoapp-logo.svg';

import styles from './index.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={todoAppLogo} alt="Logotipo do TodoApp" />
    </header>
  )
}