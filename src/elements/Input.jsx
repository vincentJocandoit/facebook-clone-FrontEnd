import styled from 'styled-components'
import { Grid, Text } from '.'

const Input = (props) => {
  const { label, multiLine, placeholder, _onChange } = props

  if (multiLine) {
    return (
      <Grid>
        {label && <Text>{label}</Text>}
        <TextareaBox
          rows={20}
          placeholder={placeholder}
          onChange={_onChange}
        ></TextareaBox>
      </Grid>
    )
  }

  return (
    <>
      <Grid width="100%">
        {label && <Text>{label}</Text>}
        <InputBox placeholder={placeholder} onChange={_onChange}></InputBox>
      </Grid>
    </>
  )
}

Input.defaultProps = {
  label: '',
  multiLine: false,
  placeholder: '',
  _onChange: () => {},
}
const InputBox = styled.input`
  border-radius: 18px;
  margin: 10px 0px;
  width: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
  background: #fff;
`
const TextareaBox = styled.textarea`
  border-radius: 5px;
  margin: 10px 0px;
  color: black;
  width: 100%;
  padding: 16px 10px;
  resize: none;
  box-sizing: border-box;
`

export default Input
