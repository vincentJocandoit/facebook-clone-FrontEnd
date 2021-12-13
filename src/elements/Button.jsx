import styled from 'styled-components'

const Button = (props) => {
  const {
    children,
    margin,
    padding,
    bg,
    width,
    _onClick,
    color,
    type,
    height,
  } = props
  const styles = { margin, padding, bg, width, _onClick, color, type, height }
  return (
    <>
      <ButtonBox {...styles} type={type} onClick={_onClick}>
        {children}
      </ButtonBox>
    </>
  )
}

Button.defaultProps = {
  children: false,
  margin: '',
  padding: '',
  width: '',
  bg: false,
  color: '',
  height: '',
}

const ButtonBox = styled.button`
  border-radius: 5px;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => (props.height ? props.height : '100%')};
  padding: ${(props) => props.padding};
  background: ${(props) =>
    props.bg ? props.bg : ({ theme }) => theme.color.background};
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.fontSize.md};
`

export default Button
