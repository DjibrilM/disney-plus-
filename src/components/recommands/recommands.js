import { Link } from "react-router-dom"
import classes from "./recommands.module.css"
import RecPhoto1 from "../../public/images/coco.jpg"
import RecPhoto2 from "../../public/images/scale.jpeg"
import RecPhoto3 from "../../public/images/watch_luca_in_uk_and_us.webp"
import RecPhoto4 from "../../public/images/loks6.webp"
import { connect } from "react-redux"
import { useEffect, useState } from "react"

const Recommandes = (props)=>{


const [movies , setMovies] = useState([]);


  useEffect(()=>{
    setMovies(arr=>{
     return [...props.Recommands];
    })
  },[props.Recommands])



  

const moviesList = props.Recommands.length > 0 ?  
movies.map(element => {
    return (

        <div className={classes.wrap} key={element.id}>
            <Link to={'/detail/'+element.id} >
                <img src={element.cardImg} alt={element.title}></img>
            </Link>
        </div>     
)
}):'nothing founad';

    return (
      <section className={classes.Recommanded} >
        <h4>Recommanded for You</h4>
        <div className={classes.container}>
            {moviesList}
        </div>         
      </section>
    )
}

const mapStateToProps = state=>{
    return {
        Recommands:state.movies.recommand,
    }
}

export default connect(mapStateToProps)(Recommandes)

