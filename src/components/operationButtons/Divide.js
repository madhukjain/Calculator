import React from "react";

class Divide extends React.Component {
    render() {
        const { divide } = this.props;
        return (
            <div>
                <button onClick={() => divide()}>/</button>
            </div>
        )
    }
}

export default Divide;
