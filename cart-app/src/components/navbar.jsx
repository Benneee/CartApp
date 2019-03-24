import React from 'react';

// Stateless Functional Component
// If the component is not gonna have any state and will only receive data via props
// It can be converted to an SFC
// The shortcut to produce an SFC is "sfc",
// For component, "imrc"... For class, "cc"

const NavBar = ({ totalCarts }) => {
    console.log('NavBar - Rendered')
    return ( 
        <nav className="navbar navbar-light bg-light">
        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
        <a className="navbar-brand" href="#">
            Navbar {" "}  
            <span className="badge badge-pill badge-success">
                { totalCarts }
            </span>
        </a>
    </nav>
     );
}
 
export default NavBar;

// class NavBar extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
//                 { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
//                 <a className="navbar-brand" href="#">
//                     Navbar {" "}  
//                     <span className="badge badge-pill badge-success">
//                         { this.props.totalCarts }
//                     </span>
//                 </a>
//             </nav>
//          );
//     }
// }
 
// export default NavBar;