import React, { Component, Fragment } from "react";
import "./style.css";

class Loading extends Component {
    componentDidMount() {
        if (!this.props.loaded) {
            this.props.handleLoad();
        }
    }

    render() {
        const { children, loaded } = this.props;
        return !loaded ? (
            children
        ) : (
            <Fragment>
                    <div className="lds-ripple"><div></div></div>
                    <h3 className="loading-message">Loading...</h3>
            </Fragment>
        );
    }
}

export default Loading;
