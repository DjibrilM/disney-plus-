import logo from './logo.svg';
import { Routes , Link , NavLink , Route, useNavigate  } from 'react-router-dom';
import Login from './components/Login/login';
import Header from './components/Header/header';
import Home from './components/home/home';
import { connect } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import Detail from './components/Detail/detail';
import * as actionsCreator from "./store/actions/index"

////

function App(props) {

const navigate = useNavigate()

useEffect(()=>{
  const userData = localStorage.getItem('is-auth');
  const parseData = JSON.parse(userData);


  if(props.isLogedIn || userData){
    props.onLogin(parseData)
    navigate('/home',{replace:true})

  }else{
    navigate('/',{replace:true})
  }
},[props.isLogedIn])



  return (
    <>
    <Header />
      <Routes>
         <Route path='/' element={<Login />}  />

         <Route path='/home' element={<Home />}  /> 

         <Route path='/detail/:id' element={<Detail />}  /> 
   
      </Routes>
      </>
  );
}

const mapStateToProp = state=>{
  return {
    isLogedIn:state.auth.name
  }
}

const mapDispatchToProps = dispacth =>{
  return {
    onLogin:(data)=> dispacth(actionsCreator.login(data))
  }
}

export default connect(mapStateToProp,mapDispatchToProps)(App);
