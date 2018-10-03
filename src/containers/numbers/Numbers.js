import Numbers from "../../components/numberButtons/Numbers";
import {useNumber} from "../../actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
    useSelectedNumber: (payload) => {
        dispatch(useNumber(payload))
    }
});

const NumbersContainer = connect(null, mapDispatchToProps)(Numbers);

export default NumbersContainer;
