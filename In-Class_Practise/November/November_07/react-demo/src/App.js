import React, { Component } from 'react';
import './App.css';
import Loader from './Components/Loader';
import Search from './Components/Search';
import List from './Components/List';

const url = 'https://hn.algolia.com/api/v1/search?query='
class App extends Component {
  state = {
    query: 'javascript',
    url,
    data: null,
    isLoading: true,
  }
  componentDidMount() {
    fetch( `${url}${this.state.query}` )
      .then( data => data.json() )
      .then( data => {
        this.setState( {data, isLoading: false} )
        console.log(this.state.data);
      } )
      .catch(err => console.log(err))
  }
  onSearchhandler = (e) => {
    this.setState({query: e.target.value});
  }
  onSubmit = (e) => {
    console.log(e.target.children)
  }
  render() {
    return (
      <div className="wrapper">
        <Search />
        { this.state.isLoading && <Loader /> }
        { !this.state.isLoading && <List limit={10} data={this.state.data.hits} /> }
      </div>
    );
  }
}

export default App;