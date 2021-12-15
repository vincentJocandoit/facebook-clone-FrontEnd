import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "styled-components";
import Main from "../pages/Main";
import { Route } from "react-router";
import { history } from "../redux/configureStore";
import GlobalStyles from "./GlobalStyles";
import theme from "./theme";

import CommentList from "../components/CommentList.jsx";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import MyPage from "../pages/MyPage";

function App() {
  let a = true;
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <GlobalStyles />
        {a ? (
          <Route exact path="/main" component={Main} />
        ) : (
          <Route exact path="/" component={SignIn} />
        )}
        <Route exact path="/signup" component={SignUp} />

        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/test" component={CommentList} />
      </ConnectedRouter>
    </ThemeProvider>
  );
}

export default App;
