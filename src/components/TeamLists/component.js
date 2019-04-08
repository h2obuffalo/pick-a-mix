import React from 'react';
import PlayerItem from '../PlayerItem';

const TeamLists = ({players}) => {
    const team1 = [];
    const team2 = [];

    players.forEach((player) => {
        player.team === 2 ? team1.push(player) : team2.push(player);
    })

    return(
        <div className="container align-items-center" >
            <div className="row">
                <div className="col-12 col-md-6 col-xl-6">
                    <ul className="left-list"  >
                    <h3> Team One </h3>
                      {team1.map(
                        (player, id)=> <PlayerItem {...player} key={id} />)}
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-xl-6">
                    <ul className="right-list" >
                    <h3> Team Two </h3>
                      {team2.map(
                        (player, id)=> <PlayerItem {...player} key={id} />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TeamLists;

