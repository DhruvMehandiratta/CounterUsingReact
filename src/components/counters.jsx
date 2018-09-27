import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
   
    render() { 
        return ( <div>

            <div>
            <button 
            onClick = {this.handleReset}
            className="btn btn-primary btn-sm m-2">Reset</button>   
            </div>
            
           { this.props.counters.map(counter => 
           <Counter
           key={counter.id}
            onDelete = {this.props.onDelete} //this key attribute is internally used by react
            onIncrement = {this.props.onIncrement}
            counter = {counter}
            value = {counter.value}
            selected = {true}
            id={counter.id}//these are basically attributes, we can also call events
           />) }
        </div> );
    };
}

export default Counters;