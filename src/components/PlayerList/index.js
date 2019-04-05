
import { connect } from 'react-redux';
import PlayerList from './component';

const mapStateToProps = (state) => {
    return {
        players: state,
    }
}

export default connect(mapStateToProps)(PlayerList);


