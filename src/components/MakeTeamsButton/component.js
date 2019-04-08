import React from 'react';

const MakeTeamsButton = (props) => {
    return <button disabled={props.length % 2 === 0 ? "disabled" : null} onClick={() => props.handleSubmit(props)} >Make Teams</button>
};

export default MakeTeamsButton;