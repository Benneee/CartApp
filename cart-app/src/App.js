import React, { Component } from "react";
import NavBar from "./components/navbar";
import Carts from "./components/carts";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    console.log("App-Constructor");
  }

  componentDidMount() {
    console.log("App-Mounted");
  }
  state = {
    carts: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = cart => {
    const carts = [...this.state.carts];
    const index = carts.indexOf(cart);
    carts[index] = { ...cart };
    carts[index].value++;
    this.setState({ carts });
  };

  handleReset = () => {
    const carts = this.state.carts.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ carts });
  };

  handleDelete = cartId => {
    //  console.log(cartId);
    const carts = this.state.carts.filter(c => c.id !== cartId);
    this.setState({ carts });
  };

  render() {
    console.log("App-Rendered");
    return (
      <React.Fragment>
        <NavBar totalCarts={this.state.carts.filter(c => c.value > 0).length} />

        <main className="container">
          <Carts
            carts={this.state.carts}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

// Quick note about React Life cycle hooks
// You cannot use life cycle hooks in SFCs

// The three most-used life cycle hooks
// Mounted, Update, Unmount

// Mounted
// constructor, render and componentDidMount are the methods to be called here
// You should also make Ajax calls in the componentDidMount method because it is called last,
// and it is called when React has merged the content of the Virtual DOM to the Browser DOM

// Update
// This phase happens whenever the state or the props of a component changes
// componentDidUpdate is the method called here
// Within this method, you can make changes to a component based on what happens
//  to a DOM element after a change has been made

// Unmount
// componentWillUnmount is the method called here.
// It is called when an element is to be removed from the DOM -- e.g deletion
