import {connect} from "react-redux";
import {getResult} from "../../actions";
import Result from "../../components/operationButtons/Result";

const mapDispatchToProps = dispatch => ({
    getResult : () => {
      dispatch(getResult())
    }
});

const ResultContainer = connect(null, mapDispatchToProps)(Result);

export default ResultContainer;
