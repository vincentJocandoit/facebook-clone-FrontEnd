import axios from "axios";

const USER_TOKEN = localStorage.getItem("token");

const api = axios.create({
  baseURL: "http://3.34.190.187:3000/",
  // headers: { authorization: `Bearer ${USER_TOKEN}` },
  // headers: {
  //   "content-type": "application/json;charset=UTF-8",
  //   accept: "application/json,",
  // },
  // withCredentials: true,
});

api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${USER_TOKEN}`;
    return config;
  },
  function (error) {
    console.log("err");
    return Promise.reject(error);
  }
);

export const apis = {
  login: (id, pw) =>
    api.post("/api/login", {
      userEmail: id,
      password: pw,
    }),
  signup: (id, pw, name) =>
    api.post("/api/register", {
      userEmail: id,
      userName: name,
      password: pw,
    }),

  //Post
  // 게시물 불러오기
  getPost: () => api.get("/api/post"),
  // 게시물 작성하기
  addPost: (contents) => api.post("", contents),
  // 게시물 수정하기
  editPost: (id, contents) => api.put("", contents),
  // 게시물 삭제하기
  delPost: (postId) => api.delete(`/api/post/:postId`),
};
