import React from "react";
import "./loading.css";
import * as ReactBootStrap from "react-bootstrap";
const Loading = () => {
  return (
    <div className='loading'>
      <h1>Loading...</h1>
      {/* <ReactBootStrap.Spinner animation='border' variant='success' /> */}
      <ReactBootStrap.Spinner animation='grow' variant='success' />
    </div>
  );
};

export default Loading;
