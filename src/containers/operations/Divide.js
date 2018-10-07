import Divide from "../../components/operationButtons/Divide";
import {connect} from "react-redux";
import {divide} from "../../actions";

const mapDispatchToProp = dispatch => ({
    divide : () => {
        dispatch(divide())
    }
});

const DivideContainer = connect(null,mapDispatchToProp)(Divide);

export default DivideContainer;
