import {addOperation} from "../actions/index";
import Add from "../components/Add";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => ({
    useAddOperation: () => {
        dispatch(addOperation())
    }
});

const AddContainer = connect(null, mapDispatchToProps)(Add)

export default AddContainer;
