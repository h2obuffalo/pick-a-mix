import AddPlayer from './component';
import { connect }  from 'react-redux';
import { addPlayer } from '../../actions'


const mapDispatchToProps = dispatch => {
    return {
        handleSave: (player) => dispatch(addPlayer(player))
    }
};

export default connect(null, mapDispatchToProps)(AddPlayer);