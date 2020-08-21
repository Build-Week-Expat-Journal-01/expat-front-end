import React from 'react';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute';
import UserDashboard from './components/UserDashboard'
import AddStory from './components/AddStory';


//shaq: Added <Route path='/addStory' component={AddStory}/> just for visualization of component

function App() {

  return (
    <>

      <Router>
        <Route exact path='/' component={Login}/>
        <Route exact path='/' component={Register}/>
        <Route path='/addStory' component={AddStory}/>
        <PrivateRoute exact path='/userDashboard' component={UserDashboard}></PrivateRoute>
        
      </Router>
    </>
  );
}

export default App;
