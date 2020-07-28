import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Abass", age:26},
      {name: "Richard", age:34},
      {name: "Musty", age:25}
    ],
    showPersons: false
  }

  sayNameHandler = (newName) =>{
    // console.log("was clicked");
    this.setState({
      persons: [
        {name: newName, age:27},
        {name: "Richard", age:34},
        {name: "Musty", age:29}
      ]
    })
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  changeNameHandler = (event) =>{
    this.setState({
      persons: [
        {name: "Abass", age:27},
        {name: event.target.value, age:34},
        {name: "Musty", age:29}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
      border: 'none',
      margin: '10px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button 
          onClick={this.togglePersonHandler}
          style={style}>
          Click Here</button>
        {this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age} 
              click ={this.sayNameHandler.bind(this, 'Umar')}
              changed = {this.changeNameHandler}>
              <strong>My likes: Football</strong>
            </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} 
            />
          </div> : null
        }
      </div>
    );
  }
}


// const app = (props) => {
//   const [personState, otherState] = useState({
//     persons: [
//       {name: "Abass", age:26},
//       {name: "Richard", age:34},
//       {name: "Musty", age:25}
//     ]
//   });

//   const sayNameHandler = () =>{
//     // console.log("was clicked");
//     otherState({
//       persons: [
//         {name: "Adisa", age:27},
//         {name: "Richard", age:34},
//         {name: "Musty", age:29}
//       ]
//     })
//   }


//   // state = {
//   //   persons: [
//   //     {name: "Abass", age:26},
//   //     {name: "Richard", age:34},
//   //     {name: "Musty", age:25}
//   //   ]
//   // }

//     return (
//       <div className="App">
//         <h1>Hi, I am a React App</h1>
//         <button onClick={sayNameHandler}>Click Here</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//         <Person name={personState.persons[1].name} age={personState.persons[1].age} ><strong>My likes: Football</strong></Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//       </div>
//     );
// }

export default App;

