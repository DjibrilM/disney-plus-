import { Link } from "react-router-dom"
import classes from "../recommands/recommands.module.css"

import TrPhoto1 from "../../public/images/starWars.jpg"
import TrPhoto2 from "../../public/images/antMan.webp"
import TrPhoto3 from "../../public/images/falcon.png"
import TrPhoto4 from "../../public/images/guardians.jpeg"
import { connect } from "react-redux"
import { useEffect,useState } from "react"


const Trainding = (props)=>{

 const [movies,setMovies] = useState([])

 useEffect(()=>{
    setMovies(arr=>{
     return [...props.trends];
    })
  },[props.trends])

//   const moviesList = props.trends.length > 0 ?  
//   movies.map(element => {
//       return (
  
//           <div className={classes.wrap} key={element.id}>
//               <Link to={'detail/'+element.id}>
//                   <img src={element.cardImg} alt={element.title}></img>
//               </Link>
//           </div>     
//   )
//   }):'nothing founad';

let moviesList
if(movies.length > 0){
    moviesList = props.trends.map(element=>{
    return (<div className={classes.wrap} key={element.id}>
        <Link to={'/detail/' + element.id} >
            <img src={element.cardImg} alt={element.title}></img>
       </Link>
      </div> )
})
}
  

    return (
      <section className={classes.Recommanded}>
        <h4>Tranding</h4>
        <div className={classes.container}>
            {moviesList}
        </div>
      </section>
    )
}

const mapStateToProps = state=>{
    return {
        trends:state.movies.trends
    }
}
export default connect(mapStateToProps)(Trainding)

