import './App.css';
import { useState, useEffect, useCallback } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const navigate = useNavigate();

  // demo dev functions

  const [currentUser, setCurrentUser] = useState({name: "Никита", email: "example@email.com"});
  const [loggedIn, setLoggedIn] = useState(true);

  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  function handleBurgerMenuClick () {
    setIsBurgerClicked(!isBurgerClicked)
  }

  function handleExit() {
    setLoggedIn(false);
    navigate("/");
  }

  // return markup

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
                <Main />
              </>
          }/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route
            path="/movies" 
            element={
              <>
                <Header 
                isLoggedIn={loggedIn}
                isBurgerClicked={isBurgerClicked}
                onClickBurger={handleBurgerMenuClick}
                />
                <Movies />
                <Footer />
              </>
            }/>
          <Route
            path="/saved-movies" 
            element={
              <>
                <Header 
                isLoggedIn={loggedIn}
                isBurgerClicked={isBurgerClicked}
                onClickBurger={handleBurgerMenuClick}
                />
                <SavedMovies />
                <Footer />
              </>
            }/>
          <Route
            path="/profile" 
            element={
              <>
              <Header 
                isLoggedIn={loggedIn}
                isBurgerClicked={isBurgerClicked}
                onClickBurger={handleBurgerMenuClick}
              />
              <Profile
                isLoggedIn={loggedIn}
                user={currentUser}
                onSignout={handleExit}
              />
              </>
            }/>
          <Route
            path="/404" 
            element={<NotFound />}
          />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
