import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import classes from './Header.module.css'


class Header extends Component {
  

  render() {
    return (
      <div className={classes.Header}>
        <ul className={classes.Container}>
            <li><a href='#'>ACCUEIL</a></li>
            <li><a href='#'>RESSOURCES</a></li>
            <li><a href='#'>CONNEXION</a></li>
            
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps, actions)(Header)
