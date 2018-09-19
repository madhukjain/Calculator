import React from 'react';

class Add extends React.Component {
    render() {
        const { useAddOperation } = this.props;

        return (
            <div>
                <button onClick={()=> useAddOperation()}>+</button>
            </div>
        )
    }
}

export default Add;
