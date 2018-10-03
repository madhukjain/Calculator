import {addOperation} from "../actions/index";
import Add from "../components/Add";
import {connect} from "react-redux";
import {increase} from "../actions";

const mapDispatchToProps = (dispatch) => ({
    add: () => {
        dispatch(increase())
    }
});

const AddContainer = connect(null, mapDispatchToProps)(Add);

export default AddContainer;
