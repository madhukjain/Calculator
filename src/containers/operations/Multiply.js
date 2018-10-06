import Multiply from "../../components/operationButtons/Multiply";
import {connect} from "react-redux";
import {multiply} from "../../actions";

const mapDispatchToProps = dispatch => ({
   multiply: () => {
       dispatch(multiply())
   }
});

const MultiplyContainer = connect(null,mapDispatchToProps)(Multiply);

export default MultiplyContainer;
