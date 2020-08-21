import React from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute';
import UserDashboard from './components/UserDashboard'


function App() {

  return (
    <>

      <Router>
        <Route exact path='/' component={Login}/>
        <Route exact path='/' component={Register}/>
        <PrivateRoute exact path='/userDashboard' component={UserDashboard}></PrivateRoute>
        
      </Router>
    </>
  );
}

export default App;
