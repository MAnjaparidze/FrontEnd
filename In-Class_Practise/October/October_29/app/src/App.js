import React, { Component } from 'react';
import List from './ToDoList';
import Item from './Item';
import logo from './logo.svg';
import './App.css';


class list extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { key: '1', text: 'Item 1' },
        { key: '2', text: 'Item 2' }
      ],
      currentItem: {
        key: '',
        text: ''
      },
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({items:filteredItems})
  }

  render() {
    return (
      <div className="App">
        <List />
        <Item items={this.state.items} deleteItem={() => alert(`Remove ${id}`)} />
      </div>
    );
  }
}

export default App;
