import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
// import { withRouter } from "react-router-dom";
// import classnames from "classnames";

// styles
import useStyles from "./styles";
import axios from "axios";
import MenuItem from "@material-ui/core/MenuItem";
// logo
// import logo from "./logo.svg";
// import google from "../../images/google.svg";

// context
// import { useUserDispatch, loginUser } from "../../context/UserContext";

function LocationsAdd(props) {
  var classes = useStyles();

  // global
  // var userDispatch = useUserDispatch();

  // local
  // var [isLoading, setIsLoading] = useState(false);
  // var [error, setError] = useState(null);
  // var [activeTabId, setActiveTabId] = useState(0);
  // var [nameValue, setNameValue] = useState("");
  // var [loginValue, setLoginValue] = useState("admin@flatlogic.com");
  var [name, setName] = useState("");
  var [jobDescription, setJobDescription] = useState("");
  var [jobTitle, setjobTitle] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <Grid container className={classes.container}>

      <div className={classes.formContainer}>
        <div className={classes.form}>


          <React.Fragment>
            <Typography variant="h3" className={classes.greeting}>
              Add Location
            </Typography>
            {/*<Button size="large" className={classes.googleButton}>*/}
            {/*  <img src={google} alt="google" className={classes.googleIcon} />*/}
            {/*  &nbsp;Sign in with Google*/}
            {/*</Button>*/}
            {/*<div className={classes.formDividerContainer}>*/}
            {/*  <div className={classes.formDivider} />*/}
            {/*  <Typography className={classes.formDividerWord}>or</Typography>*/}
            {/*  <div className={classes.formDivider} />*/}
            {/*</div>*/}

            <TextField
              id="jobTitle"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={jobTitle}
              onChange={e => setjobTitle(e.target.value)}
              margin="normal"
              placeholder="Name"
              type="text"
              fullWidth
            />
            <TextField style={{marginTop:"20px"}}
              id="outlined-select-currency"
              select
              label="Select"
              value={"2000"}
              onChange={handleChange}
              helperText="Organization Country"
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="jobTitle"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={jobTitle}
              onChange={e => setjobTitle(e.target.value)}
              margin="normal"
              placeholder="Name"
              type="text"
              fullWidth
            />
            <TextField
              id="jobTitle"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={jobTitle}
              onChange={e => setjobTitle(e.target.value)}
              margin="normal"
              placeholder="Name"
              type="text"
              fullWidth
            />
            <TextField style={{marginTop:"60px"}}
              id="outlined-full-width"
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <TextField
              id="jobTitle"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={jobTitle}
              onChange={e => setjobTitle(e.target.value)}
              margin="normal"
              placeholder="Name"
              type="text"
              fullWidth
            />
            <TextField
              id="jobTitle"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={jobTitle}
              onChange={e => setjobTitle(e.target.value)}
              margin="normal"
              placeholder="Name"
              type="text"
              fullWidth
            />
            <TextField
              id="jobTitle"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={jobTitle}
              onChange={e => setjobTitle(e.target.value)}
              margin="normal"
              placeholder="Name"
              type="text"
              fullWidth
            />
            <TextField style={{marginTop:"20px"}}
                       id="outlined-full-width"
                       label="Label"
                       style={{ margin: 8 }}
                       placeholder="Placeholder"
                       helperText="Full width!"
                       fullWidth
                       margin="normal"
                       InputLabelProps={{
                         shrink: true,
                       }}
                       variant="outlined"
            />

            <div className={classes.formButtons}>

              <Button
                disabled={
                  jobTitle.length === 0 || jobDescription.length === 0
                }
                onClick={() =>
                  axios.post("",{})
                }
                variant="contained"
                color="primary"
                size="large"
              >
                Add
              </Button>

            </div>
          </React.Fragment>


        </div>

      </div>
    </Grid>
  );
}

export default LocationsAdd;
