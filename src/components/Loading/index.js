import { connect } from "react-redux";
import Loading from "./component";
// import { getGameData } from "../../data/API_actions";

const mapStateToProps = ({ loaded }) => ({
        loaded,
});


export default connect(
    mapStateToProps
)(Loading);
