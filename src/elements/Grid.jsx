import styled from 'styled-components'

const Grid = (props) => {
  const { children, width, padding, margin, bg } = props
  const styles = { width, padding, margin, bg }
  return <GridBox {...styles}>{children}</GridBox>
}

Grid.defaultProps = {
  children: '',
  width: '',
  padding: '',
  margin: '',
  bg: '',
}

const GridBox = styled.div`
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background: ${(props) => (props.bg ? props.bg : '')};
`

export default Grid
