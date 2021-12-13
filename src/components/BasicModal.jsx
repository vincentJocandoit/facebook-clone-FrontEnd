import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "../elements/Input";
import Grid from "../elements/Grid";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <Grid
          width="60vw"
          height="30vh"
          margin="10px"
          bg={({ theme }) => theme.color.background}>
          <Input
            style={{ width: "80vw" }}
            label="Create post"
            multiLine
            placeholder="What's on your mind,nickname?">
            Input!
          </Input>
        </Grid>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style} style={{ width: "60vw", height: "30vh" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <CloseBtn onClick={() => setOpen(false)}>X</CloseBtn>

            <Input
              style={{ display: "flex", width: "60vw", height: "30vh" }}
              label="Create post"
              multiLine
              placeholder="What's on your mind, Nicname?"></Input>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </div>
  );
}

const CloseBtn = styled.button`
  postion: relative;
  margin-left: 870px;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  color: white;
  background: gray;
  text-align: center;
`;
