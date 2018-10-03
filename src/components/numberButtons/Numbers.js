import React from "react";

class Numbers extends React.Component {
    render () {
        const { useSelectedNumber } = this.props;
        return (
            <div>
                <button onClick={() => useSelectedNumber(1)}>1</button>
                <button onClick={() => useSelectedNumber(2)}>2</button>
                <button onClick={() => useSelectedNumber(3)}>3</button><br />
                <button onClick={() => useSelectedNumber(4)}>4</button>
                <button onClick={() => useSelectedNumber(5)}>5</button>
                <button onClick={() => useSelectedNumber(6)}>6</button><br />
                <button onClick={() => useSelectedNumber(7)}>7</button>
                <button onClick={() => useSelectedNumber(8)}>8</button>
                <button onClick={() => useSelectedNumber(9)}>9</button><br />
                <button onClick={() => useSelectedNumber(0)}>0</button>
            </div>
        )
    }
}

export default Numbers;
