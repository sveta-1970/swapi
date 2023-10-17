import React, { Component } from "react";
import { request } from "../../service/data";
import ElementCard from "./element-card";
import uniqid from "uniqid";

import "./card_page.css";

class CardPage extends Component {
  state = {
    data: [],
    loader: false,
  };

  componentDidMount() {
    //console.log("componentDidMount");
    console.log(this.props);
    request(`https://swapi.dev/api/${this.props.url.url}`).then((res) => {
      this.setState((state) => {
        return {
          data: res,
          loader: true,
        };
      });
    });
  }

  componentDidUpdate() {
    //console.log("componentDidUpdate", this.state.data);
  }

  componentWillUnmount() {
    //console.log("componentWillUnmount");
  }

  render() {
    const { data, loader } = this.state;

    return (
      <>
        <div className="card-page">
          {loader ? (
            data.results.map((e, i) => {
              return (
                <ElementCard
                  key={uniqid}
                  img={`https://starwars-visualguide.com/assets/img/${
                    this.props.url.img
                  }/${i + 1}.jpg`}
                  name={e.name || e.title}
                  gender={
                    e.gender ||
                    e.climate ||
                    e.producer ||
                    e.classification ||
                    e.manufacturer
                  }
                  birth_year={
                    e.birth_year ||
                    e.orbital_period ||
                    e.release_date ||
                    e.language ||
                    e.passengers
                  }
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

export default CardPage;
