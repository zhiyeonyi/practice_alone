import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { postApi } from "../../shared/api";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const LOADING = 'LOADING'


const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }))


const initialState = {
    list: [],
}

// 게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어둡시다! :)
const initialPost = {
  user_info: {
		id: 0,
    user_name: "praise",
    user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  },
  image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

//middleware
const getPostDB = () => {
    return function (dispatch, getState, { history }) {
        postApi
        .showPost()
        .then((res) => {
          const post_list = res.data.data
          console.log(post_list)
          let result = res.data.data.slice()
          if (result.length === 0) {
            dispatch(loading(false))
            return
          }
          dispatch(setPost(post_list, result))
        })
        .catch((err) => {
          console.log('게시판을 불러오기 문제 발생', err.response.data)
        })
    };
  };



// reducer
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
          
        }),
  
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            
        })
    },
    initialState
  );

  const actionCreators = {
    setPost,
    addPost,
    getPostDB,
  };
  
  export { actionCreators };