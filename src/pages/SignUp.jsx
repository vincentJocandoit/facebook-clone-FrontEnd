import React from 'react'
import styled from 'styled-components'

import { Grid, Text } from '../elements'



const SignUp = (props) => {

  return(
    <RegisterContainer>
        <Text>가입하기</Text>
        <Text>빠르고 쉽습니다</Text>
      <Hr3 />
      <TextArea>
        <Grid>
          <InputFn placeholder= "성"/>
          <InputLn placeholder= "이름"/>
        </Grid>
        <InputNumber />
        <InputPass />
      </TextArea>
    </RegisterContainer>
  )
}

const Hr3 = styled.hr`
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export default SignUp
