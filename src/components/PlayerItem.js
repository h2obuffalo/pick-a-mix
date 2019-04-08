import React from 'react';



const PlayerItem = ({player_name, skill}) => {
    const skillClass =
    skill === 1
        ? "list-group-item list-group-item-primary" :
    skill === 2
        ? "list-group-item list-group-item-warning" :
    skill === 3
        ? "list-group-item list-group-item-success" :
    null ;
    return <li className={skillClass}>{player_name} </li>
};

export default PlayerItem;