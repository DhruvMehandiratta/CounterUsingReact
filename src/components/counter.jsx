import React, { Component } from 'react';

class Counter extends Component{
    state = {
        // value : this.props.value,   //this is a local state here /...needs to be removed as also present in the counters class as we should have only one soruce of truth
        imageURL : "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"],
    };

    /*constructor(){
        super();
        console.log("Constructor", this);
        this.handleIncrement = this.handleIncrement.bind(this); 
    }
    */

    style={
        fontSize: 50,
        fontWeight: "bold"
    };

    render(){
        console.log('props', this.props);

    return (
    <React.Fragment>
        <img src={this.state.imageURL} alt =""/>
        <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.id)} 
        className="btn btn-danger btn-sm m-2">Delete</button>   
        <div>
            {this.state.tags.length === 0 && "Please create a new tag!"}
            {this.renderTags()}
        </div>
    </React.Fragment>
    );
    }

    /* handleIncrement = () => {
        //this.state.count++; wont work
        this.setState( {value : this.state.value+1 });
        console.log("Increment Clicked", this.state.value);
    }*/   //removed for one source of truth

    renderTags(){
        if(this.state.tags.length === 0) return <p> There are no tags! </p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
        //return count == 0 ? <h1>Zero</h1> : count;
    }
}
export default Counter;
