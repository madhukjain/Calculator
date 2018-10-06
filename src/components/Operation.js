import React from "react";

class Operation extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.currOperation}</p>
            </div>
        )
    }
}

export default Operation;
