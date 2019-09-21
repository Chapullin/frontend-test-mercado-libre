import React from "react";
import renderer from "react-test-renderer";
import ProductListItem from "../../ProductListItem";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

describe("ProductListItem", () => {
  it("should match snapshot - base", () => {
    const item = {
      id: 'MLA93423034',
      thumbnail: 'image.jpg',
      address: {
        city_name: 'Rosario',
      }
    }
    const component = renderer
      .create(
        <Router>
          <ProductListItem item={item} />
        </Router>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
