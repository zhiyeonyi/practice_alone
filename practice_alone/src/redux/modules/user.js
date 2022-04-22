import { createAction, handleActions } from 'redux-actions'
import { produce } from 'immer'
import { setCookie, getCookie, deleteCookie } from '../../shared/cookie'
// import { userApi } from '../../shared/api'
// import { useContext } from 'react'
// import { IsLoginContext } from '../../shared/IsLoginContext'

const LOG_IN = "LOG_IN"
const LOG_OUT = 'LOG_OUT'
const GET_USER = 'GET_USER'
// const SET_USER = 'SET_USER'
// const SET_LOGIN = 'SET_LOGIN'
// const INIT_FIRST_LOGIN = 'SET_FIRST_LOGIN'
// const LOADING = 'LOADING'
// const FAIL_LOGIN = 'FAIL_LOGIN'

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }))
const getUser = createAction(GET_USER, (user) => ({ user }))
// const setUser = createAction(SET_USER, (user) => ({ user }))
// const setLogin = createAction(SET_LOGIN, (user_info) => ({ user_info }))
// const initFirstLogin = createAction(INIT_FIRST_LOGIN, (init) => ({ init }))
// const loading = createAction(LOADING, (is_loading) => ({ is_loading }))
// const failLogin = createAction(FAIL_LOGIN, (is_failure) => ({ is_failure }))

const initialState = {
  user: null,
  is_login: false,
//   user_info: null,
//   is_first: false,
//   is_loading: false,
//   is_failure: false,
}

// const joinDB = (username, nickname, password, passwordCheck) => {
//   return function (dispatch, getState, { history }) {
//     dispatch(loading(true))
//     userApi
//       .join(username, nickname, password, passwordCheck)
//       .then((res) => {
//         history.push('/login')
//         dispatch(loading(false))
//       })
//       .catch((err) => {
//         dispatch(loading(false))
//         console.log('회원가입 문제 발생', err.response)
//       })
//   }
// }

// const logInDB = (username, password) => {
//   return function (dispatch, getState, { history }) {
//     dispatch(loading(true))
//     userApi
//       .login(username, password)
//       .then((res) => {
//         sessionStorage.setItem('token', res.headers.authorization)
//         sessionStorage.setItem('username', res.data.data.username)
//         sessionStorage.setItem('nickname', res.data.data.nickname)
//         sessionStorage.setItem('id', res.data.data.userId)

//         dispatch(setUser({ username: res.data.data.username, nickname: res.data.data.nickname }))
//         history.replace('/')
//       })
//       .catch((err) => {
//         console.log(err)
//         dispatch(loading(false))
//         dispatch(failLogin(true))
//       })
//   }
// }

// const logOutDB = () => {
//   return function (dispatch, getState, { history }) {
//     sessionStorage.removeItem('token')
//     sessionStorage.removeItem('username')
//     sessionStorage.removeItem('nickname')
//     sessionStorage.removeItem('id')
//     dispatch(loading(false))
//     dispatch(logOut())
//     history.replace('/')
//   }
// }

// const loginCheckDB = () => {
//   return function (dispatch, getState, { history }) {
//     const username = localStorage.getItem('username')
//     const tokenCheck = document.cookie
//     dispatch(loading(false))

//     if (tokenCheck) {
//       dispatch(setUser({ userId: username }))
//     } else {
//       dispatch(logOut())
//     }
//   }
// }

// const SetLogin = () => {
//   return function (dispatch, getState, { history }) {
//     const username = localStorage.getItem('username')
//     const userId = localStorage.getItem('id')
//     const token = document.cookie.split('=')[1]
//     dispatch(loading(false))

//     if (username !== null && token !== '') {
//       dispatch(loading(false))
//       dispatch(setLogin({ username: username, userId: userId }))
//     }
//   }
// }

//reducer
export default handleActions(
  {
    // [SET_USER]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.user = action.payload.user
    //     draft.is_login = true
    //     draft.is_first = true
    //     draft.is_loading = false
    //     draft.is_failure = false
    //   }),
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
				draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null
        draft.is_login = false
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
      }),
    
  },
  initialState
)

const actionCreators = {
  logIn,
  logOut,
  getUser,
  
}

export { actionCreators }