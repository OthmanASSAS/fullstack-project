import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
    class RequireAuthentification extends Component {
        componentWillMount() {
            if (!this.props.isLoggedIn) {
                this.props.history.push("/");
            }
        }
        componentDidUpdate(prevProps) {
            if (!prevProps.isLoggedIn) {
                this.props.history.push("/");
            }
        }

        render() {
            return <ChildComponent />;
        }
    }

    const mapStateToProps = state => ({
        isLoggedIn: state.authentification.isLoggedIn
    });

    return connect(mapStateToProps)(RequireAuthentification);
};
