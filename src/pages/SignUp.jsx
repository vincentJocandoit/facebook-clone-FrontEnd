import React from 'react'
import styled from 'styled-components'

import { Grid, Text } from '../elements'  

import { actionCreators } from '../redux/modules/user'
import { useDispatch } from "react-redux";

const SignUp = (props) => {

  const dispatch = useDispatch();

  // 아이디, 비밀번호, 비밀번호 확인
  const [username, setId] = React.useState(""); // 아이디
  const [password, setPwd] = React.useState(""); // 비밀번호
  const [passwordCheck, setPwdCheck] = React.useState(""); // 비밀번호
  // 오류 메세지 상태 저장
  const [idMessage, setIdMessage] = React.useState("");
  const [pwdMessage, setPwdMessage] = React.useState("");
  const [pwdCheckMessage, setPwdCheckMessage] = React.useState("");
  // 아이디 중복 체크
  const [overlap, setOverlap] = React.useState(false);
  const [idCurrent, setIdCurrent] = React.useState();
  const [pwdCurrent, setPwdCurrent] = React.useState();
  // 유효성 검사
  const [isId, setIsId] = React.useState("");
  const [isPwd, setIsPwd] = React.useState("");
  const [isPwdCheck, setIsPwdCheck] = React.useState("");


  // 아이디 유효성 검사
  const idCheck = (e) => {
    setId(e.target.value);
    // 아이디 정규식이 너무 헷갈림 특수기호 -_ 나중에 한번더 확인할 것 !
    const regId = /^[a-zA-Z0-9]+([-_]|[a-zA-Z0-9]){2,19}$/g;
    const idCurrnet = e.target.value;
    setIdCurrent(idCurrnet);
    if (!regId.test(idCurrent)) {
      setIdMessage("틀렸어용~영문, 숫자, -_를 조합하여 3~20자로 만들어주세요!");
      setIsId(false);
    } else {
      setIdMessage("올바른 아이디 형식이에요 :)");
      setIsId(true);
    }
  };

  // 비밀번호 유효성 검사
  const pwdCheck = (e) => {
    setPwd(e.target.value);
    const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{3,20}$/;
    const pwdCurrent = e.target.value;
    setPwdCurrent(pwdCurrent);
    if (!regPwd.test(pwdCurrent)) {
      setPwdMessage("틀렸어용~영문, 숫자를 조합하여 3~20자로 만들어주세요!");
      setIsPwd(false);
    } else {
      setPwdMessage("올바른 비밀번호에요 :)");
      setIsPwd(true);
    }
  };



  return(
    <RegisterContainer>
        <Text>가입하기</Text>
        <Text>빠르고 쉽습니다</Text>
      <Hr3 />
      <TextArea>
        <InputFn placeholder= "성"/>
        <InputLn placeholder= "이름(성은 제외)"/>
        <InputNumber placeholder= "이메일" onClick={idCheck} />
        {username.length > 0 && (
              <>
                <br />
                <span>
                  {idMessage}
                </span>
              </>
            )}
            <br />
        <InputPass placeholder= "새 비밀번호" onClick={pwdCheck}/>
        {password.length > 0 && (
                <>
                  <br />
                  <span size="3px" className={`${isPwd ? "success" : "error"}`}>
                    {pwdMessage}
                  </span>
                </>
              )}
        <ButtonLog >
            <Text color="white" fontSize="19px" bold>새 계정 만들기</Text>
        </ButtonLog>
      </TextArea>
    </RegisterContainer>
  )
}

const Hr3 = styled.hr`
  background-color: black;

`

const RegisterContainer = styled.div`
  width: 480px;
  height: 500px;
  background-color: white;
  box-shadow: 3px 4px 19px -7px #000000;
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  float: left;
  z-index: 10;
`


const FormBody = styled.form`
`

const TextArea = styled.div` 
`

const InputFn = styled.input`
  border-radius: 5px;
  border: 1px solid #ddc6b6;
  width: 40%;
  padding: 16px 10px;
  box-sizing: border-box;
  background: #fff;
  transition: all 0.4s;
  &:focus {
    border: 1.5px solid #1877f2;
  }
  float: left;
`

const InputLn = styled.input`
  border-radius: 5px;
  border: 1px solid #ddc6b6;
  width: 40%;
  padding: 16px 10px;
  box-sizing: border-box;
  background: #fff;
  transition: all 0.4s;
  &:focus {
    border: 1.5px solid #1877f2;
  }
  float: left;
  margin: 0px 0px 0px 15px;
`

const InputNumber = styled.input`
  border-radius: 5px;
  border: 1px solid #ddc6b6;
  width: 90%;
  padding: 16px 10px;
  box-sizing: border-box;
  background: #fff;
  transition: all 0.4s;
  &:focus {
    border: 1.5px solid #1877f2;
  }
`

const InputPass = styled.input`
  border-radius: 5px;
  border: 1px solid #ddc6b6;
  width: 90%;
  padding: 16px 10px;
  box-sizing: border-box;
  background: #fff;
  transition: all 0.4s;
  &:focus {
    border: 1.5px solid #1877f2;
  }
`

const ButtonLog = styled.button`
  font-size: 25px;
  padding: 15px 30px;
  background-color: #42b72a;
  color: white;
  border: 1px solid #fff;
  border-radius: 10px;
  transition: all 0.4s;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #198754
  }
`

export default SignUp
