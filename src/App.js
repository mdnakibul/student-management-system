import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddStudent from './components/AddStudent/AddStudent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AddStudent />
        </Route>
        <Route exact path="/add-student">
          <AddStudent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
