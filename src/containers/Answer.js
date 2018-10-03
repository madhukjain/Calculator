import {connect} from "react-redux";
import Answer from "../components/Answer";

const mapStateToProps = state => {
    return {
        count: state.operationsReducer.count
    }
};

const AnswerContainer = connect(mapStateToProps,null)(Answer);

export default AnswerContainer;
