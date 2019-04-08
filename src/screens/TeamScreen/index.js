import React, { Fragment } from 'react';
import TeamLists from '../../components/TeamLists';
import RestartButton from '../../components/RestartButton';


const TeamScreen = (props) => {
    return(
        <Fragment>
        <TeamLists />
        <RestartButton />
        </Fragment>
    )

}

export default TeamScreen;