import React from 'react';

const MakeTeamsButton = (props) => {

    return <button className ="btn btn-danger makeTeamBtn" disabled={props.players.players.length >= 2 ?  null : true} onClick={() => props.handleSubmit(props)} >Make Teams</button>
};

export default MakeTeamsButton;