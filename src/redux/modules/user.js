import { handleActions, createAction } from "redux-actions";
import { apis } from "../../lib/axios";
import { produce } from "immer";

//Action
const LOG_IN = "LOG_IN";
const SIGN_IN = "SIGN_IN";

//Action creator
const LogIn = createAction(LOG_IN, (user) => ({ user }));
const SignIn = createAction(SIGN_IN, (user) => ({ user }));

//middleware
const logInDB = (email, password) => {
  console.log("logInDB 시작");
  return function (dispatch, getState, { history }) {
    console.log(email);
    console.log(password);
    apis
      .login(email, password)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        dispatch(LogIn({ userEmail: res.data.userEmail }));
        history.replace("/main");
      })
      .catch((err) => {
        console.log(err);
        window.alert("뭔가 연결이 에바쎄바인것 같아요~");
      });
  };
};

const SignInDB = (email, password, username) => {
  console.log("SignInDB 시작");
  return function (dispatch, getState, { history }) {
    console.log(email);
    console.log(password);
    console.log(username);
    apis.signup(email, password, username);
    alert("회원가입을 축하합니다", "로그인 페이지로 이동합니다", "success")
      .then(history.push("/"))
      .catch((err) => {
        console.log(err);
        window.alert("뭔가 연결이 에바쎄바인것 같아요~");
      });
  };
};

//initialstate
const initialState = {
  user: null,
};

export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
  },
  initialState
);

const actionCreators = {
  logInDB,
  SignInDB,
};

export { actionCreators };
