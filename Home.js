import React from 'react'
import styled from 'styled-components'
import Section from './Section'




const Home = () => {
  return (
    <Container>
      

      
      <Section carname='Model S' backgroundImg='model-s.jpg' description='Order Online' deslink='Touchless Delivery' leftbutton='Custom Order' rightbutton='Exisiting Inventory'/>
      < Section carname='Model Y'
       backgroundImg='model-y.jpg' description='Order Online' deslink='Touchless Delivery' leftbutton='Custom Order' rightbutton='Exisiting Inventory'/>
      <Section carname='Model X' backgroundImg='model-x.jpg' description='Order Online' deslink='Touchless Delivery' leftbutton='Custom Order' rightbutton='Exisiting Inventory'/>
      <Section carname='Model 3' backgroundImg='model-3.jpg' description='Order Online' deslink='Touchless Delivery' leftbutton='Custom Orde' rightbutton='Exisiting Inventory'/>
      <Section carname='Solar Panels'
      backgroundImg='solar-panel.jpg'
      description='Lowest cost Solar Panel in America' leftbutton='Order Now' rightbutton='Learn More'/>
      <Section carname='Solar Roof' backgroundImg='solar-roof.jpg' description='Produce Clean Energy From Your Roof' leftbutton='Order Now' rightbutton='Learn Now'/>
      <Section carname='Accessories' backgroundImg='accessories.jpg' leftbutton='Order Noew'/>
      
    </Container>

  )
}

export default Home
const Container=styled.div`
height:100vh;
`
