import React from "react";
import { ReactDOM } from "react-dom";
import Card from "../Card";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card />, div);
});

it("Modifies name, description, or deadline onChange from Modal", () => {});

it("Changes the name value onChange", () => {});

it("Displays more data on click (name, description, deadline)", () => {});
