import React from 'react';

const MakeTeamsButton = ({players, handleSubmit}) => {

    return <button className ="btn btn-danger makeTeamBtn" disabled={players.length >= 2 ?  false : true} onClick={() => handleSubmit(players)} >Make Teams</button>
};

export default MakeTeamsButton;