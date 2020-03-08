import React, {useState} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import './App.css';
import MainNavigation from './navigation/MainNavigation'
import AuthContext from './context/auth-context';

export default function App(){

  const [state, setState] = useState({
    token: null,
    userId: null,
  })


  const login = (token, userId, tokenExpiration) => {
    setState({token: token, userId: userId})
  }
  const logout = (token, userId, tokenExpiration) => {
    setState({token: null, userId: null})
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{
        token: state.token,
        userId: state.userId,
        login: login, 
        logout: logout,
      }}>
      <MainNavigation/>
        <main className='main-content'>
          <Switch>
            {state.token && <Redirect from="/auth" to="/" exact/>}
            {state.token &&<Route path="/" component={Home}/>}
            {!state.token && <Route path="/auth" component={AuthPage}/>}
            {!state.token && <Redirect from="/" to="/auth" exact/>}
            {!state.token && <Redirect to="/auth" exact/>}
          </Switch>
        </main>
      </AuthContext.Provider>
    </BrowserRouter>
  );
  

}
