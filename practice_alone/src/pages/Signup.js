import React from "react";
import { Grid, Text, Input, Button } from "../elements";
import {useDispatch, useSelector} from "react-redux";
import {userApi} from "../shared/api";
import {actionCreators as userActions} from "../redux/modules/user";
import {history} from "../redux/configureStore";

const Signup = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.user.is_loading)

  // 이메일,비번,비번확인,닉네임 확인
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [nickName, setNickName] = React.useState("");


  // 유저네임(이메일) 유효성 검사
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;


  const signup = () => {
    if (username === "" || password === "" || nickName === "") {
      window.alert("빈 칸 없이 채워주세요")
      return;
    }
    
    if (password !== passwordCheck) {
      window.alert("비밀번호가 일치하지 않습니다.")
      return;
    }
    if (!emailRegex.test(username)) {
      window.alert('이메일 형식을 확인해주세요')
      return;
    } else {
      console.log('올바른 형식입니다')
    }

    dispatch(userActions.signupDB(username, nickName, password, passwordCheck))
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="이메일을 입력해주세요."
            _onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={(e) => {
              setPasswordCheck(e.target.value);
              console.log(passwordCheck)
            }}
          />
        </Grid>

        <Button text="회원가입하기" _onClick={signup}></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;