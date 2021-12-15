import * as React from "react"
import styled from "styled-components"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Input from "../elements/Input"
import Grid from "../elements/Grid"
import { useSelector, useDispatch } from "react-redux"
import { actionCreators as imageActions } from "../redux/modules/image"
import { actionCreators as postActions } from "../redux/modules/post"
import IconButton from "@mui/material/IconButton"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import {addContentToAxios} from "../redux/modules/post"

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
}

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const dispatch = useDispatch()
    const imageRef = React.useRef("")
    const { history } = props

    // const preview = useSelector((state) => state.image.preview)

    // const post_list = useSelector((state) => state.post)

    const [content, setContent] = React.useState("")
    const [showImageUpLoder, setShowImageUpLoder] = React.useState(false)

    const userInfo = useSelector((state) => state.user)

    const userID = localStorage.getItem(" ")

    const fileInput = React.useRef()

    const addPost = () => {
        dispatch(postActions.postAdd)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const image = imageRef.current.files[0]

        const formData = new FormData()
        formData.append("content", content)
        formData.append("image", image)

        dispatch(addContentToAxios(formData))
    }

    const changeContent = (e) => {
        setContent(e.target.value)
    }

    const handleImageUpLoader = (e) => {
        setShowImageUpLoder(!showImageUpLoder)
    }

    
    // const profilePreview = useSelector((state) => state.image.profilePreview)

    const [labelDisplay, setLabelDisplay] = React.useState("block")
    const [previewDisplay, setPreviewDisplay] = React.useState("none")
    const placeHolder = `${userInfo.username}님, 무슨 생각을 하고 계신가요?`

    const selectFile = (e) => {
        const fileName = e.target.files[0].name.split(".")[0]
        const fileType = e.target.files[0].name.split(".")[1]
        const fileFullName = e.target.files[0].name
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            dispatch(imageActions.setPreview({ preview: reader.result, fileName, fileType, fileFullName, file }))
        }
        console.log("사진 변경")

        setLabelDisplay("none")
        setPreviewDisplay("block")
    }

    //파일 미리보기
    const filePreview = () => {
        const reader = new FileReader()
        const file = fileInput.current.files[0]
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            // console.log(reader.result);
            dispatch(imageActions.setPreview(reader.result))
        }
    }
      const [imageUrl, setImageUrl] = React.useState("")

      const readerUrl = () => {
          if (!imageRef.current.files[0]) {
              return
          }
          const reader = new FileReader()
          const file = imageRef.current.files[0]

          reader.readAsDataURL(file)
          
          reader.onloadend = () => {
              setImageUrl(reader.result)
          }
      }
    return (
        <div>
            <Button onClick={handleOpen}>
                <Grid width="70vw" height="100px" margin="10px" bg={({ theme }) => theme.color.background}>
                    <Input
                        style={{
                            width: "80vw",
                            height: "30px",
                            padding: "10px",
                            border: "1px solid black",
                        }}
                        label="Create post"
                        multiLine
                        placeholder={placeHolder}></Input>
                </Grid>
            </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} style={{ width: "60vw", height: "45vh", border: "1px solid black" }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <ClosePostBtn
                            onClick={() => {
                                addPost()
                                setOpen(false)
                            }}>
                            POST
                        </ClosePostBtn>
                        <form onSubmit={handleSubmit}>
                            <Input
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    border: "1px solid black",
                                }}
                                multiLine
                                placeholder={placeHolder}></Input>
                        </form>
                        {showImageUpLoder && (
                            <UpLoaderWrap>
                                <button
                                //  onClick={selectFile()}
                                 >사진/동영상 추가</button>
                                <input ref={imageRef} onChange={readerUrl} type="file" />
                                <ImagePreview
                                    src={
                                        imageUrl
                                            ? imageUrl
                                            : "https://i0.wp.com/www.lumosmarketing.io/wp-content/uploads/2019/04/placeholder-image.jpg?resize=360%2C300&ssl=1"
                                    }
                                />
                            </UpLoaderWrap>
                        )}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
                    <CrudBox>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera
                                onClick={handleImageUpLoader}
                                ref={fileInput}
                                accept="image/*"
                                onChange={filePreview}
                                type="file"
                                style={{ fontSize: "50px" }}
                            />
                        </IconButton>
                    </CrudBox>
                </Box>
            </Modal>
        </div>
    )
}

const ClosePostBtn = styled.button`
    width: 60px;
    height: 30px;
    color: white;
    background: gray;
    text-align: center;
`

const CrudBox = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px auto;
`


const UpLoaderWrap = styled.div`
    height: auto;
    border: 1px solid #ddd;
    margin: 10px 0px;
    border-radius: 10px;
`

const ImagePreview = styled.div`
    /* size: px; */
    width: 80%;
    height: 250px;
    object-fit: cover;
    vertical-align: middle;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 20px auto;
`
