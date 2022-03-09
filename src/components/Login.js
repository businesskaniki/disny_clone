import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <Actualcontent>
            <Firstlogo src="images/cta-logo-one.svg"/>
            <Button>
                GET ALL THERE
            </Button>
            <Description>
             Small Text Generator is an online tool that allows you to change the look
             of your simple text having usual size into small/tiny sized text. The generated 
             text is a set of different Unicode characters .
            </Description>
            <Lastlogo src="images/cta-logo-two.png" />
        </Actualcontent>
    </Container>
  )
}

export default Login

const Container=styled.div`
min-height:calc(100vh - 70px);
position:relative;
display :flex;
align-items:center;
justify-content:center;
&:before{
    background-size:cover;
    background-position:top;
    background-image:url("/images/login-background.jpg");
    content:"";
    top:0;
    bottom:0;
    right:0;
    left:0;
    position:absolute;
    z-index:-1;
}

`
const Actualcontent= styled.div`
max-width:650px;
padding:80px 40px;
width:70%;

`
const Firstlogo=styled  .img`


`
const  Button=styled.div`
width:100%;
background:#0063e5;
padding:17px 0;
display:flex;
align-items:center;
justify-content:center;
letter-spacing:3px;
font-weight:bold;
font-size:18px;
margin-top:18px;
border-radius:4px;
cursor:pointer;
&:hover {
    background:#0483ee;
}
`

const Description= styled.div`
margin-top:10px;
line-height:1.5;
letter-spacing:1.5px;
text-align:center;
font-size:11px;
`
const Lastlogo = styled.img`
width:90%;
margin-top:20px;
display:flex;
align-items:center;
`