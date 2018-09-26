import React, { Component } from 'react';

class Counter extends Component{
    state = {
        count : 0,
        imageURL : "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"]
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
    return (
    <React.Fragment>
        <img src={this.state.imageURL} alt =""/>
        <span style={this.style} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        <div>
            {this.state.tags.length === 0 && "Please create a new tag!"}
            {this.renderTags()}
        </div>
    </React.Fragment>
    );
    }


    handleIncrement = () => {
        //this.state.count++; wont work
        this.setState( {count : this.state.count+1 });
        console.log("Increment Clicked", this.state.count);
    }
    renderTags(){
        if(this.state.tags.length === 0) return <p> There are no tags! </p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
        //return count == 0 ? <h1>Zero</h1> : count;
    }
}
export default Counter;
