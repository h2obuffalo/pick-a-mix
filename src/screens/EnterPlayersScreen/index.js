import React, { Fragment } from 'react';
import AddPlayer from '../../components/AddPlayer';
import PlayerList from '../../components/PlayerList';
import MakeTeamsButton from '../../components/MakeTeamsButton';
import Loading from '../../components/Loading';

const EnterPlayersScreen = () => {
    return (
        <Fragment>
            <Loading>
            <div className="d-flex flex-column align-items-center justify-content-center p-3 block" >
                <div className="col-12 col-md-6 col-xl-4">
                    <AddPlayer />
                    <MakeTeamsButton />
                </div>
                <div className="col-12 col-md-6 col-xl-4">
                    <p> Enter ten players names and their skill level and then click make teams!</p>
                </div>
                </div>
            <div className="d-flex flex-column align-items-center justify-content-center p-3 block" >
                <PlayerList />
            </div>
            </Loading>
        </Fragment>
        )

}

export default EnterPlayersScreen;