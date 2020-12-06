import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './About';
import Info from './Info';


function App() {
   return (
   		<div>
        <Router>

            <Navbar />

			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
        <Route path="/info">
          <Info />
        </Route>
			</Switch>
    
        </Router>
        </div>
  );
}

export default App;
