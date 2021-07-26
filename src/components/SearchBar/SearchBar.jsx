import React from "react";
// import { Container, Form, FormGroup,Input, Button} from "reactstrap";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

import { IconButton, TextField} from "@material-ui/core";

//SearchBar from material UI

function SearchBar({ handleSubmit, handleChange }) {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <form  noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Search for Product"
          onChange={handleChange}
        />
        <IconButton  onClick={handleSubmit}>
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
}

export default SearchBar;
