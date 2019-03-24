import React, { Component } from 'react';
import Cart from "./cart";

// Difference between props and state
// Props include data that we give to a component while state includes
// data that is local or private to that component, hence, other components do not have access
// to the state of a component.

// Sometimes, a component may not ahve a state, it may get all the data it needs via props
// Props is readonly

// Hot Tip: The component that owns a piece of the state should be the one modifying it

// To modify another component's state, the component concerned would have to raise an event
// while the component receiving modification would have to handle the event

class Carts extends Component {

    render() { 

        // console.log('Carts - Rendered');
        // When you want to pass complex elements to another component, you do two things
        //  You do not use a self-closing tag for the element - component markup
        //  You link the props.children object for whatever you want to do

        // Using Object Destructuring;

        const { onReset, onDelete, onIncrement } = this.props;

        return ( 
            <div>
                <button 
                    onClick={ onReset }
                    className="btn btn-primary btn-sm m-2">Reset</button>
                { this.props.carts.map(cart => 
                <Cart 
                // key is used internally by React, it won't be accessible for use
                    key={cart.id} 
                    onDelete={ onDelete }
                    onIncrement={ onIncrement }
                    cart = {cart}
                />)}
            </div>
         );
    }
}
 
export default Carts;