import * as React from 'react';
import { Alert, Button } from 'reactstrap';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
//const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

          <div>
              <Alert color="success">
                  <strong>Well done!</strong> You successfully read this important alert message.
              </Alert>
              <Alert color="info">
                  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
              </Alert>
              <Alert color="warning">
                  <strong>Warning!</strong> Better check yourself, you're not looking too good.
              </Alert>
              <Alert color="danger">
                  <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </Alert>
              <Button className="menu-btn border-0 text-dark">
                  <i className="fa fa-bars" />
              </Button>
          </div>
      </div>
    );
  }
}

export default App;
