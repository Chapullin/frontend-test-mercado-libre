import React from 'react';
import axios from 'axios';
import Loading from '../Loading';
import Breadcrumbs from '../Breadcrums';
import ProductListItem from '../ProductListItem';
import NotFound from '../NotFound';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], categories: {}, isLoading: false };
  }

  componentDidMount() {
    this.loadProductsFromServer();
  }

  loadProductsFromServer() {
    const queryParam = this.props.location.search.substring(3);
    this.setState({ isLoading: true });

    axios.get(`http://localhost:8080/api/items?q=${queryParam}`)
      .then((res) => {
        this.setState({
          items: res.data.items,
          categories: res.data.categories,
          isLoading: false
        });
      });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <section>
          {this.state.categories.path_from_root ? (
            <Breadcrumbs
              categories={this.state.categories.path_from_root}
            />
          ) : ''}
          <section className="item-results">
            {this.state.items.map(item => (
              <ProductListItem key={item.id} item={item} />
            ))}
            {(this.state.items.length === 0) && <NotFound />}
          </section>
        </section>
      );
    }
    return <Loading />;
  }
}
