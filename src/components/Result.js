import React from "react";

class Result extends React.Component {
    render() {
        const { getResult } = this.props;
        return (
            <div>
                <button onClick={() => getResult()}>=</button>
            </div>
        )
    }
}

export default Result;
