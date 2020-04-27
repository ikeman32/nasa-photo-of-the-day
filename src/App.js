import React from "react";
import "./App.css";
import Photo from "./components/Photo";
import styled from 'styled-components';

const Appdiv = styled.div`

text-align: center;
background-color: aqua;
background-image: url("http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631190503679E04_DXXX.jpg");
margin: 0 auto;
padding: 0.5rem 0;
`;

function App() {
  return (
    <Appdiv className="App">
      <h1> NASA Photo of the Day </h1> 
      <Photo />
    </Appdiv>
  );
}

export default App;
