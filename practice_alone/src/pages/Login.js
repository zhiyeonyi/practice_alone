import React, { useContext } from "react";
import { Text, Input, Grid, Button } from "../elements";
import { useDispatch, useSelector } from "react-redux";
import user, {actionCreators as userActions} from "../redux/modules/user";
import { IsLoginContext } from "../shared/IsLoginContext";
import { useEffect,useState } from "react";

const Login = (props) => {

  const dispatch = useDispatch();
  // const {setIsLogin} = useContext(IsLoginContext)

  const loading = useSelector((state) => state.user.is_loading)
  const loginFail = useSelector((state) => state.user.is_failure)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeUsername = (e) => {
    setUsername(e.target.value);
    console.log(username)
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
  }


  const login = () => {
    if(username === "" || password === ""){
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
    dispatch(userActions.logInDB(username, password))
    // setIsLogin(true)
  }

  return (
    <React.Fragment>
       <Grid padding={16}>
                <Text type="heading">로그인 페이지</Text>
            </Grid>
            <Grid padding={16}>
                <Input label="아이디" value={username} _onChange={changeUsername} placeholder="이메일을 입력하세요."/>
                <Input label="패스워드" value={password} _onChange={changePassword} type="password" placeholder="비밀번호를 입력하세요."/>
            </Grid>

            <Button text="로그인하기" _onClick={() => {console.log("로그인했어"); login();}}></Button>
    </React.Fragment>
  );
}; 

export default Login;