
import { connect } from 'react-redux';
import TeamLists from './component';

const mapStateToProps = ({players}) => {
    return {
        players
    }
}

export default connect(mapStateToProps)(TeamLists);


