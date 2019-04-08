import React, { Fragment } from 'react';
import AddPlayer from '../../components/AddPlayer';
import PlayerList from '../../components/PlayerList';
import MakeTeamsButton from '../../components/MakeTeamsButton';

const EnterPlayersScreen = () => {
    return (
        <Fragment>
        <div className="d-flex flex-column align-items-center justify-content-center p-3 block" >
        <div className="col-12 col-md-6 col-xl-4">
        <AddPlayer />
        <MakeTeamsButton />
        </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center p-3 block" >
        <PlayerList />
        </div>
        </Fragment>
        )

}

export default EnterPlayersScreen;