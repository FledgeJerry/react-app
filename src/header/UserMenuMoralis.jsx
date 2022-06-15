import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

function UserMenuMoralis() {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
    if (isAuthenticated) {
}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }
    
    if (!isAuthenticated) {
      return (
        <div>
          <button onClick={() => authenticate()}>Connect Wallet</button>
        </div>
      );
    }
  
    return (
      <div>
        <div className="navbar-brand" to="/">
            Welcome {user.get("username")}
        </div>
        <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
        </div>
    );
  
}

export default UserMenuMoralis;