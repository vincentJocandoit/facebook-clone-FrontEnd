import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "../elements/Input";
import Grid from "../elements/Grid";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

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
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();


  const addPost = () => {
    dispatch(postActions.postAdd);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <Grid
          width="60vw"
          height="200px"
          margin="10px"
          bg={({ theme }) => theme.color.background}>
          <Input
            style={{
              width: "80vw",
              height: "30px",
              padding: "10px",
              border: "1px solid black",
            }}
            label="Create post"
            multiLine
            placeholder="What's on your mind,nickname?"></Input>
        </Grid>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={style}
          style={{ width: "60vw", height: "35vh", border: "1px solid black" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <ClosePostBtn
              onClick={() => {
                addPost();
                setOpen(false);
              }}>
              POST
            </ClosePostBtn>
            <Input
              style={{
                width: "300px",
                height: "300px",
                border: "1px solid black",
              }}
              multiLine
              placeholder="What's on your mind, Nickname?"></Input>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <CrudBox>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                 
                color="primary"
                aria-label="upload picture"
                component="span">
                <PhotoCamera  />
              </IconButton>
            </label>
          </CrudBox>
        </Box>
      </Modal>
    </div>
  );
}

const ClosePostBtn = styled.button`
  width: 60px;
  height: 30px;
  color: white;
  background: gray;
  text-align: center;
`;

const CrudBox = styled.div`
 width: 100%;
 height: 60px;
 border: 1px solid black;
 border-radius: 5px;
 margin: 10px auto;
 
`;