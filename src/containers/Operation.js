import Operation from "../components/Operation";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        currOperation : state.operationsReducer.operation
    }
};


const OperationContainer = connect(mapStateToProps,null)(Operation);

export default OperationContainer
