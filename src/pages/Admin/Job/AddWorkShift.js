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

export default function AddWorkShift() {

  const datatableData = [
    ["Joe James", "Example Inc.", "Yonkers", "NY"],
    ["John Walsh", "Example Inc.", "Hartford", "CT"],
    ["Bob Herm", "Example Inc.", "Tampa", "FL"],
    ["James Houston", "Example Inc.", "Dallas", "TX"],
    ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
    ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
    ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
    ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
    ["Meral Elias", "Example Inc.", "Hartford", "CT"],
    ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
    ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
    ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
    ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
    ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
    ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
    ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
    ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
  ];


  var [selectedtableData, setSelectedtableData] = useState([
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
      <PageTitle title="Add Job Title" />
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


                margin="normal"
                placeholder="Shift Name"
                type="text"
                fullWidth
              />
              <TextField
                id="from"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}


                margin="normal"
                placeholder="From"
                type="text"
                fullWidth
              />
              <TextField
                id="to"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}


                margin="normal"
                placeholder="To"
                type="text"
                fullWidth
              />

              <TextField
                id="duration"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}


                margin="normal"
                placeholder="Duration"
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

              {/*<Grid item xs={12}>*/}
              {/*  <Widget title="Material-UI Table" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>*/}
              {/*    <Table data={mock.table} />*/}
              {/*  </Widget>*/}
              {/*</Grid>*/}

            </React.Fragment>


          </div>

        </div>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employement Status"
            data={datatableData}
            columns={["Name", "Company", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>

      </Grid>
    </>
  );
}
