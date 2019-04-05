import React from 'react';
import PlayerItem from './';

const PlayerList = (props) => {
    console.log(props);
       return  <ul>
                    {props.players.map((item, i) => (
                        <PlayerItem  key={i} />
                                                   ))}
                </ul>

 };


export default PlayerList;