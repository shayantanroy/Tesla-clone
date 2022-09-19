import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const Section = ({carname,backgroundImg,description,deslink,leftbutton,rightbutton}) => {
 
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText>
        <Fade bottom>
        <h1 >{carname}</h1>
        <p>{description}<a href='#'>{deslink}</a></p>
        </Fade>
       </ItemText>
      <Button>
      <Fade bottom>
        <ButtonGroup>
        
       
        
            <LeftButton>{leftbutton}</LeftButton> 
            {rightbutton&&
            <RightButton>{rightbutton}</RightButton>
            }
            
         </ButtonGroup>
         </Fade>
         <DownArrow src="/images/down-arrow.svg" />
         </Button>
    </Wrap>
  )
}

export default Section


const Wrap=styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
background-image:${props => `url("/images/${props.bgImg}")`};

`

const ItemText=styled.div`
padding-top:22vh;
text-align:center;
a{
  border-bottom:1.5px solid black;
}

`
const ButtonGroup=styled.div`
 display:flex;
justify-content:center;
margin-bottom:30px;


@media(max-width:768px){
  flex-direction:column;
  align-items:center;
}

`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
// border-bottom:1px solid black;

height:40px;
width:256px;
color:white;
display:flex;

 justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
cursor:pointer;
font-size:12px;
font-weight:700;
margin:10px;

`
const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.65;
`
const DownArrow=styled.img`
margin-top:30px;
height:40px;
`
const Button=styled.div`


`

