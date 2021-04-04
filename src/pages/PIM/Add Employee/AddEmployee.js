import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade, RadioGroup, Radio,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
// import logo from "./logo.svg";
// import google from "../../images/google.svg";
//email validator
import { validate } from 'email-validator';
// context
import { useUserDispatch, loginUser } from "../../../context/UserContext";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

function AddEmployee(props) {
  var classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
  const [value, setValue] = React.useState("disable");
  const { gilad, jason, antoine } = state;
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [first_name, setFirstNameValue] = useState("");
  var [middle_name, setMiddleNameValue] = useState("");
  var [last_name, setLastNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("admin@flatlogic.com");
  var [passwordValue, setPasswordValue] = useState("password");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>

        <Typography className={classes.logotypeText}>Material Admin</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>



            <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
                Welcome!
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create Employee account
              </Typography>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <TextField
                id="first_name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={first_name}
                onChange={e => setFirstNameValue(e.target.value)}
                margin="normal"
                placeholder="First Name"
                type="text"
                fullWidth
              />
              <TextField
                id="middle_name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={middle_name}
                onChange={e => setMiddleNameValue(e.target.value)}
                margin="normal"
                placeholder="Middle Name"
                type="text"
                fullWidth
              />
              <TextField
                id="last_name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={last_name}
                onChange={e => setLastNameValue(e.target.value)}
                margin="normal"
                placeholder="Last Name"
                type="text"
                fullWidth
              />
              <FormControlLabel
                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                label="Create User Account"
              />
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                disabled={
                  gilad === false
                }
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Address"
                type="email"
                fullWidth
              />

              <FormControl component="fieldset" disabled={
                gilad === false
              }>
                <FormLabel component="legend">User Status</FormLabel>
                <RadioGroup aria-label="User Status" name="gender1" value={value}  onChange={handleChangeRadio}>
                  <FormControlLabel value="enable" control={<Radio />} label="Enable" />
                  <FormControlLabel value="disable" control={<Radio />} label="Disable" />
                </RadioGroup>
              </FormControl>
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }
                    disabled={
                      first_name.length === 0 ||
                      last_name.length === 0 || (gilad===true && loginValue.length===0) || !validate(loginValue)
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>


            </React.Fragment>

        </div>

      </div>
    </Grid>
  );
}

export default withRouter(AddEmployee);
