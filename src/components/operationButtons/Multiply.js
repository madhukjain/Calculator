import React from "react";

class Multiply extends React.Component{
    render() {
        const { multiply } = this.props;
        return (
            <div>
                <button onClick={() => multiply()}>*</button>
            </div>
        )
    }
}

export default Multiply;
