import React, { Component } from "react";

class Cart extends Component {

  state = { 
    count: 0,
    // imageUrl: 'https://picsum.photos/200'
    tags: ['tag1', 'tag2', 'tag3']
  };

  // constructor() {
  //   // The first and stable method to bind event handlers
  //   super()
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    // Dynamically render list content
    if (this.state.tags.length === 0) return <p>There are no tags</p>

    return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
  }

  // handleIncrement() {
  //   // At this stage, we do not have access to the 'this' property,
  //   // hence, we call the constructor function to allow this function to have a global access
  //   console.log('increment clicked', this);
  // }

  // handleIncrement = () => {
    // Also modify the function to look like this,
    // no parentheses, since it's just one parameter
  handleIncrement = product => { 
    console.log(product)
    // This is another and more simple way to bind event handlers, why?
    // arrow functions inherits the 'this' keyword
    // console.log('increment clicked', this)    


    // How to update state in React
    // React doesn't allow you affect the DOM
    // "this.state.count++" will not work, React is unaware of your actions
    // However, this.setState helps React merge the happenings in the virtual DOM to the 
    // browser DOM and therefore the state of the DOM

    this.setState({ count: this.state.count + 1 })
  }

  render() {
    // const { imageUrl } = this.state
    
    return (
      <React.Fragment>
        {/* <img src= { imageUrl } alt=""/> */}
        <span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
        
        <button 
          // onClick={ this.handleIncrement } 

          // When you need to pass a parameter to a function in React,
          // Easiest way is to pass an inline function to the onClick method, like below
          onClick={ () => this.handleIncrement({ id: 1 }) }
          className="btn btn-secondary btn-sm">Increment
        </button>

        {/* { this.renderTags() } */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    // Rendering classes dynamically
    let classes = 'badge m-2 badge-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    // Using object destructuring to take out the count property of the state object
    const { count } = this.state;
    // return count === 0 ? <h1>Zero</h1> : count; ==> JSX
    return count === 0 ? 'Zero' : count; 
  }
}

export default Cart;
