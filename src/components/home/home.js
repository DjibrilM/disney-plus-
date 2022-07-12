import classes from "./home.module.css";
import HomeSlider from "../imageSlider/imageSlide"
import Viewers from "../viewers/viewers"
import Recommandes from "../recommands/recommands"
import NewDisney from "../NewDisneyPlus/NewDisneyPlus"
import Trainding from "../Trainding/Trending"
import { getDocs, collection } from "firebase/firestore"; 
import {db} from "../../firebase"
import { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator  from "../../store/actions/index";
import Spinner from "../UI/spinner/spinner";
import Original from "../original/original"


const Home =  (props)=>{

let recommandedMovies = [];
let newDisney = [];
let originals = [];
let trendings = [];


useEffect( ()=>{

    const fetechData = async ()=>{

        if(props.movies.length < 1){

        try {
          
            props.onLoadStart();
            const querySnapshot = await getDocs(collection(db, "Movies"));

            querySnapshot.docs.forEach(element => {
                switch (element.data().type) {
                    case 'recommend':
                    recommandedMovies.push({id:element.id,...element.data()})   
                        break;     
                    case 'new':
                        newDisney.push({id:element.id,...element.data()})   
                            break;  
                    case 'trending':
                        trendings.push({id:element.id,...element.data()})   
                       break;    
                    case 'original':
                        originals.push({id:element.id,...element.data()})   
                       break;                          
                    default:
                        break;
                  
                }
            });
        
    
    props.onLoadTrends(trendings);
    props.onLoadNew(newDisney)
    props.onLoadRecommand(recommandedMovies)
    props.onLoadOriginal(originals);
    props.onLoadingEnd();
    
        } catch (error) {
            console.log(error, 'something went wrong with firebase')
            props.onLoadingEnd();
        }  
        }
    }


fetechData()
},[])

const spinner = (props.isLoading ?  <Spinner /> : '' )
return(

    <main className={classes.Home}>
       {console.log(props.isLoading)}
       { spinner }
       <HomeSlider />
       <Viewers />
       <Recommandes />
       <Original />
       <NewDisney />
       <Trainding />
       <div  className={classes.margin}></div>
    </main>


)
}

const mapStateToProps = state=> {
return {
    isLoading:state.movies.isLoading,
    movies:state.movies.recommand
}
}

const mapDispatchToprops = dispatch =>{
    return {
      onLoadRecommand:(movies)=> dispatch(actionCreator.recommanded(movies)),
      onLoadNew:(movies)=> dispatch(actionCreator.newDisney(movies)),
      onLoadTrends:(movies)=> dispatch(actionCreator.trends(movies)),
      onLoadOriginal:(movies)=> dispatch(actionCreator.original(movies)),
      onLoadStart:()=> dispatch(actionCreator.loadingStart()),
      onLoadingEnd:()=> dispatch(actionCreator.loadingEnd())
    }
}

 

export default connect(mapStateToProps,mapDispatchToprops)(Home)