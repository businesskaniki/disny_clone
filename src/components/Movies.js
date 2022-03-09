import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended For You</h4>
        <Content>
            <Moviewrap>
                <img src='/images/movie1.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie2.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie3.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie4.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie2.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie3.jpeg'/>
            </Moviewrap>
        </Content>
        <h4>New To Disny+</h4>
        <Content>
            <Moviewrap>
                <img src='/images/movie5.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie6.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie7.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie8.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie6.jpeg'/>
            </Moviewrap>
            <Moviewrap>
                <img src='/images/movie5.jpeg'/>
            </Moviewrap>
        </Content>

    </Container>
  )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
display:grid;
grid-template-columns: repeat(6 ,minmax(0, 1fr));
grid-gap:25px
`
const Moviewrap = styled.div`
margin-bottom:20px;
overflow:hidden;
border-radius:10px;
box-shadow: -1px 23px 21px 0px rgba(0,0,0,0.88);
-webkit-box-shadow: -1px 23px 21px 0px rgba(0,0,0,0.88);
-moz-box-shadow: -1px 23px 21px 0px rgba(0,0,0,0.88);
border:3px solid rgba(249,249,249,0.1);
transition: all 250ms ease-in-out;
img{
    width:100%;
    height:100px;
    object-fit:cover;
    
}
&:hover{
    transform:scale(1.05);
    border:3px solid rgba(249,249,249,0.8);
}
`