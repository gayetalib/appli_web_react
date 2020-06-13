import React, { Component } from 'react'
import {Link} from 'react-router-dom'; 
import profile from './../../images/Gaye.jpeg';


class Landing extends Component  {

        state = {
            class1 : 'btn btn-secondary',
            class2 : 'btn btn-info', 
        }
    
        changeButton1 = () => {
            this.setState({
                class1 : 'btn btn-success', 
            })
        }

        changeButton2 = () => {
            this.setState({
                class2 : 'btn btn-success',
            })
        }

        clearClassButton = () => {
            if (this.state.class1 === 'btn btn-success') {
                this.setState({
                    class1 : 'btn btn-secondary', 
                }) 
            }
            if (this.state.class2 === 'btn btn-success') {
                this.setState({
                    class2 : 'btn btn-info', 
                }) 
            }

        }
        
        render(){
            return (
                <main className="">
                    <div className="container">
                        <div className="row justify-centent-center" id="frist_row">

                            <div className="col-md-4">
                                <Link to="/signup"><button className={this.state.class1} onMouseOver={this.changeButton1} onMouseOut={this.clearClassButton}>Inscription</button></Link>       
                            </div>

                            <div className="col-md-4" style={{paddingTop:"-200px"}}>
                                 {/* <img className="rounded-circle" src={profile} alt="Circle image" height="350px" width="350px" /> */}
                            </div>
                            
                            <div className="col-md-4" style={{paddingLeft:"160px"}}>
                                <Link to="/login"><button className={this.state.class2} onMouseOver={this.changeButton2} onMouseOut={this.clearClassButton}>Connexion</button></Link>                  
                            </div>
                        </div> 
                    </div>
                </main>
            )
        }
     
}

export default Landing
