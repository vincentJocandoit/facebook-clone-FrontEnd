import styled from 'styled-components'

const Grid = (props) => {
  const {
    height,
    children,
    width,
    padding,
    margin,
    bg,
    flex,
    side_flex,
    border,
  } = props
  const styles = { height, width, padding, margin, bg, flex, side_flex, border }

  return <GridBox {...styles}>{children}</GridBox>
}

Grid.defaultProps = {
  children: '',
  width: '',
  height: '',
  padding: '',
  margin: '',
  bg: '',
  border: false,
  flex: false,
  side_flex: false,
}

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background: ${(props) => (props.bg ? props.bg : '')};
  ${(props) =>
    props.flex
      ? 'display: flex; align-items: center; justify-content: center; flex-direction: column;'
      : ''}
  ${(props) =>
    props.side_flex
      ? 'display: flex; align-items: center; justify-content: space-between;'
      : ''}
  ${(props) => (props.border ? 'border-radius: 18px' : '')}
`
export default Grid
