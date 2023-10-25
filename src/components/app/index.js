import React from "react";
import { Routes, Route } from "react-router-dom";
import CardPage from "../card_page";
import Nav from "../nav";
import Page404 from "../page-404";
import Search from "../Search/search";

import "./app.css";

const App = () => {
  return (
    <div className="main">
      <div className="box">
        <Search />
        <h1>People</h1>
        <Nav></Nav>
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <img
                  src="https://th.bing.com/th/id/OIP.rFxkH2l2LMlpvwL-AULclwHaEK?w=294&h=180&c=7&r=0&o=5&pid=1.7"
                  alt="main_image"
                  className="main_image"
                />
              }
            ></Route>
            <Route
              path="/people"
              element={<CardPage url={{ url: "people", img: "characters" }} />}
            ></Route>
            <Route
              path="/planets"
              element={<CardPage url={{ url: "planets", img: "planets" }} />}
            ></Route>
            <Route
              path="/films"
              element={<CardPage url={{ url: "films", img: "films" }} />}
            ></Route>
            <Route
              path="/species"
              element={<CardPage url={{ url: "species", img: "species" }} />}
            ></Route>
            <Route
              path="/vehicles"
              element={<CardPage url={{ url: "vehicles", img: "vehicles" }} />}
            ></Route>
            <Route
              path="/starships"
              element={
                <CardPage url={{ url: "starships", img: "starships" }} />
              }
            ></Route>
            <Route path="/*" element={<Page404 />}></Route>
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default App;
