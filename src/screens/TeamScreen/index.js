import React, { Fragment } from 'react';
import TeamLists from '../../components/TeamLists';
import RestartButton from '../../components/RestartButton';
import Loading from '../../components/Loading';


const TeamScreen = (props) => {
    return(
        <Fragment>
            <Loading>
                <TeamLists />
                <RestartButton />
            </Loading>
        </Fragment>
    )

}

export default TeamScreen;