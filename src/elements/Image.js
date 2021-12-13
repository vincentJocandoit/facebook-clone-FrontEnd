import React from "react";
import styled from "styled-components";

const Image = ()=>{

  return (
  <ImageButton>
  
  </ImageButton>
  )
  }
Image.defaultProps = {
  width:"",
  padding:"",
  height:"",
  background:"",
  backgroundSize:"",
  cursor:"pointer",
  _onClick: ()=>{},
}

const ImageButton=styled.button`
  width: 50px;
  height: 50px;
  background: url("../public/facebooklogo.png");
  background-size: cover;

`






export default Image;