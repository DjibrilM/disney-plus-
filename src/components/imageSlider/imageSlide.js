import React from 'react';
import classes from './imageSlider.module.css'
import 'slick-carousel/slick/slick.css';
import  'slick-carousel/slick/slick-theme.css';
import extraCss from "./Extra.css"
import Slider from "react-slick";
import photo1 from "../../public/images/slider-badag.jpg"
import photo2 from "../../public/images/slider-scales.jpg"
import photo3 from "../../public/images/slider-badging.jpg"
import photo4 from "../../public/images/slider-scale.jpg"
import { Link } from 'react-router-dom';


const HomeSlider = (props)=>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };

  return(
<div className={classes.slideContainer}>
  <Slider {...settings} className={classes.Caroussel}>
     <div className={classes.wrapp}>
        <Link to={'#'}> 
          <img src={photo1}></img>
        </Link>
     </div>

  <div className={classes.wrapp}>
        <Link to={'#'}> 
          <img src={photo2}></img>
        </Link>
  </div>   
  <div className={classes.wrapp}>
        <Link to={'#'}> 
          <img src={photo3}></img>
        </Link>
  </div> 

  <div className={classes.wrapp}>
        <Link to={'#'}> 
          <img src={photo4}></img>
        </Link>
  </div> 
  </Slider>
</div>
  )
}

export default HomeSlider
