import { useState } from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import { Text, Grid } from '../elements'
import styled from 'styled-components'

const Comment = (props) => {
  const [viewUDBox, setViewUDBox] = useState(false)
  const [viewDots, setViewDots] = useState(false)
  const { el } = props
  return (
    <>
      {/* Comment */}
      <MouseOver
        onMouseEnter={() => setViewDots(true)}
        onMouseLeave={() => setViewDots(false)}
      >
        <CommentContainer center>
          <Grid padding="10px" bg="#f0f2f5" border>
            <Text bold color="#202020">
              {el.userId}
            </Text>
            <Text color="#202020">{el.content}</Text>
          </Grid>
          {viewDots && (
            <MoreHorizOutlinedIcon
              onClick={() => setViewUDBox(!viewUDBox)}
              sx={{ cursor: 'pointer', marginLeft: '10px' }}
            />
          )}
          {viewUDBox && (
            <UDBox>
              <UDEl>수정</UDEl>
              <UDEl>삭제</UDEl>
            </UDBox>
          )}
        </CommentContainer>
      </MouseOver>
    </>
  )
}

const CommentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: ${(props) => (props.center ? 'center' : '')};
  margin: ${(props) => props.margin};
`
const MouseOver = styled.div`
  margin: 0px 0px 0px 10px;
`

const UDBox = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 344px;
  height: 88px;
  background: #fff;
  z-index: 10;
  box-shadow: 2px 1px 10px #8a8d91;
  transform: translate(0%, 50px);
  border-radius: 5px;
`
const UDEl = styled.li`
  cursor: pointer;
  margin: 8px 8px;
  padding: 8px 12px;
  font-weight: 700;
  &:hover {
    background: ${({ theme }) => theme.color.lightgrey};
  }
`

export default Comment
