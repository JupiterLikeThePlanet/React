import React from 'react';
import ReactDOM from 'react-dom';

/////////////////////////////////////////////////
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
/////////////////////////////////////////////////

//2/////create a stateless component function
///create a constant variable and set it = to a function
// const App = () => <h1>Hello Eggheads</h1>

/////////////////////////////////////////////////
// 3//// wrapping multiple elements in a single node////////////////////////////////////////////

// class App extends React.Component{
//   render(){
    // paranthesis a/f return allows one to utilize whitespace
    // return (
    //   <div>
    //     <h1>Header</h1>
    //     <b>bold</b>
    //   </div>
    // );
//   }
// }
/////////////////////////////////////////////////
/////////////////////////////////////////////////

//4///////////Introduction to properties////////
// class App extends React.Component{
//   render(){
//   ////When used with properties, we use interpolate.////
//   let txt = this.props.txt
//   return <h1>{txt}</h1>
//   }
// }

// //defining a property type, each key is the name of the property and these are objects
// App.propTypes = {
//   txt: React.PropTypes.string,
//   // adding isRequired will throw an error in dev tools if value not present
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps ={
//   txt: 'this is the default txt'
// }

// ReactDOM.render(
//   <App cat={5} txt="this is the props value" />,
//   document.getElementById('app')
// );

/////////////////////////////////////////////////
///5 State Basics ///////////////////////////////
// props are meant to be static values or methods, STATE is a collection of values meant to be managed by the component itself


// class App extends React.Component {
//   // to initialize it, we use constructor
//   constructor(){
//     //use super to create context of 'this' [this is App in this context]
//     super();
//     this.state = {txt: 'this is the state txt'}
//   }
//   //custom method, takes event as argument
//   update(e){
//     this.setState({txt: e.target.value})

//   }
//   render(){
//     return (
//       <div>
          // <input type="text"
          //   onChange={this.update.bind(this)} />
          // <h1>{this.state.txt}</h1>
//       </div>
//     );
//   }
// }

////////////////////////////////////////////////
////6 Owner Ownee Relationship///////////////////

// This is when one component renders another.  The parent component is called a composite component

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {txt: ''}
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({txt: e.target.value})

//   }
//   render(){
//     return (
//       <div>
//         <Widget txt={this.state.txt} update={this.update}/>
//         <Widget txt={this.state.txt} update={this.update}/>
//         <Widget txt={this.state.txt} update={this.update}/>
//       </div>
//     );
//   }
// }

// //create a new, stateless component here
// const Widget = (props) => {
//     return (
//       <div>
//         <input type="text"
//           onChange={props.update} />
//         <h1>{props.txt}</h1>
//       </div>
//     );
//   }

////////////////////////////////////////////////
////7 Using refs to access components///////////

//refs are way to reference an instance of our component within our application
//refs don't work with stateless function components

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      red: 0,
      green:0,
      blue:0
    }
    this.update = this.update.bind(this)
  }
// this requires 'import ReactDOM from 'react-dom';'
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  }
  render(){
    return(
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br />
      </div>
    );
  }
}

class Slider extends React.Component {
  render(){
      return (
        <input type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
    );
  }
}

export default App