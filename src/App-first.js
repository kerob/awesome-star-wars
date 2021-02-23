import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
//import "./App.css";

// import Card from "./Card.js";
// import "./Card.css";

// import InputEvents from "./events/InputEvents";
// import MovementEvents from "./events/MovementEvents";
// import "./events/Events.css";

// import FormValidation from "./FormValidation";
// import "./events/Events.css";

// import ShoppingList from "./shoppingList/ShoppingList";
// import "./shoppingList/ShoppingList.css";

// import AddressBook from "./addressBook/AddressBook";
// import CardHooks from "./addressBook/CardHooks";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import "./Default.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

class App extends Component {
  //Boilerplate code to simulate a logged in and logged out state
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
    }; //defaults a logged out state

    this.doLogIn = this.doLogIn.bind(this);
    this.doLogOut = this.doLogOut.bind(this);
  }

  doLogIn() {
    this.setState({
      authenticated: true,
    }); //sets state to simulated logged in
  }

  doLogOut() {
    this.setState({
      authenticated: false,
    }); //sets state to simulate logged out
  }

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about/123">About John</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <Switch>
            {/*<Route exact path="/" component={Home} />*/}
            <Route
              exact
              path="/"
              render={() => {
                return this.state.authenticated ? ( //conditional to check logged in status
                  <Redirect to="/account" />
                ) : (
                  //if true redirects components to the account page
                  <Fragment>
                    <Home />
                    <p>Please Log In!</p>
                    <button onClick={this.doLogIn}>Log in</button>
                  </Fragment>

                  //if false, defaults to the home component and additional log in mock up
                );
              }}
            />

            <Route
              path="/account"
              render={() => {
                return this.state.authenticated ? (
                  <Fragment>
                    <Home />
                    <p>Welcome Back!</p>
                    <button onClick={this.doLogOut}>Log Out</button>
                  </Fragment>
                ) : (
                  <Redirect to="/" />
                );
              }}
            />

            <Redirect from="/about/:userId" to="/info/:userId" />
            <Route path="/info/:userId" component={About} />

            <Redirect from="/about" to="/info" />
            <Route path="/info" component={About} />

            <Route path="/contact" component={Contact} />

            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
