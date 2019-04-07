import { connect } from 'react-redux';
import RestartButton from './component';
import { deleteTeams } from '../../actions/apiActions'
import history from '../../history';


// const mapStateToProps = ({players}) => {
//     return {
//         players,
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (players) => {
            dispatch(deleteTeams())
            history.push("/")
        }

         }
    };
export default connect(null, mapDispatchToProps)(RestartButton);