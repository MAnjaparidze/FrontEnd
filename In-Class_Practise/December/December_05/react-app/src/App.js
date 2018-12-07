import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

const index = () => {
  return (
    <>
      <h1>Index Page</h1>
      <p>lorem ipsum text...</p>
    </>
  )
}

// match, history, location
const Product = ({ match }) => {
  return (
    <div>
      <h2>{match.params.category}</h2>
    </div>
  )
}

const Products = ({match}) => {
  return (

    <>
      <h1>Products Page</h1>
      <p>lorem ipsum text...</p>
    </>
  )
}
const Portfolio = () => {
  return (
    <>
      <h1>Portfolio Page</h1>
      <p>lorem ipsum text...</p>
      <nav>
        <ul>
          <li><Link to={`${match.url}/mobiles`}>Mobile phones</Link></li>
          <li><Link to={`${match.url}/laptops`}>Laptops</Link></li>
          <li><Link to={`${match.url}/cameras`}>Cameras</Link></li>
        </ul>
      </nav>
      <Route path="/portfolio/mobile" component={Portfolio} />
      <Route path="/portfolio/laptops" component={Portfolio} />
      <Route path="/portfolio/cameras" component={Portfolio} />
    </>
  )
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Index</Link></li>
              <li><Link to="/portfolio">portfolio</Link></li>
              <li><Link to="/products">products</Link></li>
            </ul>
          </nav>
          <Route path="/" component={index} exact={true} />
          <Route path="/products" component={Products} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}

export default App;