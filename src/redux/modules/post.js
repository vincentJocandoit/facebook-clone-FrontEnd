import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const POST_GET = " POST_GET";
const POST_ADD = " POST_ADD";
const POST_DELETE = " POST_DELETE";
const POST_UPDATE = " POST_UPDATE";

const postGet = createAction(POST_GET, (posts) => ({ posts }));
const postAdd = createAction(POST_ADD, (post) => ({ post }));
const postDelete = createAction(POST_DELETE, (post) => ({ post }));
const postUpdate = createAction(POST_UPDATE, (post) => ({ post }));

const initialState = [
  {
    postId: 0,
    content: "화이팅입니다~~",
    img: "https://t1.daumcdn.net/cfile/tistory/99C938355DD29C6C07",
    userId: "superjonghoon",
    createAt: "2021-12-13 10:00:00",
    username: "조종훈",
  },
  {
    postId: 1,
    content: "으쌰으쌰~~",
    img: "https://t1.daumcdn.net/cfile/tistory/99C938355DD29C6C07",
    userId: "herosangil",
    createAt: "2021-12-14 10:00:00",
    username: "정상일",
  },
  {
    postId: 2,
    content: "호롤롤로~~",
    img: "https://t1.daumcdn.net/cfile/tistory/99C938355DD29C6C07",
    userId: "yodataesoo",
    createAt: "2021-12-15 10:00:00",
    username: "강태수",
  },
];

const postAddAction = (post) => {
  return function (dispatch, getState, { history }) {
    dispatch(postAdd(post));
    history.push("/");
  };
};

export default handleActions(
  {
    [POST_GET]: (state, action) =>
      produce(state, (draft) => {
        console.log(action, "POST_GET");
      }),
    [POST_ADD]: (state, action) =>
      produce(state, (draft) => {
        console.log(action, "POST_ADD");
        draft.post.unshift(action.payload.content);
      }),
    [POST_DELETE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action, "POST_DELETE");
      }),
    [POST_UPDATE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action, "POST_UPDATE");
      }),
  },
  initialState
);

const actionCreators = {
  postGet,
  postAdd,
  postDelete,
  postUpdate,
};

export { actionCreators };
