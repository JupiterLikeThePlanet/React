import React from 'react';
import ReactDOM from 'react-dom';

///1a/ class componet can have state////////////

// class App extends React.Component{
//   render(){
//     //using JSX which is html like, but renders js
//     //here is the jsx
//     return <div>Hello World</div>

// 1b//////////////////////////////////////////
//     // and here is what is compiled
//     // return React.createElement('h1', null, 'Hello Guys')
//     // 1st argument: element we want to create
//     // 2nd argument: for props
//     // 3rd argument: another element or a sting to meant to be in the inner html
//
//   }
// }
////////////////////////////////////////////////


//2/////create a stateless component function
///create a constant variable and set it = to a function
// const App = () => <h1>Hello Eggheads</h1>



// 3//// wrapping multiple elements in a single node////////////////////////////////////////////

class App extends React.Component{
  render(){
    // paranthesis a/f return allows one to utilize whitespace
    // return (
    //   <div>
    //     <h1>Header</h1>
    //     <b>bold</b>
    //   </div>
    // );
/////////////////////////////////////////////////
  ////When used with properties, we use interpolate. Used with exercise 4////
  let txt = this.props.txt
  return <h1>{txt}</h1>
  }
}


//4///////////Introduction to properties////////

//defining a property type, each key is the name of the property and these are objects
App.propTypes = {
  txt: React.PropTypes.string,
  // adding isRequired will throw an error in dev tools if value not present
  cat: React.PropTypes.number.isRequired
}

App.defaultProps ={
  txt: 'this is the default txt'
}

ReactDOM.render(
  <App cat={5} txt="this is the props value" />,
  document.getElementById('app')
);


export default App