import Subtract from "../../components/operationButtons/Substract";
import {connect} from "react-redux";
import {subtract} from "../../actions";

const mapDispatchToProp = dispatch => ({
   subtract : () => {
       dispatch(subtract())
   }
});

const SubtractContainer = connect(null,mapDispatchToProp)(Subtract);


export default SubtractContainer;
