import React from 'react'
import styled from 'styled-components'

export default function Viewers() {
  return (

        <Container>
            <Imgwraper>
                <img src='/images/viewers-disney.png'/>
            </Imgwraper>
            <Imgwraper>
                <img src='/images/viewers-marvel.png'/>
            </Imgwraper>
            <Imgwraper>
                <img src='/images/viewers-national.png'/>
            </Imgwraper>
            <Imgwraper>
                <img src='/images/viewers-pixar.png'/>
            </Imgwraper>
            <Imgwraper>
                <img src='/images/viewers-starwars.png'/>
            </Imgwraper>
        </Container>

  )
}

const Container=styled.div`
margin-top :30px;
display:grid;
grid-template-columns: repeat(5 ,minmax(0 ,1fr));
grid-gap:25px;
padding:30px 0 26px;

`
const Imgwraper=styled.div `
border-radius:15px;
box-shadow: -1px 23px 21px 0px rgba(0,0,0,0.88);
-webkit-box-shadow: -1px 23px 21px 0px rgba(0,0,0,0.88);
-moz-box-shadow: -1px 23px 21px 0px rgba(0,0,0,0.88);
border:3px solid rgba(249,249,249,0.1);
transition: all 250ms ease-in-out;
img{
  height:100%;
  width:100%;
  object-fit:cover;
}
&:hover{
  transform:scale(1.02);
  border:3px solid rgba(249,249,249,0.8);
}
`