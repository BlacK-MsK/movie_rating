// import logo from './logo.svg';
import './App.css';
import MovieList from "./components/MovieList/MovieList.js"
import Header from "./components/Header/Header.js"
import Signup from "./components/SignUp/Signup.js"
import { useEffect, useState } from 'react';


function App() {
  const [SignedUp, setSignedUp] = useState(false);

  function postRenderHandler() {
    const token = localStorage.getItem("token");
    if(token) {
      setSignedUp(true);
    }
  }

  // function setsuccessfulLoginHandler() {
  //   setLoggedIn(true);
  // }

  function setsuccessfulSignupHandler(){
    setSignedUp(true)
  }

  useEffect(postRenderHandler, []);

  return (
    <>
      <Header />
      {/* {SignedUp ? (<MovieList />) : (<Signup onSuccessfulLogin= {setsuccessfulSignupHandler} />)} */}
      <MovieList />
    </>
  );
}
export default App;
