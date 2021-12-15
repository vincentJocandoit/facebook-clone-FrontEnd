import { createAction, handleActions } from "redux-actions"
import { produce } from "immer"

// import {apis}  from "../../lib/axios";
import { apis } from "../../lib/axios";
const GET_POST = "GET_POST"
const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"
const DELETE_POST = "DELETE_POST"

const getPost = createAction(GET_POST, (post_list, post_like) => ({
    post_list,
    post_like,
}))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }))
const editPost = createAction(UPDATE_POST, (post_id) => ({ post_id }))

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
        createAt: "2021-12-15 10:00:00",
        username: "강태수",
    },
]

const postAddAction = (post) => {
    return function (dispatch, getState, { history }) {
        dispatch(addPost(post))
        history.push("/")
    }
}

const getPostAPI = () => {
    return function (dispatch, getState, { history }) {
        apis.getPost(getPost())
            .then((res) => {
                console.log(res.data)
                const post_ID = res.data.postId
                const post_content = res.data.content
                const post_img = res.data.img
                const post_usrId = res.data.userId
                const post_createAt = res.data.createAt
                const post_userName = res.data.username
                dispatch(getPost(post_ID, post_content, post_img, post_usrId, post_createAt, post_userName))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const addContentToAxios = (content) => async (dispatch) => {
    console.log("콘텐트추가", content)
    try {
        const { data } = await apis.POST("/post", { content })
        console.log("콘텐트데이터", data)
    } catch (error) {
        console.error(error)
    }
    dispatch(addPost(content))
}

export default handleActions(
    {
        [GET_POST]: (state, action) =>
            produce(state, (draft) => {
                console.log(action, "POST_GET")
            }),
        [ADD_POST]: (state, action) =>
            produce(state, (draft) => {
                console.log(action, "POST_ADD")
                draft.post.unshift(action.payload.content)
            }),
        [DELETE_POST]: (state, action) =>
            produce(state, (draft) => {
                console.log(action, "POST_DELETE")
            }),
        [UPDATE_POST]: (state, action) =>
            produce(state, (draft) => {
                console.log(action, "POST_UPDATE")
            }),
    },
    initialState
)

const actionCreators = {
    addPost,
    deletePost,
    editPost,
    getPostAPI,
}

export { actionCreators }
