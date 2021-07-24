import React,{useState} from "react";
import { Typography, Slider } from "@material-ui/core";
import useStyles from "./styles";

export default function FilterByPrice({value, handlePriceChange}) {

  const classes = useStyles();
   
  
  function valuetext(value) {
    return `${value}`;
  }
  
  return (
    <div className={classes.root}>
      


      <Typography id="range-slider" gutterBottom>
        Price range
      </Typography>
      <Slider
        max={1000}
        step={50}
        value={value}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
