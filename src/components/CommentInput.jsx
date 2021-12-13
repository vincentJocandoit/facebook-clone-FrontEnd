import styled from 'styled-components'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined'
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined'
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined'
import { Grid, Image, Text } from '../elements'
import { useForm } from 'react-hook-form'

const CommentInput = (props) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data.comment)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CommentInputContainer>
          <Image shape="circle" />
          <Grid padding="10px" width="100%" side_flex>
            <Grid width="80%">
              <CommentInputLeftRadiusContainer>
                <CommentInputBox
                  {...register('comment')}
                  placeholder="댓글을 입력하세요..."
                />
              </CommentInputLeftRadiusContainer>
            </Grid>
            <CommentInputRightRadiusContainer>
              <ImojiBox>
                <ImogiEl>
                  <SentimentSatisfiedOutlinedIcon sx={{ fontSize: '16px' }} />
                </ImogiEl>
                <ImogiEl>
                  <CameraAltOutlinedIcon sx={{ fontSize: '16px' }} />
                </ImogiEl>
                <ImogiEl>
                  <GifBoxOutlinedIcon sx={{ fontSize: '16px' }} />
                </ImogiEl>
                <ImogiEl>
                  <NoteOutlinedIcon sx={{ fontSize: '16px' }} />
                </ImogiEl>
              </ImojiBox>
            </CommentInputRightRadiusContainer>
          </Grid>
        </CommentInputContainer>
        <Grid margin="0px 0px 0px 50px">
          <Text color="#202020" fontSize="12px" bold>
            글을 게시하려면 Enter 키를 누르세요.
          </Text>
        </Grid>
      </form>
    </>
  )
}

const ImojiBox = styled.ul`
  display: flex;
  justify-content: flex-end;
`

const ImogiEl = styled.li`
  margin-left: 10px;
`

const CommentInputBox = styled.input`
  border-radius: 18px;
  padding: 10px 10px;
  width: 100%;
  box-sizing: border-box;
`

const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const CommentInputLeftRadiusContainer = styled.div`
  background: ${({ theme }) => theme.color.lightgrey};
  border-radius: 18px 0px 0px 18px;
`
const CommentInputRightRadiusContainer = styled.div`
  border-radius: 0px 18px 18px 0px;
  width: 20%;
  padding: 8px;
  background: #f0f2f5;
`
export default CommentInput
