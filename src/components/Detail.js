import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Bgi>
            <img src= "/images/bigfoot.jpg"/>
        </Bgi>
        <Logoimage>
        <img src= "/images/ba.png"/>
        </Logoimage>
        <Buttongroup>
            <Playbtn>
                <img src='/images/play-icon-black.png'/>
                <span>PLAY</span>
            </Playbtn>
            <Traillerbtn>
                <img src='/images/play-icon-white.png'/>
                <span>TRAILLER</span>
            </Traillerbtn>
            <Addbtn>
                <span>+</span>
            </Addbtn>
            <Groupbtn>
                <img src='images/group-icon.png'/>
            </Groupbtn>
        </Buttongroup>
        <Subttext>
            that you can paste normal text. How does it work? Well, it all starts with our little friend,        
        </Subttext>
        <Descriptiontext>
        This simple online tool generates small text from your regular sized text. You can copy and paste the small letters most places 
        that you can paste normal text. How does it work? Well, it all starts with our little friend,
        </Descriptiontext>
    </Container>
  )
}

export default Detail
const Container=styled.div`
min-height:calc(90vh - 70px );
padding: 0 calc(3.5vw + 5px);
`
const Bgi=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
left:0;
z-index:-1;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const Logoimage=styled.div`
width:30vh;
height:20vhpx;
margin-top:20px;
img{
    width:100%;
    height:100%;
    object-fit:contain;   
}
`
const Buttongroup=styled.div`
display:flex;
margin-top:50px;
align-items:center;
`
const Playbtn =styled.div`
width :144px;
border:none;
margin-right:16px;
border-radius:4px;
height:50px;
display:flex;
align-items:center;
padding:3px;
background:rgb(256,256,256);
margin-left:16px;
justify-content: center;
cursor:pointer;
&:hover{
    
    background:rbg(198,198,198);
}
span{
    color:black;
    letter-spacing: 3px;
}
`
const Traillerbtn = styled(Playbtn)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(256,256,256);
span{
    color:white;
}

`
const Addbtn =styled.button`
background:rgba(0,0,0,0.6);
font-size:26px
display:flex;
align-items;center;
justify-content:center
margin-left:30px;
width:44px;
margin-right:16px;
height:44px;
border-radius:50%;
opacity:0.8;
cursor:pointer;
span{
    color:white;
    font-size:26px;
}
&:hover{
    background:rgba(0,0,0,0.6); 
}
`
const Groupbtn =styled(Addbtn)`
background:rgba(0,0,0,0.9);
&:hover{
    background:rgba(0,0,0,0.6); 
}
`
const Subttext=styled.div`
padding-top:40px;
margin top 7px;
color:white;
`
const  Descriptiontext=styled.div`
padding-top:10px;
color:rgb(249,249,249);
font-weight:900px;
`