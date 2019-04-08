import React, { Component } from "react";
import Header from "../containers/Header/Header";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Ressources from "./Ressources/Ressources";
import RequireAuthentification from '../helpers/RequireAuthentification'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path="/" component={Ressources} />
                    <Route exact path="/ressources" component={RequireAuthentification(Ressources)} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
