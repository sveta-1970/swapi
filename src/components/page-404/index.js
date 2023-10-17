import React from "react";
import Button from "react-bootstrap/Button";

import "./page-404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="page-404">
      <h2 className="error-type">Error 404</h2>
      <h1>We lost this page</h1>
      <p>
        We searched high and low but couldn't find what you're looking for.<br />
        Let's find a better place for you to go.
      </p>
      <Link to="/">
        <Button variant="primary">Home</Button>
      </Link>
    </div>
  );
};

export default Page404;
