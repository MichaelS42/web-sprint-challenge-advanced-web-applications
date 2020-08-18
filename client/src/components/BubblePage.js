import React, { useState, useEffect } from "react";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {axiosAuth} from "../axiosAuth";

const BubblePage = () => {


  const [colors, setColorList] = useState([]);
  const [dependency, setDependency] = useState(false)
  // fetch your colors data from the server when the componet mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosAuth()
    .post('http://localhost:5000/api/colors')
    .then(res => {
      setColorList(res.data)
      setDependency(false)
    })
    .catch(err => {
      console.log(err.response)
    })
  }, [])



  return (
    <div>
      <ColorList colors={colors} updateColors={setColorList} setDependency={setDependency}/>
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;
