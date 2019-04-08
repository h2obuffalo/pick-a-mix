import React from 'react';

const MakeTeamsButton = (props) => {
    return <button onClick={() => props.handleSubmit(props)} >Make Teams</button>
};

export default MakeTeamsButton;