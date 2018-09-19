import React from 'react'
import AddContainer from "../containers/Add";
import NumberButtonsContainer from "../containers/NumberButtons";
import ResultContainer from "../containers/Result";

class App extends React.Component {
    render() {
        return (
            <div>
                <NumberButtonsContainer />
                <AddContainer />
                <ResultContainer />
            </div>
        )
    }
}

export default App;
