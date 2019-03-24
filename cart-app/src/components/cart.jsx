import React, { Component } from "react";

class Cart extends Component {

  componentDidUpdate(prevProps, prevState){
      // This method is called there is an update to a component
      // If you need to make an Ajax call to update the component content,
      // This is the right place to do it...

      // console.log('prevProps', prevProps);
      // console.log('prevState', prevState);

      if (prevProps.cart.value === this.props.cart.value){
        // console.log('they are equal');
      }
  }

  componentWillUnmount(){
    // It is called when an element is to be removed from the DOM -- e.g deletion
    // console.log('Cart - Unmounted');
    // If there are cleanups to be done in the code, e.g removal of timers, this 
    // is the method to do it, if not done, there will be memory leaks
  }

  // state = { 
  //   value: this.props.cart.value,
  //   // imageUrl: 'https://picsum.photos/200'
  //   tags: ['tag1', 'tag2', 'tag3']
  // };

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
    // console.log(product)
    // This is another and more simple way to bind event handlers, why?
    // arrow functions inherits the 'this' keyword
    // console.log('increment clicked', this)    


    // How to update state in React
    // React doesn't allow you affect the DOM
    // "this.state.value++" will not work, React is unaware of your actions
    // However, this.setState helps React merge the happenings in the virtual DOM to the 
    // browser DOM and therefore the state of the DOM

    // this.setState({ value: this.state.value + 1 })
  }

  render() {

    // console.log('Cart - Rendered'); 
    // const { imageUrl } = this.state

    // Props, a JS object that facilitates passing value to components
    // console.log('props', this.props);
    
    // Using Object Destructuring
    const { onDelete, cart } = this.props;
    return (
      <div>
        {/* <img src= { imageUrl } alt=""/> */}
        <span className={ this.getBadgeClasses() }>{ this.formatvalue() }</span>
        
        <button 
          // onClick={ this.handleIncrement } 

          // When you need to pass a parameter to a function in React,
          // Easiest way is to pass an inline function to the onClick method, like below
          // onClick={ () => this.handleIncrement({ id: 1 }) }

          onClick={ () => this.props.onIncrement(cart)}
          className="btn btn-secondary btn-sm">Increment
        </button>

        {/* { this.renderTags() } */}

        <button 
          onClick={() => onDelete(cart.id)}
          className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    // Rendering classes dynamically
    let classes = 'badge m-2 badge-';
    classes += (this.props.cart.value === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatvalue() {
    // Using object destructuring to take out the value property of the state object
    const { value } = this.props.cart;
    // return value === 0 ? <h1>Zero</h1> : value; ==> JSX
    return value === 0 ? 'Zero' : value; 
  }
}

export default Cart;
