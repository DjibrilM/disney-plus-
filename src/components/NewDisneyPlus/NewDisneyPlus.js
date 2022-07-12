import { Link } from "react-router-dom"
import classes from "../recommands/recommands.module.css"

import NewPhoto1 from "../../public/images/thor.webp"
import NewPhoto2 from "../../public/images/docto-strange.jpg"
import NewPhoto3 from "../../public/images/mooon-night.jpg"
import NewPhoto4 from "../../public/images/wandaVision.jpg"
import { useEffect,useState } from "react"
import { connect } from "react-redux"

const NewDisney = (props)=>{

const [movies,setMovies] = useState([])

    useEffect(()=>{
        setMovies(arr=>{
         return [...props.newDisneyMovies];
        })
      },[props.newDisneyMovies])
    

// const [movies,setMovies] = useState()

// useEffect(()=>{
//     setMovies(arr=>{
//      return [...props.newDisneyMovies];
//     })
//   },[props.newDisneyMovies])

//   const moviesList = props.newDisneyMovies.length > 0 ?  
//   movies.map(element => {
//       return (
//           <div className={classes.wrap} key={element.id}>
//               <Link to={'detail/'+element.id}>
//                   <img src={element.cardImg} alt={element.title}></img>
//               </Link>
//           </div>     
//   )
//   }):'nothing founad';
  
let moviesList;

 if(movies.length > 0){
 moviesList = movies.map(element=>{
   return ( <div className={classes.wrap} key={element.id}>
               <Link to={'/detail/'+element.id} exact>
                   <img src={element.cardImg} alt={element.title}></img>
              </Link>
             </div>     )
})
 }
console.log(props.newDisneyMovies, 'new movies from the disney studio ')

    return (
      <section className={classes.Recommanded}>
        <h4>New to Disney</h4>
        <div className={classes.container}>
            {moviesList}
        </div>
      </section>
    )
}


const mapStateToProps = state=>{
    return {
        newDisneyMovies:state.movies.newDisney
    }
}
export default connect(mapStateToProps)(NewDisney) 

