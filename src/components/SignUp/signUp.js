import React, { Component } from 'react';
import profile from './../../images/Gaye.jpeg';

class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{paddingTop:'50px'}}>
                     <div className="col-md-6">
                                <form action=""> 
                                    <p className="h4 text-center mb-4">Inscription</p>
                                    <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                    Prénom
                                    </label>
                                    <input type="text" id="defaultFormRegisterNameEx" className="form-control" name="prenom" />
                                    <br />
                                    <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                    Nom
                                    </label>
                                    <input type="email" id="defaultFormRegisterEmailEx" className="form-control" name="nom"/>
                                    <br />
                                    <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                                    Email
                                    </label>
                                    <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" name="email" />
                                    <br />
                                    <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                    Password
                                    </label>
                                    <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" name="password" />
                                    <div className="text-center mt-4">
                                    <button color="unique" type="submit" className="btn btn-info">
                                        S'incrire
                                    </button>
                                    </div>
                            </form>
                     </div>       
                     <div className="col-md-6" style={{paddingTop:'30px'}}>
                         <img className="rounded-circle" src={profile} alt="" height="350px" width="350px" title="Gaye Amadou"/>
                     </div>
                </div>
                
    
            </div>
        )
    }
}

export default SignUp
