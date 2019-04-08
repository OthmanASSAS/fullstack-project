import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import {Link} from 'react-router-dom'

import classes from "./Header.module.css";

class Header extends Component {
    onClickAuthentification = () => {
        this.props.setAuthentification(!this.props.isLoggedIn);
    };

    render() {
        return (
            <div className={classes.Header}>
                <ul className={classes.Container}>
                    <li>
                        <Link to='/'>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/ressources">Ressources</Link>
                    </li>
                    <li>
                        <a href="#" onClick={this.onClickAuthentification}>
                            {this.props.isLoggedIn?'Déconnexion':'Connexion'}
                        </a>

                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.authentification.isLoggedIn
});

export default connect(
    mapStateToProps,
    actions
)(Header);
