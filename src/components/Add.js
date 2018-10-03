import React from 'react';

class Add extends React.Component {

    render() {
        const { add } = this.props;
        return (
            <div>
                <button onClick={()=> add()}>+</button>
            </div>
        )
    }
}

export default Add;
