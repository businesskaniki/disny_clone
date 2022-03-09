import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    
        <Navebar>
            <Logo src="/images/logo.svg"/>
            <NaveMenu>
                <a>
                    <img src = "/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src = "/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src = "/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src = "/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src = "/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src = "/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>
            </NaveMenu>
            <Account>
                <img src="/images/watchlist-icon.svg" />
                ACCOUNT
            </Account>
            <Userimage src="/images/index.png"/>
        </Navebar>

    )
}

export default Header

const Navebar=styled.div`
height:70px;
overflow-X:hidden;
background-color: #0F0C19 ;
display:flex;
align-items:center;
padding:0 16px;
@media (max-Width: 1000px) {
    height:50px;
  }
`
const Logo=styled.img`
 height:40px;
 padding:0 36px;
 @media (max-Width: 1000px) {
    height:30px;
  }
`
const NaveMenu=styled.div`
display:flex;
flex:1;
align-items:center;
color:white;
 a{
     cursor:pointer;
     display:flex;
     align-items:center;
     padding:0 12px;
      img{
          height:20px;
      }
      span{
          font-size:13px;
          letter-spacing:1.4px;
          position:relative;
          &:after{
                content:"";
                height:2px;
                background-color:white;
                position:absolute;
                bottom:-5px;
                right:0;
                left:0;
                transform-origin:left center;
                transform:scaleX(0);
                opacity:0; 
         }
      }
     &:hover {
        span:after{
            transform:scale(1);
            opacity:1;
        }
     } 
      
 }

 @media (max-Width: 1000px) {
    a{
        padding:0 8px;
        img{
            height:15px;
        }
        span{
            font-size:9px;
            letter-spacing:0.7px;
            &:after{
                    height:1.5px;
                    bottom:-3px; 
            }
        }
    }
  }
`
const Userimage=styled.img`
height:48px;
border-radius:50%;
padding:0 17px;
@media (max-Width: 1000px) {
    height:22px;
    padding:0 10px;
  }
`
const Account=styled.div`
color:white;
font-size:13px;
cursor:pointer;
display:flex;
align-items:center;
  img{
      padding:0 5px;
      height:20px;
  }

@media (max-Width: 1000px) {
    img{
        padding:0 3px;
        height:15px;
        font-size:8px;
    }
}
`