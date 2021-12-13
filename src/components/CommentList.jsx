import styled from 'styled-components'
import { Grid, Image } from '../elements/index'
import CommentInput from './CommentInput'
import Comment from './Comment'
import { mockCommentList } from '../shared/Mock'

const Comments = (props) => {
  return (
    <>
      <Grid>
        {mockCommentList.map((el, i) => {
          return (
            <>
              <CommentContainer key={i}>
                <Grid>
                  <Image shape="circle"></Image>
                </Grid>
                <Grid>
                  <Grid>
                    <Comment el={el} />
                  </Grid>
                </Grid>
              </CommentContainer>
              <Ul margin="0px 0px 0px 10px">
                <CommenText>좋아요</CommenText>
                <CommenText>답글달기</CommenText>
                <CommenText>시간</CommenText>
              </Ul>
            </>
          )
        })}

        <CommentInput />
      </Grid>
    </>
  )
}

const CommentContainer = styled.div`
  position: relative;
  display: flex;
  align-items: ${(props) => (props.center ? 'center' : '')};
  margin: ${(props) => props.margin};
`
const Ul = styled.ul``

const CommenText = styled.li`
  display: inline-block;
  font-size: smaller;
  color: #8a8d91;
  &::after {
    display: inline-block;
    content: '';
    margin: 10px;
    width: 3px;
    height: 3px;
    background: #8a8d91;
    border-radius: 3px;
    vertical-align: middle;
  }
  &:last-child::after {
    content: '';
    background: #fff;
  }
`

export default Comments
