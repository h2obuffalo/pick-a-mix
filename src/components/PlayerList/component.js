import React from 'react';
import PlayerItem from '../PlayerItem';

const PlayerList = (props) => {
    console.log(props);
       return  <ul>
                    {props.players.map((item, i) => (
                        <PlayerItem  {...item} key={i} />
                                                   ))}
                </ul>

 };


export default PlayerList;