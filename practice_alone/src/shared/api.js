import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.124.131.7",
  headers: {
    "content-type": "application/json;charset=UTF-8", // 자바스크립트는 json형태로 받아와야 한다.
    accept: "application/json",
  },
});
// Tip. html form 태그를 사용하여 post 방식으로 요청하거나, jQuery의 ajax 등의 요철을 할때
// default Content-Type은 'application/json,'이 아니라 'application/x-www-form-urlencoded'다.

// interceptors의 역할 => then이나 catch로 처리되기 전
// 요청(request)이나 응답(response)을 가로채 어떠한 작업을 수행할 수 있게 한다. 참고 (https://yamoo9.github.io/axios/guide/interceptors.html)
instance.interceptors.request.use(function (config) {
  const accessToken = sessionStorage.user_token; // 우리는 로컬스토리지에 저장하기로 했음!
  config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`; // header에 토큰값을 넣는다 => header에 토큰값이 있어 앞으로 request를 자유자재로 할 수 있다.
  return config;
});

// 만약 위의 방법이 되지 않을시엔 (https://velog.io/@kyh196201/HTTP-%ED%97%A4%EB%8D%94-%ED%86%A0%ED%81%B0-%EC%84%A4%EC%A0%95-axios-%EC%9D%B8%ED%84%B0%EC%85%89%ED%84%B0)
// 위 사이트의 (4) 부분 참고해보기

/* interceptors의 형태 */
//  xxx.interceptors.request.use(funcion (config){
//  요청을 보내기 전에 수행할 일
//  return config;
//  });

// 데이터 요청 to 서버
export const userApi = {
  login: (username, password) => instance.post('/api/login', { username: username, password: password }),
  join: (username, password, passwordCheck, nickName) => instance.post('/api/register', { username: username, password: password, passwordCheck: passwordCheck,nickName: nickName }),

}

export const postApi = {
  writePost: ()=> instance.post('/api/post'),
  showPost: (userId) => instance.post('/api/showpost'),
  editPost: (postId) => instance.put(`/api/post/${postId}`),
  deletePost: (postId)=> instance.delete('/api/post'),
}

export const likeApi = {
  likePost: (postId,userid) => instance.get('/api/like'),
}