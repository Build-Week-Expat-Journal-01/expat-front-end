import React from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {



  return (
    <>
        <h1>Welcome to expat</h1>
        <h3>returning user?</h3>
        <button>Login</button>
        <h3>new user?</h3>
        <button>Register</button>
      <Router>
        <Route to='/login' component={Login}/>
        <Route to='/register' component={Register}/>
        



      </Router>
    </>
  );
}

export default App;
