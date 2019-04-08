import React from 'react';
import PlayerItem from '../PlayerItem';

const TeamLists = ({players}) => {
    const team1 = [];
    const team2 = [];

    players.forEach((player) => {
        player.team === 1 ? team1.push(player) : team2.push(player);
    })

    return(
        <div className="player-lists" >
            <ul className="left-list"  >
              {team1.map(
                (player, id)=> <PlayerItem {...player} key={id} />)}
            </ul>
            <ul className="right-list" >
            {team2.map(
                (player, id)=> <PlayerItem {...player} key={id} />)}
            </ul>
        </div>
    )
}

export default TeamLists;