import { Link } from "react-router-dom"
import classes from "../recommands/recommands.module.css"

import TrPhoto1 from "../../public/images/starWars.jpg"
import TrPhoto2 from "../../public/images/antMan.webp"
import TrPhoto3 from "../../public/images/falcon.png"
import TrPhoto4 from "../../public/images/guardians.jpeg"
import { connect } from "react-redux"
import { useEffect,useState } from "react"


const Original = (props)=>{

 const [movies,setMovies] = useState([])

 useEffect(()=>{
    setMovies(arr=>{
     return [...props.original];
    })
  },[props.original])

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
    moviesList = props.original.map(element=>{
    return (<div className={classes.wrap} key={element.id}>
        <Link to={'/detail/'+element.id} >
            <img src={element.cardImg} alt={element.title}></img>
       </Link>
      </div> )
})
}
  

    return (
      <section className={classes.Recommanded}>
        <h4>Orinal</h4>
        <div className={classes.container}>
            {moviesList}
        </div>
      </section>
    )
}

const mapStateToProps = state=>{
    return {
        original:state.movies.original
    }
}
export default connect(mapStateToProps)(Original)

