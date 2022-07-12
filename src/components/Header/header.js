import { Link } from "react-router-dom"
import classes from "./header.module.css"
import Logo from "../../public/images/PngItem_6759751.png"
import { auth, provider } from "../../firebase"
import { signInWithPopup,signOut } from "firebase/auth"
import { connect } from "react-redux"
import * as reduxActions from "../../store/actions/index"
import {useNavigate} from "react-router-dom"

const loginHandler = (props)=>{

  console.log(props.name)

  if(!props.name){
  signInWithPopup(auth,provider).then(result=>{
    const user = {
      name:result.user.displayName,
      photo:result.user.photoURL,
      email:result.user.email
    }
    
    props.onSignIn(user);
    const userData = JSON.stringify(user);
    localStorage.setItem('is-auth',userData);
  })
  .catch(error=>{
    console.log(error)
  })
}else{
  signOut(auth,provider).then(result=>{
  props.onSignOut();
  localStorage.removeItem('is-auth');

  })
  .catch(err=>console.log(err))
}


}



const Header = (props)=>{




return (
  <>
 <header className={classes.Header}>
    <div className={classes.Logo}>
      <Link to={"/home"}> <img src={Logo}  alt="Logo" /></Link> 
    </div>

   {props.name ?
    <nav className={classes.NavMenu}>
    <Link to={"/home"}> <i className='bx bxs-home'></i> <span>HOME</span> 
    </Link> 

    <Link to={"/home"}><i className='bx bx-search'></i> <span>SEARCH</span> 
    </Link> 


    <Link to={"/home"}> <i className='bx bx-plus'></i> <span>WATCHLIST</span> 
    </Link> 


    <Link to={"/home"}><i className='bx bxs-star' ></i> <span>ORIGINAL</span> 
    </Link> 


    <Link to={"/home"}><i className='bx bx-movie'></i> <span>MOVIES</span> 
    </Link> 

    <Link to={"/home"}> <i className='bx bx-tv'></i> <span>SERIES</span> 
    </Link> 
    </nav>
    :null}


   {props.name?
   <div className={classes.logout}>
   <img src={props.photo} className={classes.profileImage} />

   <div onClick={()=>loginHandler(props)} className={classes.dropDown}>Sign Out</div>
   </div>
   :
   <button className={classes.LoginBtn} onClick={()=> loginHandler(props)}>login</button>
   }
  

 </header>



{/* //bottom menu */}

{props.name ?
 <nav className={classes.BottomMenue}>
    <Link to={"/home"}> 
    <i className='bx bxs-home'></i> <span>HOME</span> 
    </Link> 

    <Link to={"/home"}><i className='bx bx-search'></i> <span>SEARCH</span> 
    </Link> 

    <Link to={"/home"}><i className='bx bxs-star' ></i> <span>ORIGINAL</span> 
    </Link> 


    <Link to={"/home"}><i className='bx bx-movie'></i> <span>MOVIES</span> 
    </Link> 

    <Link to={"/home"}> <i className='bx bx-tv'></i> <span>SERIES</span> 
    </Link> 
    </nav>
:''}


 </>

)
}

const mapStateToProps = state =>{
  return {
    photo:state.auth.photo,
    name:state.auth.name,
    email:state.auth.email,
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    onSignIn:(response)=> dispatch(reduxActions.login(response)),
    onSignOut:()=> dispatch(reduxActions.signOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)