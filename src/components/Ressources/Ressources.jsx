import React, { Component } from "react";
import classes from "./Ressources.module.css";
import { addRessource } from "../../actions";
import {getIntegerList,getContainsOneList, getPrimeNumberList} from "../../selectors";
import { connect } from "react-redux";

class Ressources extends Component {
    renderRessources = ressources => {
        return (
            <ul>
                {ressources.map(ressource => (
                    <li key={ressource}>{ressource}</li>
                ))}
            </ul>
        );
    };

    render() {
       
        return (
            <div className={classes.RessourcesContainer}>
                <div>
                    <button
                        type="button"
                        className={classes.RessourcesButton}
                        onClick={() => this.props.addRessource()}
                    >
                        Ajouter un nombre
                    </button>
                </div>
                <div>Entiers {this.renderRessources(this.props.integerRessources)}</div>
                <div>Contiennent "1" {this.renderRessources(this.props.containsOneRessources)}</div>
                <div>Entiers premiers {this.renderRessources(this.props.primeRessources)}</div>
                <div>Entiers premiers contenant "1"</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    integerRessources: getIntegerList(state),
    containsOneRessources : getContainsOneList(state),
    primeRessources : getPrimeNumberList(state)
});

export default connect(
    mapStateToProps,
    { addRessource }
)(Ressources);
