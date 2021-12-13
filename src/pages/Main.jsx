import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Input, Text, Image } from "../elements";
import { color } from "../shared/theme";
import BasicModal from "../components/BasicModal";
import Comments from "../components/Comments";

const Main = (props) => {
  const history = useHistory();
    

  return (
    <>
      <Grid bg="#fff" flex
           style={{
            display: "flex",
            flexDirection: "row",
            textAlgin: "center",
            width:"100%",
          }}>
          <Grid margin="20px" bg="#fff" >
            <Image
              size="60"
              shape={"circle"}
              _onclick={() => history.push("/")}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs22mTuZcn5ofqQe7br-65iLEalYd9F95gg&usqp=CAU"
              }
              pointer></Image>
          </Grid>
           
         <BasicModal />
       </Grid>
    </>
  );
};

export default Main;
