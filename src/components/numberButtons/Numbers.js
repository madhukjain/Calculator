import React from "react";

class Numbers extends React.Component {
    render () {
        const { useSelectedNumber } = this.props;
        return (
            <div>
                <button onClick={() => useSelectedNumber(1)}>1</button>
                <button onClick={() => useSelectedNumber(2)}>2</button>
            </div>
        )
    }
}

export default Numbers;
