import React, { Component } from 'react';
import './App.css';
import { api as API } from './configs/api';

class App extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    fetch(API.baseURL + API.photos)
      .then(data => data.json())
      .then(data => this.setState({ data }))
  }

  render() {
    return (
      <div className="App">
        {
          (!!this.state.data && URL.endsWith(API.photos)) && <Photos data={this.table.data} />
        }
      </div>
    );
  }
}
