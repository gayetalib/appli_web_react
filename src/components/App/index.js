import React from 'react';
import './../../App.css';
import Header from '../Header';
import Landing from '../Landing';
import Footer from '../Footer';
import Welcome from '../Welcome.js/welcome';
import Login from '../login/login';
import SignUp from '../SignUp/signUp';
import ErrorPage from '../ErrorPage/errorPage';
//SPA pour les routes
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom'; 

function App() {
  return (
      <BrowserRouter>
      <Header/>

      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact  path="/welcome" component={Welcome}/>
        <Route component={ErrorPage} />  {/* page de path car c'est page d'erreur */}    
      </Switch>
  
        <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
