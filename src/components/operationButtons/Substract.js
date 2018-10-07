import React from "react";

class Subtract extends React.Component {
    render() {
        const { subtract } = this.props;
        return (
            <div>
                <button onClick={() => subtract()}>-</button>
            </div>
        )
    }
}

export default Subtract;
