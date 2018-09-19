import Result from "../components/Result";
import {getResult} from "../actions";
import {connect} from "react-redux";


const mapDispatchToProps = dispatch => ({
   getResult: () => {
      dispatch(getResult())
   }
});

const ResultContainer = connect(null,mapDispatchToProps)(Result);

export default ResultContainer;
