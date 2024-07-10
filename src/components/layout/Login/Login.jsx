import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../../assets/firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()

  const handleGithubSinIn = () => {
      signInWithPopup(auth, githubProvider)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser)
        setUser(loggedUser)
      })
      .catch(error =>{
        console.log(error)
      })
  }


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const logedInUser = result.user;
        console.log(logedInUser);
        setUser(logedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <div>
        { user ?
      <button onClick={handleSingOut}>Sing Out</button> :
      <button onClick={handleGoogleSignIn}>Google Login</button>}
      <button onClick={handleGithubSinIn}>Github Login</button>
        </div>


      {user && (
        <div>
          <h3>User : {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
