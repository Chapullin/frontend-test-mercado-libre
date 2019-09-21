import React from 'react';
import axios from 'axios';
import SearchBox from '../SearchBox';
import Loading from '../Loading';
import Breadcrumbs from '../Breadcrums';

export default class SearchProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
  }

  componentDidMount() {
    this.loadProductsFromServer();
  }

  loadProductsFromServer() {
    axios.get(`http://localhost:8080/api/items/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ product: res.data });
      }).catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.product.item) {
      return (
        <section>
          <div className="body-content">
            <section>
              {/* <Breadcrumb categories={this.state.product.categories} /> */}
              {this.state.product.categories ? (
                <Breadcrumbs
                  categories={this.state.product.categories}
                />
              ) : ''}
            </section>
            <section className="product-body">
              <div className="product-image">
                <img
                  src={this.state.product.item.picture.secure_url}
                  alt="Imagen del Producto"
                />
              </div>
              <div className="product-resume">
                <div>
                  <small className="product-usage">
                    {this.state.product.item.condition === 'new'
                      ? 'Nuevo'
                      : 'Usado'}
                    <span>&nbsp;-&nbsp;</span>
                    {this.state.product.item.sold_quantity}
                    {' '}
vendidos
                  </small>
                </div>
                <p className="product-title">
                  {this.state.product.item.title}
                </p>
                <h2 className="product-resume__h2">
                  <span>{this.state.product.item.price.amount}</span>
                  <span className="meli-supra">
                    {this.state.product.item.price.decimals.toFixed(2)}
                  </span>
                </h2>
                <button type="button" className="product-resume__button">
                    Comprar
                </button>
              </div>
            </section>
          </div>
          <div>


            <div className="product-description">
              <h3 className="description__h3">Descripción del producto</h3>
              <p className="description__p">
                {this.state.product.item.description}
              </p>
            </div>
          </div>
        </section>

      );
    }
    return <Loading />;
  }
}
