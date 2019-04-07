import React, { Fragment } from 'react';
import AddPlayer from '../../components/AddPlayer';
import PlayerList from '../../components/PlayerList';
import MakeTeamsButton from '../../components/MakeTeamsButton';

const EnterPlayersScreen = () => {
    return (
        <Fragment>
        <div className="input-left">
        <AddPlayer />
        <MakeTeamsButton />
        </div>
        <div className="list-right">
        <PlayerList />
        </div>
        </Fragment>
        )

}

export default EnterPlayersScreen;