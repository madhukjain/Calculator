import React from 'react'
import AddContainer from "../containers/Add";
import AnswerContainer from "../containers/Answer";

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
