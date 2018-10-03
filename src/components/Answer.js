import React from "react";

class Answer extends React.Component {

    render(){
        return (
            <div>
                <p>{this.props.count}</p>
            </div>
        )
    }
}

export default Answer;
