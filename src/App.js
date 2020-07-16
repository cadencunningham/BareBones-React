
import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './app.css';

const App = () => {
    return(
      <Router>
        <div>
          <Route path="/" component={()=><h1> This is A Bare Bones React App</h1>}/>
        </div>
      </Router>
    );
}

export default App;