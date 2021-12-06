import React, { useState } from 'react';
import {Switch, Route, useHistory, NavLink} from 'react-router-dom';
import './App.css';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogOverview from "./pages/BlogOverview";
import BlogPost from "./pages/BlogPost";

// STAPPENPLAN ROUTING IMPLEMENTEREN
// - npm install react-router-dom@5.1.2
// BrowserRouter as Router importeren uit react-router-dom (index.js)
// Switch, Route importeren uit react-router-dom (App.js)
// Implementeren:
// 1. Routing "bedenken" door het Switch en Route component te gebruiken in App.js
// 2. Maak een navigatiebalk met de links naar de paginas (netjes om ul te gebruiken!) Zorg dat deze op iedere pagina te zien is. Gebruik hiervoor het NavLink component en zoek op hoe het ookalweer werkte met die actieve CSS class
// 3. Maak op de Login pagina een knop "Inloggen". Wanneer de gebruiker daarop klikt, gebruik je useHistory om de gebruiker door te sturen naar BlogOverzichtPagina
// BLOGPOST OVERZICHT PAGINA MAKEN:
// 1. Maak eerst met eigen-bedachte tekst een structuur voor de overzichtspagina (wat moet er allemaal op? Maak ook alvast een Link-component, etc. )
// 2. Importeer de "echte" posts zoals beschreven in het voorbeeld
// 3. CHECK YOURSELF BEFORE YOU WRECK YOURSELF! Console log de data en bekijk wat het is? Array? Object? Object met Arrays of andersom?
// 4. Is er een handige manier om al die data niet handmatig uit te hoeven schrijven?
// 5. Zorg ervoor dat er een link en titel voor iedere post wordt gegenereerd

function App() {

    const [isAuthenticated, toggleIsAuthenticated] = useState()

    const history = useHistory()

    function handleLogOut () {
        toggleIsAuthenticated(false);
        history.push('/')
    }

  return (
      <>
          <nav className="nav-bar">
              <h2>Robbert's Fantastische Blogplatform</h2>
              <ul>
                  <li className="home-btn">
                      <NavLink to="/" exact className="nav-link">Home</NavLink>
                  </li>
                  <li style={isAuthenticated ? {display:"contents"} : {display:"none"}}>
                      <NavLink to="/blogposts" className="nav-link">Blog Overzicht</NavLink>
                  </li>
                  <li style={!isAuthenticated ? {display:"contents"} : {display:"none"}}>
                      <NavLink to="/login" className="nav-link">Login</NavLink>
                  </li>
              </ul>
              {isAuthenticated ?
                  <button type="button" onClick={handleLogOut} className="log-out-btn">Uitloggen</button>
                  : <></>
              }
          </nav>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/blogposts">
                <BlogOverview />
            </Route>
            <Route path="/login">
                <LoginPage
                value={isAuthenticated}
                toggle={toggleIsAuthenticated}
                />
            </Route>
            <Route exact path="/blogposts/:id">
                <BlogPost />
            </Route>
        </Switch>
      </>
  );
}

export default App;
