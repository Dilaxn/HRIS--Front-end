import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import {Link} from 'react-router-dom'
// components
import PageTitle from "../../../components/PageTitle";
import Widget from "../../../components/Widget";
import Table from "../../dashboard/components/Table/Table";

// data
import mock from "../../dashboard/mock";
import { loginUser } from "../../../context/UserContext";
import axios from "axios";



const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function ReportingMethods() {

  var [datatableData, setDatatableData] = useState([
    ["Joe James"],

    ["Joe James"],
    ["Joe James"],
    ["Joe James"],
    ["Joe James"],
    ["Joe James"],
    ["Joe James"],
    ["Joe James"],
    ["Joe James"],
    ["Joe James"],

  ]);
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Job Category" />
      <Grid container className={classes.container} >

        <div className={classes.formContainer}>
          <div className={classes.form}>


            <React.Fragment>
              <Typography variant="h4" className={classes.greeting}>
                Add Job Category
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


                margin="normal"
                placeholder="Name"
                type="text"
                fullWidth
              />


              <div className={classes.formButtons}>

                <Button

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

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Job Categories"
            data={datatableData}
            columns={["Name"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>

      </Grid>
    </>
  );
}
