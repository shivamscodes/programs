import styled from "styled-components"

export const Button = styled.button`
padding: 10px 18px;
color: white;
background: #000000;
width: 220px;
border: none;
border-radius: 5px;
font-size: 16px;
 transition: 0.4s background ease-in;
 border: 1px solid transparent;
 cursor: pointer;

&:hover{
    background-color : white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}

`




export const OutlineButton = styled(Button)`
 background-color : white;
  border: 1px solid black;
  color: black;
&:hover{
    background-color : black;
    border: 1px solid transparent;
    color: white;
   
}

`
