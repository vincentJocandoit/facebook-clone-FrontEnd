import styled from 'styled-components'

const Text = (props) => {

  const { children, fontSize, color, bold, margin } = props
  const styles = { fontSize, color, bold, margin }
  return (
    <>
      <TextBox {...styles}>{children}</TextBox>
    </>
  )
}

Text.defaultProps = {
  fontSize: '',
  color: '',
  bold: false,
  margin: '',
}

const TextBox = styled.p`
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.color.primary};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : ({ theme }) => theme.fontSize.md};
  font-weight: ${(props) => (props.bold ? '700' : '400')};
  margin: ${(props) => props.margin};
`

export default Text
