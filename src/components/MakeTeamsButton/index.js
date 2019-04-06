import { connect } from 'react-redux';
import MakeTeamsButton from './component';
import { getTeamsRand } from '../../actions/apiActions'
import history from '../../history';


const mapStateToProps = ({players}) => {
    return {
        players,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (players) => {
            dispatch(getTeamsRand(players))
            history.push("/teams")
        }

         }
    };
export default connect(mapStateToProps, mapDispatchToProps)(MakeTeamsButton);