import React from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {



  return (
    <>
      <Router>
        <Route to='/login' component={Login}/>
        <Route to='/register' component={Register}/>
        
      </Router>
    </>
  );
}

export default App;
