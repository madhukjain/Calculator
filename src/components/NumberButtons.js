import React from "react";

class NumberButtons extends React.Component {
    render() {
        const { useValueOne } = this.props;
        return (
            <div>
                <button onClick={() => useValueOne()}>1</button>
                {/*<button>2</button>*/}
                {/*<button>3</button>*/}
                {/*<br/>*/}
                {/*<button>4</button>*/}
                {/*<button>5</button>*/}
                {/*<button>6</button>*/}
                {/*<br/>*/}
                {/*<button>7</button>*/}
                {/*<button>8</button>*/}
                {/*<button>9</button>*/}
                {/*<br/>*/}
                {/*<button>0</button>*/}
            </div>
        )
    }
}

export default NumberButtons
