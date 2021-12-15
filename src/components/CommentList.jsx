import styled from 'styled-components'
import { Grid, Image } from '../elements/index'
import CommentInput from './CommentInput'
import Comment from './Comment'
import { mockCommentList } from '../shared/Mock'

const CommentList = (props) => {
  return (
    <>
      <Grid>
        {mockCommentList.map((el, i) => {
          return (
            <CommentContainer key={i}>
              <Comment el={el} />
            </CommentContainer>
          )
        })}

        <CommentInput inputText="글을 게시하려면 Enter 키를 누르세요." />
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

export default CommentList
