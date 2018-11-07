import React, { Component } from 'react';
import './App.css';

FETCHURL = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  state = {
    jsonData: null
  }

  componentDidMount(){
    fetch(FETCHURL)
      .then(res => res.json())
      .then(users => this.setState({jsonData:users}))
      .catch(err => console.log(err))
  }
  render() {
    let persons = [
      {
        name: 'Vakho',
        age: 20,
        id: 1,
        isActive: false,
      },
      {
        name: 'Grigoli',
        age: 20,
        id: 2,
        isActive: true,
      },
      {
        name: 'Mamuka',
        age: 20,
        id: 3,
        isActive: true,
      },
      {
        name: 'Salome',
        age: 17,
        id: 4,
        isActive: false,
      },
    ]
    const showList = false;

    // if (!showList) {
    //   return null;
    // }

    return (
      <div className="App">
        <h2>Using Array.prototype.map()</h2>
        {
          showList && (
            <ul>
              {persons.map(person => <li key={person.id}>{person.name} {person.age}</li>)}
            </ul>
          )
        }

        <h2>Using Array.prototype.filter()</h2>
        <ul>
          {persons
            .filter(person => person.isActive)
            .map(person => <li key={person.id}>{person.name} {person.age}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
