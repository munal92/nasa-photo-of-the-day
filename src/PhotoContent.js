import React from "react";

const PhotoContent = props => {
  return (
    <div className="nasaContent">
      <h2>Nasa Photo Of The Day: {props.title}</h2>
      <p>Date: {props.date}</p>
      <p> - {props.title} -</p>
      <p className="pExp">{props.explanation}</p>
      <img src={props.hdurl} />
     
      
      
    </div>
  );
};
export default PhotoContent;