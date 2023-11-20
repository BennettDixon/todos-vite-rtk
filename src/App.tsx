import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { TodosList } from './features/todos/TodosList'
import { ThemeProvider } from 'styled-components'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { StyleTheme, getActiveThemeState, getMemoizedActiveTheme, updateTheme } from './features/themes/themeSlice'
import ITheme from './features/themes/ITheme'
import GlobalStyle from './styles/globalStyles'

function App() {
  const theme: ITheme = useAppSelector(getMemoizedActiveTheme)
  const themeState: StyleTheme = useAppSelector(getActiveThemeState)
  const dispatch = useAppDispatch()
  const toggleTheme = () => {
    const newTheme = themeState === StyleTheme.light ? StyleTheme.dark : StyleTheme.light
    dispatch(updateTheme(newTheme))
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="card">
          <button onClick={toggleTheme.bind(this)}
          >
            Toggle Light/Dark mode
          </button>
          <h2>Todo list: </h2>
          <TodosList />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
