import React, { useState, useEffect } from "react";
import PhotoContent from "./PhotoContent";
import axios from "axios";

export default function NasaData() {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
      )
      .then(response => {
        setPicture(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="space">
      {
        <PhotoContent
          date={picture.date}
          explanation={picture.explanation}
          hdurl={picture.hdurl}
          title={picture.title}
        />
      }
      
    </div>
  );
}