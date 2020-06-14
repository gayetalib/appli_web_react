import React, { Component } from 'react';
import profile from './../../images/Gaye.jpeg';

class SignUp extends Component {

    constructor(props){

       super(props);
       this.onChangePrenom = this.onChangePrenom.bind(this);
       this.onChangeNom = this.onChangeNom.bind(this);
       this.onChangeEmail = this.onChangeEmail.bind(this);
       this.onSubmit = this.onSubmit.bind(this);

       this.state = {
          prenom : '',
          nom: '',
          email : ''
       }
    }

    onChangePrenom = (e) => {
      this.setState({
          prenom : e.target.value
      })
    }

    onChangeNom = (e) => {
        this.setState({
            nom : e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email : e.target.value
        })
    }

    onSubmit = (e) => {
        this.setState({
            
        })
    }
    

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
                                <input type="text" id="defaultFormRegisterNameEx" className="form-control" name="prenom" 
                                value={this.onChangePrenom} onChange={this.onChangePrenom} />
                                <br />
                                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Nom
                                </label>
                                <input type="email" id="defaultFormRegisterEmailEx" className="form-control" name="nom"
                                value={this.onChangeNom} onChange={this.onChangeNom}/>
                                <br />
                                <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                                Email 
                                </label>
                                <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" name="email"
                                value={this.onChangeEmail} onChange={this.onChangeEmail} />
                                <br />
                                <div className="text-center mt-4">
                                <button color="unique" type="submit" className="btn btn-info" onChange={this.onSubmit}>
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
