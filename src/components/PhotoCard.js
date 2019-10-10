import React from "react";
import styled from 'styled-components';

const PhotoCard = props => {
  return (
    <div className="daily_photo">
      <img src={props.url} alt="" />
      <h2> {props.title} </h2> <p> {props.copyright} </p> <p> {props.date} </p>{" "}
      <p className="description"> {props.explanation} </p>{" "}
      <label for="start"> Start date: </label>
      <input
        type="date"
        id="start"
        onChange={() =>
          console.log(document.querySelector('input[type="date"]').value)
        }
      />{" "}
    </div>
  );
};

export default PhotoCard;
