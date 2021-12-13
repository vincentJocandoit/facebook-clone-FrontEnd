import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components'
import Main from '../pages/Main'
import { Route } from 'react-router'
import { history } from '../redux/configureStore'
import GlobalStyles from './GlobalStyles'
import theme from './theme'

import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import MyPage from '../pages/MyPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <GlobalStyles />
        <Route exact path="/" component={Main} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/mypage" component={MyPage} />
      </ConnectedRouter>
    </ThemeProvider>
  )
}

export default App
