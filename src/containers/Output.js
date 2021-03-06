import {connect} from "react-redux";
import Output from "../components/Output";

const mapStateToProps = state => {
    return {
        count: state.operationsReducer.count
    }
};

const OutputContainer = connect(mapStateToProps,null)(Output);

export default OutputContainer;
