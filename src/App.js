import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddStudent from './components/AddStudent/AddStudent';
import AllStudent from './components/AllStudent/AllStudent';
import EditStudentInfo from './components/EditStudentInfo/EditStudentInfo';

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
        <Route exact path="/all-student">
          <AllStudent />
        </Route>
        <Route exact path="/edit-student/:studentId">
          <EditStudentInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
