import {addOperation} from "../../actions/index";
import Add from "../../components/operationButtons/Add";
import {connect} from "react-redux";
import {increase} from "../../actions/index";

const mapDispatchToProps = (dispatch) => ({
    add: () => {
        dispatch(increase())
    }
});

const AddContainer = connect(null, mapDispatchToProps)(Add);

export default AddContainer;
