import React, { Component, Fragment } from "react";
import "./style.css";

class Loading extends Component {
    render() {
        const { children, loaded } = this.props;
        return loaded ? (
            children
        ) : (
            <Fragment>
                    <div className="lds-ripple"><div></div></div>
            </Fragment>
        );
    }
}

export default Loading;
