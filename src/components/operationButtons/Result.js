import React from "react";

class Result extends React.Component {
    render () {
        return (
            <div>
                <button onClick={() => this.props.getResult()}>=</button>
            </div>
        )
    }
}

export default Result;
