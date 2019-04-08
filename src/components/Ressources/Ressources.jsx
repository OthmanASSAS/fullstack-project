import React, { Component } from "react";
import classes from "./Ressources.module.css";
import {addRessource} from '../../actions'
import {connect} from 'react-redux';

class Ressources extends Component {
    render() {
        return (
            <div className={classes.RessourcesContainer}>
                <div>
                    <button type="button" onClick={()=>this.props.addRessource()}>Ajouter un nombre</button>
                </div>
                <div>Entiers</div>
                <div>Contiennent "1"</div>
                <div>Entiers premiers</div>
                <div>Entiers premiers contenant "1"</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps,{addRessource})(Ressources);
