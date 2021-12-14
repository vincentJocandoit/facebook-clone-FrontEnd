import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { Button, Grid, Input, Text, Image } from "../elements"
import { color } from "../shared/theme"
import BasicModal from "../components/BasicModal"
import Comments from "../components/Comments"
import Chip from "@mui/material/Chip"
import DeleteIcon from "@mui/icons-material/Delete"
import { mockPostList } from "../shared/Mock"

const Main = (props) => {
    const history = useHistory()

    return (
        <>
            <Grid
                bg="#fff"
                flex
                style={{
                    display: "flex",
                    flexDirection: "row",
                    textAlgin: "center",
                    width: "100%",
                }}>
                <Grid margin="50px" bg="#fff" height="30px">
                    <Image size="60" shape={"circle"} _onclick={() => history.push("/")} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs22mTuZcn5ofqQe7br-65iLEalYd9F95gg&usqp=CAU"} pointer></Image>
                </Grid>

                <BasicModal />
            </Grid>

            {mockPostList.map((list, idx) => {
                return (
                    <Grid key={idx} flex>
                        <Grid height="550px" bg="#ddd" width="30%" flex margin="10px">
                            <myPost
                                style={{
                                  
                                    width: "100%",
                                    height: "100%",
                                    background: `no-repeat url(${list.img})`,
                                    backgroundSize: "center",
                                }}></myPost>
                            <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
                                <Text fontSize="16px"  >{list.userId}</Text>
                                <Text fontSize="25px" fontWeight="bold">{list.content}</Text>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
                                <Chip
                                    style={{
                                        cursor: "pointer",
                                    }}
                                    label="Delete"
                                    deleteIcon={<DeleteIcon />}
                                    variant="outlined"
                                />
                                <Chip
                                    style={{
                                        cursor: "pointer",
                                    }}
                                    label="Edit"
                                    deleteIcon={<DeleteIcon />}
                                    variant="outlined"
                                />
                            </div>
                        </Grid>
                    </Grid>
                )
            })}
        </>
    )
}

const myPost = styled.div`
    width: 85vw;
    height: 30px;
    margin: 10px;
`
export default Main
