import styled from 'styled-components'

const Image = (props) => {
  const { shape, src, size, _onClick, pointer } = props
  const styles = { src, size, pointer }

  if (shape === 'circle') {
    return <ImageCircle onClick={_onClick} {...styles}></ImageCircle>
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    )
  }

  return (
    <>
      <ImageDefault {...styles}></ImageDefault>
    </>
  )
}

Image.defaultProps = {
  shape: '',
  src: 'https://t1.daumcdn.net/cfile/tistory/99C938355DD29C6C07',
  size: 36,
  pointer: false,
  _onClick: () => {},
}

const ImageCircle = styled.div`
  cursor: ${(props) => (props.pointer ? 'pointer' : '')};
  --size: ${(props) => props.size}px;
  width: var(---size);
  height: var(---size);
  border-radius: var(---size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
`

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
`

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
`

export default Image
