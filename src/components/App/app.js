import React from 'react';
import './../../App.css';
import Header from '../Header/header';
import Landing from '../Landing/landing';
import Footer from '../Footer/footer';
import Welcome from '../Welcome/welcome';
import Login from '../login/login';
import SignUp from '../SignUp/signUp';
import ErrorPage from '../ErrorPage/errorPage';
//SPA pour les routes
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 

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
