import classes from "./viewer.module.css";
import photo1 from "../../public/images/viewers-marvel.png";
import photo2 from "../../public/images/viewers-disney.png";
import photo3 from "../../public/images/viewers-national.png";
import photo4 from "../../public/images/viewers-pixar.png";
import photo5 from "../../public/images/viewers-starwars.png";
//videos 
import video1 from "../../public/videos/1564676115-marvel.mp4";
import video2 from "../../public/videos/1564674844-disney.mp4";
import video3 from "../../public/videos/1564676296-national-geographic.mp4";
import video4 from "../../public/videos/1564676714-pixar.mp4";
import video5 from "../../public/videos/1608229455-star-wars.mp4";


const Viewers  = ()=>{
return (
   <div className={classes.container}>
      <div className={classes.wrap}>
          <img src={photo1} />
          <video src={video1} autoPlay={true} loop = {true} playsInline={true} ></video>
      </div>

      <div className={classes.wrap}>
          <img src={photo2} />
          <video src={video2} autoPlay={true} loop = {true} playsInline={true} ></video>
      </div>
      
      <div className={classes.wrap}>
          <img src={photo3} />
          <video src={video3} autoPlay={true} loop = {true} playsInline={true} ></video>
      </div>
      

      <div className={classes.wrap}>
          <img src={photo4} />
          <video src={video4} autoPlay={true} loop = {true} playsInline={true} ></video>
      </div>
      
      <div className={classes.wrap}>
          <img src={photo5 } />
          <video src={video5} autoPlay={true} loop = {true} playsInline={true} ></video>
      </div>

   </div>
)
}

export default Viewers