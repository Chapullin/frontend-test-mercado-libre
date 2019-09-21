import React from 'react';

export default class Breadcrumbs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { categories: this.props.categories };
  }

  // componentWillReceiveProps(nextProp) {
  //   this.props = nextProp;
  //   this.setState({ categories: this.props.categories });
  // }

  render() {
    return (
      <section className="meli-breadcrum-list">
        {this.state.categories.map(category => <span key={category.id} className="meli-breadcrum-list-item">{category.name}</span>)}
      </section>
    );
  }
}
