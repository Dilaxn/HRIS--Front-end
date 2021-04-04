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

// logo
// import logo from "./logo.svg";
// import google from "../../images/google.svg";

// context
// import { useUserDispatch, loginUser } from "../../context/UserContext";

function PayGradesAdd(props) {
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
  var [currency, setCurrency] = useState("");
  var [minSalary, setMinSalary] = useState("");
  var [maxSalary, setMaxSalary] = useState("");



  return (
    <Grid container className={classes.container}>

      <div className={classes.formContainer}>
        <div className={classes.form}>


          <React.Fragment>
            <Typography variant="h4" className={classes.greeting}>
              Add Pay Grade
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
              id="name"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={name}
              onChange={e => setName(e.target.value)}
              margin="normal"
              placeholder="Name"
              type="text"
              fullWidth
            />

            <Typography variant="h4" className={classes.greeting}>
              Add Currency
            </Typography>

            <TextField
              id="currency"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={currency}
              onChange={e => setCurrency(e.target.value)}
              margin="normal"
              placeholder="Currency"
              type="text"
              fullWidth
            />
            <TextField
              id="minSalary"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={minSalary}
              onChange={e => setMinSalary(e.target.value)}
              margin="normal"
              placeholder="Minimum Salary"
              type="text"
              fullWidth
            />
            <TextField
              id="maxSalary"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField,
                },
              }}
              value={maxSalary}
              onChange={e => setMaxSalary(e.target.value)}
              margin="normal"
              placeholder="Max Salary"
              type="text"
              fullWidth
            />

            <div className={classes.formButtons}>

              <Button
                disabled={
                  name.length === 0 || currency.length === 0 || maxSalary.length === 0
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

export default PayGradesAdd;
