const mockPostList = [
  {
    postId: 0,
    content: '화이팅입니다~~',
    img: 'https://t1.daumcdn.net/cfile/tistory/99C938355DD29C6C07',
    userId: 'superjonghoon',
    createAt: '2021-12-13 10:00:00',
    username: '조종훈',
  },
  {
    postId: 1,
    content: '으쌰으쌰~~',
    img: 'https://t1.daumcdn.net/cfile/tistory/99C938355DD29C6C07',
    userId: 'herosangil',
    createAt: '2021-12-14 10:00:00',
    username: '정상일',
  },
  {
    postId: 2,
    content: '호롤롤로~~',
    img: 'https://t1.daumcdn.net/cfile/tistory/99C938355DD29C6C07',
    userId: 'yodataesoo',
    createAt: '2021-12-15 10:00:00',
    username: '강태수',
  },
]

const mockCommentList = [
  {
    postId: 0,
    commentId: 0,
    userId: 'herosangil',
    content: '종훈님 화팅!!',
  },
  {
    postId: 0,
    commentId: 1,
    userId: 'yodataesoo',
    content: '상일님도 화팅!!',
  },
  {
    postId: 1,
    commentId: 0,
    userId: 'superjonghoon',
    content: '상일님 화팅!!',
  },
  {
    postId: 1,
    commentId: 1,
    userId: 'yodataesoo',
    content: '종훈님도 화팅!!',
  },
  {
    postId: 2,
    commentId: 0,
    userId: 'superjonghoon',
    content: '태수님 화팅!!',
  },
  {
    postId: 2,
    commentId: 1,
    userId: 'herosangil',
    content: '종훈님도 화팅!!',
  },
]

const mockUserList = [
  {
    userId: 'superjonghoon',
    userEmail: 'superjonghoon@naver.com',
    userName: '박종훈',
    hashedPassword: '1234',
  },
  {
    userId: 'herosangil',
    userEmail: 'herosangil@naver.com',
    userName: '정상일',
    hashedPassword: '1234',
  },
  {
    userId: 'yodataesoo',
    userEmail: 'yodataesoo@naver.com',
    userName: '강태수',
    hashedPassword: '1234',
  },
]

export { mockPostList, mockCommentList, mockUserList }
