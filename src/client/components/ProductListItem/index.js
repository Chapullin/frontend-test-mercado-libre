import React from 'react';
import { Link } from 'react-router-dom';
import shipping from '../../../assets/ic_shipping.png';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link to={`/items/${this.props.item.id}`}>
        <section className="results-item">
          <section className="results-item__thumbnail">
            <img className="img" src={this.props.item.thumbnail} alt="" />
          </section>
          <section className="results-item__info">
            <h1 className="results-item__price">
                $
              {this.props.item.price}
              {this.props.item.free_shipping ? <img src={shipping} alt=""/> : ''}
            </h1>

            <p className="results-item__location">
              {this.props.item.address.city_name}
            </p>
            <h2 className="results-item__title">{this.props.item.title}</h2>
          </section>
        </section>
      </Link>
    );
  }
}
