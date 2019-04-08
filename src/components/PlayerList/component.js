import React from 'react';
import PlayerItem from '../PlayerItem';

const PlayerList = (props) => {
    return (
        <ul className="list-group">
            {props.players.map((item, i) => (
                    <PlayerItem  {...item} key={i} />
            ))}
        </ul>)
};

export default PlayerList;