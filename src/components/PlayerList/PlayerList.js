import React from 'react';
import PlayerItem from './';

const PlayerList = (props) => {
       return  <ul>
                    {props.players.map((item, i) => (
                        <PlayerItem  player={item} key={i} />
                                                   ))}
                </ul>

 };


export default PlayerList;