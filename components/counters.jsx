import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters:[
            {id:1 , value: 0},
            {id:2 , value: 1},
            {id:3 , value: 2},
            {id:4 , value: 3},  
        ]
     }
    render() { 
        return ( <div>
            <button 
            onClick = {this.handleReset}
            className="btn btn-primary btn-sm m-2">Reset</button>   
           { this.state.counters.map(counter => 
           <Counter
           key={counter.id}
            onDelete = {this.handleDelete} //this key attribute is internally used by react
            onIncrement = {this.handleIncrement}
            counter = {counter}
            value = {counter.value}
            selected = {true}
            id={counter.id}//these are basically attributes, we can also call events
           />) }
        </div> );
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counter[index] = { ...counter };
        counters[index].value++;
        console.log("DHRUV" , counter.value);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({counters});
    };

    handleDelete = (counterId) => {
        console.log('Event Handler Called', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: counters});
    };
}

export default Counters;