import React from "react"
import styled from "styled-components"

import { Button, Grid, Input, Text, Image } from "../elements"
import { color } from "../shared/theme"
import Chip from "@mui/material/Chip"
import DeleteIcon from "@mui/icons-material/Delete"

import BasicModal from "../components/BasicModal"

import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { actionCreators as Actions } from "../redux/modules/image"

import { mockPostList } from "../shared/Mock"

const Main = (props) => {
    const dispatch = useDispatch()

    const history = useHistory()

    // const mockPostList = useSelector((state) => state.post)
 
    React.useEffect(() => {
        // dispatch(Actions.getPostAPI())
    }, [])


    const user_info = localStorage.getItem("nick")
    //console.log("aaa", user_info);

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

            {/* {mockPostList.map((list, idx) => {
                return (
                    <Grid key={idx} flex>
                        <Grid height="550px" bg="#ddd" width="30%" flex margin="10px">
                            <myPost
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    background: `no-repeat url(${list.img})`,
                                    backgroundSize: "cover",
                                }}></myPost>
                            <div style={{ display: "flex", flexDirection: "row", margin: "10px" }}>
                                <Text fontSize="16px">{list.userId}</Text>
                                <Text fontSize="25px" fontWeight="bold">
                                    {list.content}
                                </Text>
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
            })} */}
        </>
    )
}

const myPost = styled.div`
    width: 85vw;
    height: 30px;
    margin: 10px;
`

export default Main
