import { connect } from 'react-redux';
import MakeTeamsButton from './component';
import { addPlayersAPI } from '../../actions/apiActions'
import history from '../../history';


const mapStateToProps = (state) => {
    return {
        players:state
    }
}

const mapDispatchToProps = dispatch => {

    return {
        handleSubmit: ({players}) => {
            console.log(players)
            dispatch(addPlayersAPI(players))
            history.push("/teams")
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeTeamsButton);