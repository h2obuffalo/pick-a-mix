import React from 'react';

const MakeTeamsButton = (props) => {
    return <button onClick={() => props.handleSubmit(props.players)} >Make Teams</button>
};

export default MakeTeamsButton;