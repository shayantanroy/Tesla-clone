import React,{ useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';





const Header = () => {
  const[burgerstatus,setBurgerstatus]=useState(false);
  return (
   
    <Container>
      <Link to="/conatct" > <img src="/images/logo.svg"/> </Link>
   
            {/* <img src="/images/logo.svg"/>  */}
      <MidMenu>
        <ul>
        <li><a href='#'>Model S</a></li>
        <li><a href='#'>Model Y</a></li>
        <li><a href='#'>Model X</a></li>
        <li><a href='#'>Model 3</a></li>
        <li><a href='#'>Solar Panel</a></li>
        {/* <li><Link to="/urgent">home</Link></li> */}
         <li><a href='#'>Solar Roof</a></li>
        </ul>
      
      </MidMenu>
      <RightMenu>
        
      <ul>
      <li> <a href='#'>Shop</a></li>
      <li> <a href='#'>Account</a></li>
      <li><a href='#'>Menu</a></li>
      <Hamicon onClick={()=>{setBurgerstatus(true)}}/>
      </ul>
      
      
      </RightMenu>
    
 
      <BurgerNav show={burgerstatus}>
        <ul >
          <Closeicondiv>
          <Closeicon onClick={()=>{setBurgerstatus(false)}}/>
          </Closeicondiv>
          <li ><a href='#'>Existing inventory</a></li>
          <li ><a href='#'>Used inventory</a></li>
          <li ><a href='#'>Trade-in</a></li>
          <li ><a href='#'>Cybertruck</a></li>
          <li ><a href='#'>Roadstart</a></li>
          <li ><a href='#'>Mode-S</a></li>
          <li ><a href='#'>Model-Y</a></li>
          <li ><a href='#'>Model-3</a></li>
          <li ><a href='#'>Model -X</a></li>
         

        </ul>
      </BurgerNav>
      
    </Container>
    

  )
}

export default Header


const Container=styled.div`
font-weight:600;
position:fixed;
display:flex;
height:60px;
width:100%;
justify-content: space-between;
align-items:center;
padding:20px 40px;
font-size:14px;
z-index:1;

// li:hover{
  
//   background-color:white;
//   // background-color: rgb(205, 205, 205);
//   opacity:0.85;
//  padding:5px 10px;
//  border-radius:100px;
// transition:0.3s

// }


`
const MidMenu =styled.div`
li:hover{
  
  background-color:white;
  // background-color: rgb(205, 205, 205);
  opacity:0.85;
 padding:5px 10px;
 border-radius:100px;
transition:0.3s

}

ul{
 
 display:flex;
 gap:45px;
 align-items:center;
 margin-left:60px;
 @media(max-width:768px){
  display:none;
 }

}

`
const RightMenu=styled.div`
li:hover{
  
  background-color:white;
  // background-color: rgb(205, 205, 205);
  opacity:0.85;
 padding:5px 10px;
 border-radius:100px;
transition:0.3s

}
ul{
  display:flex;
  gap:25px;
  align-items:center;

}

`
const BurgerNav=styled.div`
// display:none;
position:fixed;
background-color:white;
top:0;
bottom:0;
right:0;
width:250px;
z-index:999;
display:flex;
padding:20px;
flex-direction:column;
 text-align:start;
 transform:${props=>props.show?"translateX(0)":"translateX(100%)"};
 transition:0.3s;
li{
  padding:15px 0;
  border-bottom:1px solid black;
}



`
const Hamicon=styled(MenuIcon)`
cursor:pointer;

`
const Closeicon=styled(CloseIcon)`
cursor:pointer;`

const Closeicondiv=styled.div`
display:felx;
justify-content:flex-end;`






