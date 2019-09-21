import React from "react";
import renderer from "react-test-renderer";
import Home from "../../Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

describe("Home", () => {
  it("should match snapshot - base", () => {
    const component = renderer
      .create(
        <Home />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
