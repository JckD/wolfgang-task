import React, { Component } from "react";

class Award extends Component {
    render() {
        return (
           <h4 className="award hidden">
               <span>Winner - </span>
               {this.props.awards[this.props.index].award}
           </h4>
        )
    }
}

export default Award;