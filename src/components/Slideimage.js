import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Slideimage() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <Carousel {...settings}>
        <Imagewrap>
          <img src = "/images/slider-badag.jpg"/>
        </Imagewrap>
        <Imagewrap>
          <img src = "/images/slider-badging.jpg"/>
        </Imagewrap>
        <Imagewrap>
          <img src = "/images/slider-scale.jpg"/>
        </Imagewrap>
        <Imagewrap>
          <img src = "/images/slider-scales.jpg"/>
        </Imagewrap>
    </Carousel>
  )
}

export default Slideimage

const Carousel=styled(Slider)`
  padding-top:20px;
  box-sizing: border-box;
  ul li button{
    &:before{
      font-size:15px;
      color:white;
    }
  }
  .slick-list{
    overflow:visible;
  }
  button{
    z-index:1;
  }
`
const Imagewrap=styled.div`
  img{
    cursor:pointer;
    padding:5px;
    border-radius:7px;
    width:100%;
    height:100%;
    transition:300ms;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

  &:hover{
    border:px solid white;
  }
}
`