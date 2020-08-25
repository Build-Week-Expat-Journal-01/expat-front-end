import React from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute';
import UserDashboard from './components/UserDashboard'
import AddStory from './components/AddStory';
import Test from './components/Test'


//shaq: Added <Route path='/addStory' component={AddStory}/> just for visualization of component

function App() {

  return (
    <>

      <Router>
        <Route exact path='/' component={Login}/>
        <Route exact path='/' component={Register}/>
        <Route exact path='/' component={Test}/>
        <PrivateRoute path='/addStory' component={AddStory}/>
        <PrivateRoute exact path='/userDashboard' component={UserDashboard}></PrivateRoute>
        
      </Router>
    </>
  );
}

export default App;
