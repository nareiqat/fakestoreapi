import React from "react";
// import { Container, Form, FormGroup,Input, Button} from "reactstrap";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

import { IconButton, TextField, Typography, Slider } from "@material-ui/core";

function SearchBar({ handleSubmit, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Search for Product"
          onChange={handleChange}
        />
        <IconButton className={classes.searchIcon} onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
      </form>
      <Typography id="discrete-slider-always" gutterBottom>
        Price Range
      </Typography>
      <Slider
        defaultValue={0}
        // getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={1}
        
        valueLabelDisplay="on"
      />
    </div>
  );
}

export default SearchBar;
