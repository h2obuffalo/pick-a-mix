
import { connect } from 'react-redux';
import PlayerList from './PlayerList';

const mapStateToProps = (state) => {
    return {
        players: state,
    }
}

export default connect(mapStateToProps)(PlayerList);


