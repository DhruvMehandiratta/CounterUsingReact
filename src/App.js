import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';

class App extends Component {

  state = { 
    counters:[
        {id:1 , value: 0},
        {id:2 , value: 1},
        {id:3 , value: 2},
        {id:4 , value: 3},  
    ]
 }

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

render() {
  return (
    <React.Fragment>
      <NavBar totalCounters = {this.state.counters.filter(c => c.value>0 ).length}   /*passsing navigation bar the no of counters with val>0  */ 
      />
      <main className="container">
        <Counters onReset={this.handleReset} onIncrement = {this.handleIncrement} onDelete = {this.handleDelete} counters = {this.state.counters}/>
      </main>
    </React.Fragment>
  );
 }
}

export default App;


//props = comes from parent dhruv    used to initialize /set value //// cant be nmodified