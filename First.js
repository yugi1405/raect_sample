
import React from "react";
import Second from "./Second";
const First = (props) => {
  console.log("props",props);
  //const name ='react';
  return(
    <div>
      {props.name}
      First<Second/>
      </div>
      
  );
};


export default First;