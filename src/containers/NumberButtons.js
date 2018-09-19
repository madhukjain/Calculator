import NumberButtons from "../components/NumberButtons";
import {connect} from "react-redux";
import {useNumberOne} from "../actions";

const mapDispatchToProps = dispatch => ({
    useValueOne: () => {
        dispatch(useNumberOne())
    }
});

const NumberButtonsContainer = connect(null,mapDispatchToProps)(NumberButtons);

export default NumberButtonsContainer;

