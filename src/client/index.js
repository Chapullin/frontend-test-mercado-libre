import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Link, Switch
} from 'react-router-dom';
import SearchByProduct from './components/SearchProduct';
import ProductList from './components/ProductList';
import NotFound from './components/NotFound';
import NoPage from './components/NoPage';
import SearchBox from './components/SearchBox';
import Home from './components/Home';
import './styles/app.scss';

ReactDOM.render(
  <React.Fragment>
    <SearchBox />
    <section className="meli-centered">
      <Router>
        <Switch>
          <Route path="/items/:id" exact component={SearchByProduct} />
          <Route path="/items" exact component={ProductList} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" component={Home} />
          <Route component={NoPage} />
        </Switch>
      </Router>
    </section>
  </React.Fragment>,
  document.getElementById('root')
);
