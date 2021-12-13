import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Input, Text, Image } from "../elements";
import { color } from "../shared/theme";
import BasicModal from "../components/BasicModal";
import Comments from "../components/Comments";

const Main = (props) => {
  const history = useHistory();
  const myLists = [
    "유익하고 재미있는 글",
    "달달한 복숭아 시럽이 가득 들어있다구함ㅎ 아이스크림 할인점에서 팔고있댕@@",
    "버그없는 깨끗한 코드 짜는 법이 궁금했다면?",
    "개발자라면 누구나 들어봤을 책 <클린 코드>",
  ];  

  return (
    <>
      <Grid
        bg="#fff"
        flex
         style={{
          display: "flex",
          flexDirection: "row",
          textAlgin: "center",
          width:"100%",
        }}>
        <Grid margin="50px" bg="#fff" height="30px">
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

      {myLists.map((list, idx) => {
        return (
          <Grid
            key={idx}
            width="85vw"
            height="30px"
            margin="10px auto"
             >
             {list} 
          </Grid>
        );

      })}
    </>
  );
};

export default Main;
