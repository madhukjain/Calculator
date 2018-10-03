import React from "react";

class Numbers extends React.Component {
    render () {
        const { useSelectedNumber } = this.props;
        return (
            <div>
                <button onClick={() => useSelectedNumber(1)}>1</button>
            </div>
        )
    }
}

export default Numbers;
