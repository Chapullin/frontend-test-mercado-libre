import React from "react";
import renderer from "react-test-renderer";
import Loading from "../../Loading";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

describe("Loading", () => {
  it("should match snapshot - base", () => {
    const component = renderer
      .create(
        <Loading />
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
