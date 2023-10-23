import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { request } from "../../../service/data.js";

class Search extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    request("https://swapi.dev/api/people/").then((data) => {
      console.log(data);
      if (Array.isArray(data.results)) {
        this.setState((state) => {
          return {
            data: data.results.map((e) => {
              return {
                label: e.name,
                year: e.birth_year,
              };
            }),
          };
        });
      } else {
        throw new Error("data is not array");
      }
    });
  }

  render() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={this.state.data}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    )
  }
}

export default Search;
