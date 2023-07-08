import './global.css'
import styles from './App.module.css'

import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  return (
    <main>
      <Header />
      <section className={styles.wrapper}>
        <TodoList />
      </section>
    </main>
  )
}

export default App
