import React from 'react'
import AddContainer from "../containers/operations/Add";
import OutputContainer from "../containers/Output";
import NumbersContainer from "../containers/numbers/Numbers";
import ResultContainer from "../containers/operations/Result";

class App extends React.Component {
    render() {
        return (
            <div>
                <OutputContainer />
                <NumbersContainer />
                <AddContainer />
                <ResultContainer />
            </div>
        )
    }
}

export default App;
