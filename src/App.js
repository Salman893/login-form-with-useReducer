import './App.css';
import { Fragment, useEffect } from 'react';
import MainHeader from './components/Header/MainHeader';
import Login from './components/Login/Login';
import { useState } from 'react';
import Home from './components/Home/Home';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const login = localStorage.getItem('isLoggedIn');
    if(+login === 1) {
      setIsLoggedIn(true);
    }
  }, [])
  

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', 1);
    setIsLoggedIn(true);
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  return (
    <Fragment>
      <MainHeader onLogout={logoutHandler}  isAuthenticated={isLoggedIn}/>
      {!isLoggedIn && <Login onLogin={loginHandler}/>}
      {isLoggedIn && <Home />}
    </Fragment>
  );
}

export default App;
