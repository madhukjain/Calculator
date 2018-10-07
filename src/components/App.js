import React from 'react'
import AddContainer from "../containers/operations/Add";
import OutputContainer from "../containers/Output";
import NumbersContainer from "../containers/numbers/Numbers";
import ResultContainer from "../containers/operations/Result";
import OperationContainer from "../containers/Operation";
import MultiplyContainer from "../containers/operations/Multiply";
import DivideContainer from "../containers/operations/Divide";

class App extends React.Component {
    render() {
        return (
            <div>
                <OutputContainer />
                <OperationContainer />
                <NumbersContainer />
                <AddContainer />
                <MultiplyContainer />
                <DivideContainer />
                <ResultContainer />
            </div>
        )
    }
}

export default App;
