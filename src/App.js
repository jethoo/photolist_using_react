import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import PhotoList from './PhotoList';
import PhotoDetails from './PhotoDetails';


class App extends Component {
  render() {
    return (
      <section>
       <Switch> // even if two same paths have same components, switch helps to render just one.
        <Route exact path="/" component= {PhotoList} />
        <Route path="/:photo_id" component={PhotoDetails} />
        //using :photo_id after / means, anything you type after /, it is going to show PhotoDetails component.

       </Switch>
     </section>
    );
  }
}

export default App;
