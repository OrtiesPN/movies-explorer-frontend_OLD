import './App.css';
import { useState, useEffect, useCallback } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  function handleBurgerMenuClick () {
    setIsBurgerClicked(!isBurgerClicked)
  }

  return (
    <div className="app">
      <div className="app__container">
        <Routes>
          <Route 
            path="/"
            element={
              <>
                <Header 
                  isLoggedIn={loggedIn}
                  isBurgerClicked={isBurgerClicked}
                  onClickBurger={handleBurgerMenuClick}
                />
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <Portfolio />
                <Footer />
              </>
          }/>
          {/* <Route path="/signup" element={}/> */}
          {/* <Route path="/signin" element={}/> */}
          <Route
            path="/movies" 
            element={
              <Header 
                isLoggedIn={loggedIn}
                isBurgerClicked={isBurgerClicked}
                onClickBurger={handleBurgerMenuClick}
              />
            }/>
          <Route
            path="/saved-movies" 
            element={
              <Header 
                isLoggedIn={loggedIn}
                isBurgerClicked={isBurgerClicked}
                onClickBurger={handleBurgerMenuClick}
              />
            }/>
          <Route
            path="/profile" 
            element={
              <Header 
                isLoggedIn={loggedIn}
                isBurgerClicked={isBurgerClicked}
                onClickBurger={handleBurgerMenuClick}
              />
            }/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
