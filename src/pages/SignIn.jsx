import React, { useState } from 'react'
import styled from 'styled-components'

import { Grid } from '../elements'
import { Text } from '../elements'

import SignUp from './SignUp'

const SignIn = (props) => {

  let [modal, modalchange] = useState(false);


  return (
    <React.Fragment>
      <Wrap>
        <Header>
          <AreaWrap>
            <LeftArea>
              <Grid margin="0px 0px 0px 10px">
                <Grid>
                  <Text fontSize="70px" bold>facebook</Text>
                </Grid>
                <Grid margin="10px 0px">
                  <Text color="black" fontSize="30px">Facebook에서 전세계에 있는 친구, 가족, 지인들과 함께 이야기를 나눠보세요</Text>
                </Grid>
              </Grid>
            </LeftArea>
            {
            modal === true
            ? <SignUp></SignUp>
            : null
            }
            <RightArea>
              <Grid>
                <InputId placeholder="E-mail"></InputId>
              </Grid>
              <Grid>
                <InputPas placeholder="Password"></InputPas>
              </Grid>
              <Grid>
                <ButtonLog>
                  <Text color="white" fontSize="20px" bold>로그인</Text>
                </ButtonLog>
              </Grid>
              <Line />
              <Grid>
                <ButtonSign onClick={() => {modalchange(!modal)}}>
                  <Text color="white" fontSize="19px" bold>새 계정 만들기</Text>
                </ButtonSign>
              </Grid>
            </RightArea>
          </AreaWrap>
        </Header>
        
        <Footer>
            <Text color="#737373" fontSize="15px">한국어</Text>
            <Text color="#737373" fontSize="15px" margin="0px 0px 0px 10px">English(US)</Text>
            <Text color="#737373" fontSize="15px" margin="0px 0px 0px 10px">Bahasa Indonesia</Text>
            <Text color="#737373" fontSize="15px" margin="0px 0px 0px 10px">ภาษาไทย</Text>
            <Text color="#737373" fontSize="15px" margin="0px 0px 0px 10px">Español</Text>
            <Text color="#737373" fontSize="15px" margin="0px 0px 0px 10px">中文(简体)</Text>
            <Text color="#737373" fontSize="15px" margin="0px 0px 0px 10px">日本語</Text>
            <Text color="#737373" fontSize="15px" margin="0px 0px 0px 10px">Português(Brasil)</Text>
            <Text color="#737373" fontSize="15px" margin="0px 0px 0px 10px">Français(France)</Text>
            <Text color="#737373" fontSize="15px" margin="0px 0px 0px 10px">Deutsch</Text>
        </Footer>
      </Wrap>
    </React.Fragment>
  )
}


const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
`

const Header = styled.div`
  width: 100%;
  height: 70%;
  background-color: #eee;
`

const Footer = styled.div`
  width: 100%;
  height: 30%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AreaWrap = styled.div`
  width: 100%;
  height: 330px;
  background-color: #eee;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: 100px;
`

const LeftArea = styled.div`
  width: 50%;
  height: 100%;
  background-color: #eee;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 0px 130px;
  z-index: 9;
`
const RightArea = styled.div`
  width: 25%;
  height: 100%;
  background-color: white;
  float: right;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 3px 4px 19px -7px #000000;
  margin: 0px 130px 0px 0px;
  z-index: 8;
`


const Line = styled.hr`
  background-color: black;
  height: 2.5px;
`

const ButtonLog = styled.button`
  font-size: 25px;
  padding: 15px 30px;
  background-color: #1877f2;
  color: white;
  border: 1px solid #fff;
  border-radius: 10px;
  transition: all 0.4s;
  width: 95%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: #4267b2
  }
`

const ButtonSign = styled.button`
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

const InputId = styled.input`
  border-radius: 5px;
  margin: 10px 0px;
  border: 1px solid #ddc6b6;
  width: 95%;
  padding: 16px 10px;
  box-sizing: border-box;
  background: #fff;
  transition: all 0.4s;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:focus {
    border: 1.5px solid #1877f2;
  }
`

const InputPas = styled.input`
  border-radius: 5px;
  margin: 10px 0px;
  border: 1px solid #ddc6b6;
  width: 95%;
  padding: 16px 10px;
  box-sizing: border-box;
  background: #fff;
  transition: all 0.4s;
  display: block;
  margin-left: auto;
  margin-right: auto;
  &:focus {
    border: 1.5px solid #1877f2;
  }
`

export default SignIn
