import React,  { Component } from "react";
import Award from "./award";

class Ceramony extends Component {
    render() {

        // Create array of all awards for this Award ceremony for this year to populate list
        let currentAwards = [];
        let imageString = '';
        let alt = '';
        this.props.awards.forEach((element, index) => {
             if(this.props.awards[index].ceremony === this.props.item) {
                imageString = this.props.awards[index].logo
                alt = this.props.item
                currentAwards.push(this.props.awards[index]) 
            }
        });

        // require ceremony image
        const image = require('../images/' + imageString).default   

        return (
            <div className="ceremony hidden" name={this.props.year}>
                <div>
                    <h3>{this.props.ceremonies[this.props.index]}</h3>
                    {
                        // map the awards for this current ceremony
                        currentAwards.map((item, index) => <Award awards={this.props.awards} index={index}/>)
                    }
                </div>
               
                <img src={ image } alt={alt}/>
            </div>  
        )
    }
}

export default Ceramony;