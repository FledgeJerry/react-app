import React from 'react';
import UAuth from '@uauth/js'

function UserMenuMoralis() {

  const uauth = new UAuth({
    clientID: "904b9409-c005-45a1-bf2f-8efefbe990a4",
    redirectUri: "http://localhost:3000/",
    scope: "openid wallet email:optional humanity_check:optional"
  })

  return (
    <div className="relative inline-flex" align="right">
      <button onClick={
  window.login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
  }
}>Connect Wallet</button>
      <script type="module" src="app.js"></script>
     
    </div>
  )


function loginUD() {
  window.login = async () => {
    try {
      console.log('logging in with UD')
      const authorization = await uauth.loginWithPopup()
      console.log(authorization)
      console.log(authorization.idToken.email)
    } catch (error) {
      console.error(error)
    }
  }
}
}

export default UserMenuMoralis;