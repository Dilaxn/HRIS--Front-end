import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function OptionalFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>

      <FormControl component="fieldset" className={classes.formControl}>

        <FormLabel component="legend">  <h1>Configure PIM</h1></FormLabel>
        <h3>Show Deprecated Fields</h3>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Show Nick Name, Smoker and Military Service in Personal Details"
          />
          <h3>Country Specific Information</h3>
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Show SSN field in Personal Details"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Show SIN field in Personal Details"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Show US Tax Exemptions menu"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>

    </div>
  );
}
