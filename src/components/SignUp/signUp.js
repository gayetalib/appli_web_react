import React, { Component } from 'react';
import profile from './../../images/Gaye.jpeg';
import Axios from 'axios';

class SignUp extends Component {

    // constructor(props){

    //    super(props);
    //    this.onChangePrenom = this.onChangePrenom.bind(this);
    //    this.onChangeNom = this.onChangeNom.bind(this);
    //    this.onChangeEmail = this.onChangeEmail.bind(this);
    //    this.onSubmit = this.onSubmit.bind(this);

    //    this.
    // }
    state = {
        prenom : '',
        nom: '',
        email : ''
     }

    handleAddPrenom = async e => {
        await this.setState({
            prenom : e.target.value,
        }) 
    }

    handleAddNom = async e => {
        await this.setState({
            nom : e.target.value,
        }) 
    }

    handleAddEmail = async e => {
        await this.setState({   
            email : e.target.value
        }) 
    }

    onSubmit = (e) => { 
       e.preventDefault();
       let formData = new FormData();
       FormData.append('prenom',this.state.prenom );
       FormData.append('nom', this.state.nom);
       FormData.append('email', this.state.email);

       const url = "http://localhost:8000/gaye_codeur/appli_web_react/react-backend/insert.php";

       Axios.post(url, formData)
       .then( res => console.log(res.data))
       .catch(err => console.log(err));
       
    }
    

    render() {
        return (
            <div className="container">
                <div className="row" style={{paddingTop:'50px'}}>
                     <div className="col-md-6">
                        <form> 
                                <p className="h4 text-center mb-4">Inscription</p>
                                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                Prénom
                                </label>
                                <input type="text" className="form-control" name="prenom" id="prenom"
                                value={this.state.prenom} onChange={this.handleAddPrenom}/>
                                <br />
                                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                Nom
                                </label>
                                <input type="text" id="nom" className="form-control" name="nom"
                                value={this.state.nom} onChange={this.handleAddNom}/>
                                <br />
                                <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                                Email 
                                </label>
                                <input type="email" id="email" className="form-control" name="email"
                                value={this.state.email}  onChange={this.handleAddEmail}/>
                                <br />
                                <div className="text-center mt-4">
                                <button color="unique" type="submit" className="btn btn-info" onClick={this.onSubmit}>
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
