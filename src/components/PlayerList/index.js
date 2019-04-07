
import { connect } from 'react-redux';
import PlayerList from './component';

const mapStateToProps = ({players}) => {
    return {
        players
    }
}

export default connect(mapStateToProps)(PlayerList);


