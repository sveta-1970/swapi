import React, { Component } from "react";
import uniqid from "uniqid";
import NavItem from "../nav-item/index.jsx";
import { request } from "../../service/data.js";
import Loader from "../loader/loader.jsx";

import "./nav.css";

class Nav extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    request("https://swapi.dev/api/").then((res) => {
      this.setState((state) => {
        return { data: res };
      });
    });
  }

  render() {
    return (
      <ul className="navigation">
        {this.state.data === null ? <Loader /> : elements(this.state.data)}
      </ul>
    );
  }
}

function elements(object) {
  let btn = [];
  /*
  let entries = Object.entries(object); //array of kets and entries
  entries.map(([index]) => {
    btn.push(<NavItem name={index} key={Math.random() * 100 + "l"}/>);
    console.log(btn);
    return btn;
  });
  */

  for (let obj in object) {
    btn.push(<NavItem name={obj} key={Math.random() * 100 + "l"} />);
  }
  return btn;
}

export default Nav;
