import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import styled from 'styled-components';

export default function Photo() {
  const [photos, setPhotos] = useState([]);
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=62ZkkSawXLDDlq1n8i5bnfpMjkvwl5ac5tcCY1so"
      )
      .then(res => {
        console.log(res.data);
        setPhotos(res.data.url);
        setNasaData(res.data);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

  return (
    <div>
      {" "}
      {
        <PhotoCard
          url={photos}
          PhotoCard
          title={nasaData.title}
          PhotoCard
          copyright={nasaData.copyright}
          PhotoCard
          date={nasaData.date}
          PhotoCard
          explanation={nasaData.explanation}
        />
      }{" "}
    </div>
  );
}
