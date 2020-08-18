import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from './components/Login';

import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <PrivateRoute exact path = "/bubbles" component={BubblePage}/>
        <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{/* <PrivateRoute exact path = "/AddBubblePage" component={BubblePage}/> */}
        {/* 
          // Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        
          {/* <PrivateRoute exact path="/protected" component={PrivateRoute}/> */}
                    {/* <Route path="/login" component={Login}/>
                    <Route component={Login} /> */}