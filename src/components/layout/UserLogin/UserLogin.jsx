import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [userLog, setUserLog] = useState(null);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleUserLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginuser = result.user;
        console.log(loginuser);
        setUserLog(loginuser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUserLogout = () => {
    signOut(auth)
    .then((result) =>{
        console.log(result)
        setUserLog(null)
    })
    .catch((error) =>{
        console.log(error)
    })
  };

  return (
    <div>
      <Link to="userlogin"></Link>

      <h2>User Login And Logout</h2>
      { userLog ?
       <button onClick={handleUserLogout}>Log Out</button> :
      
      <button onClick={handleUserLogin}>Log In</button>}

      {userLog && (
        <div>
          <h3>User : {userLog.displayName}</h3>
          <p>Email: {userLog.email}</p>
          <p></p>
          <img src={userLog.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default UserLogin;
