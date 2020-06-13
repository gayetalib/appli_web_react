import app from 'firebase/app'
import 'firebase/auth';

 // Your web app's Firebase configuration
//  const config = {
//     apiKey: "AIzaSyDXKhl1n0WcGuas-O1HMNrukMQNinKSKDw",
//     authDomain: "appli-web-react.firebaseapp.com",
//     databaseURL: "https://appli-web-react.firebaseio.com",
//     projectId: "appli-web-react",
//     storageBucket: "appli-web-react.appspot.com",
//     messagingSenderId: "743387232040",
//     appId: "1:743387232040:web:42d12cbef5bc084c34821d"
//   };

class Firebase  {
    constructor(){
        app.initializeApp();
        this.auth = app.auth();
    }
}

export default Firebase
