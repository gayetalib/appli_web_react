import React from 'react';
//Insert bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function Header () {
        return (
           <header>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">React JS App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/accueil">Accueil <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/presentation">Présentation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/apropos">Apropos</a>
                    </li>
                    </ul>
            
                </div>
                </nav>
           </header>
        )
}

export default Header
