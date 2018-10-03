import React from 'react'
import AddContainer from "../containers/operations/Add";
import AnswerContainer from "../containers/Output";

class App extends React.Component {
    render() {
        return (
            <div>
                <AnswerContainer />
                <AddContainer />
            </div>
        )
    }
}

export default App;
