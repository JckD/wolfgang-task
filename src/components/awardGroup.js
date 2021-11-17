import React,  { Component } from "react";
import { ToggleDivByNames } from "../utils/toggleDiv";
import Ceramony from "./ceramony";

class AwardGroup extends Component {
    render() {

        // Create array of all awards for this year to populate the current award group
        let awards = []
        this.props.data.forEach((element, index )=> {  
            if(this.props.year === this.props.data[index].year) {
                awards.push(this.props.data[index])
            }
        });

        //filter for unique object
        const unique = (value, index, self) => {
            return self.indexOf(value) === index
          }
        
        // create array of unique ceremonies to generate unique ceremony div for each year
        let ceremonies =  awards.map(item => item.ceremony).filter(unique)

        return (
            <div className="awards-group">
                
                  <h2 onClick={() => ToggleDivByNames(this.props.year)}>
                    {this.props.year}
                    <span className="awards-group-italics">Click on the award to read more about the winning entry</span>
                    <span className="awards-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
                    </span>
                  </h2>
                 
                    {
                        // map the Ceremony component to the ceremonies array create earlier
                         ceremonies.map((item, index)=><Ceramony ceremonies={ceremonies} awards={awards} year={this.props.year} item={item} index={index}/>)
                    }

            </div>  
        )
    }
}

export default AwardGroup;