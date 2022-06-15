import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from './header/UserMenu';
import UserMenuMoralis from "./header/UserMenuMoralis";
import { MoralisProvider } from "react-moralis";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            The Fledge DAO
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/lookup">
                  Lookup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/vote">
                  Vote
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Buy">
                  Buy
                </NavLink>
              </li>
            </ul>
            <UserMenu />
            <React.StrictMode>
              <MoralisProvider serverUrl="https://9tyik5gpl7u7.usemoralis.com:2053/server" appId="YpIP1OoTNtqjkfpt0dsEeGt9Ni9eVcu68cpua4HM">
                  <UserMenuMoralis />
              </MoralisProvider>
            </React.StrictMode>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;