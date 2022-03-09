import React from 'react'
import Slideimage from './Slideimage'
import styled from 'styled-components'
import Viewers from './Viewers'
import Movies from './Movies'
export default function Home() {
  return (
      <Container>
         <Slideimage/>
         <Viewers/>
         <Movies/>
      </Container>
  )
}
 

const Container= styled.main`
min-height:calc(100vh - 70px );
position:relative;
padding: 0 calc(3.5vw + 5px);
overflow-X:hidden;
&:before{
    content:"";
    background:url("/images/home-background.png");
    background-position:center;
    background-repeat:no-repreat;
    background-size:cover;
    background-attachment: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:-1;
    position:absolute;
}
`