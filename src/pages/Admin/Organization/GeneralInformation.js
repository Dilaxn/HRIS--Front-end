import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { TextField } from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';

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



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GeneralInformation() {
  const [name, setName] = React.useState('Composed TextField');
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">

      {/*<FormControl disabled>*/}
      {/*  <InputLabel htmlFor="component-disabled">Name</InputLabel>*/}
      {/*  <Input id="component-disabled" value={name} onChange={handleChange} />*/}
      {/*  <FormHelperText>Disabled</FormHelperText>*/}
      {/*</FormControl>*/}
<h1 style={{marginBottom: "30px"}}>General Information</h1>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput id="component-outlined"  style={{paddingRight: "100px", textAlign:"left"}} value={name} onChange={handleChange} label="Name" />
      </FormControl>
      <FormControl variant="outlined" style={{marginLeft: "10%"}}>
        <InputLabel htmlFor="component-outlined">Tax ID</InputLabel>
        <OutlinedInput id="component-outlined"  value={name} onChange={handleChange} label="Name" />
      </FormControl>
      <FormControl variant="outlined"  style={{marginLeft: "60px"}}>
        <InputLabel htmlFor="component-outlined" style={{backgroundColor:"white"}}>No.of Emp.</InputLabel>
        <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
      </FormControl>
      <FormControl variant="outlined"  style={{marginTop: "30px",paddingRight: "100px"}}>
        <InputLabel htmlFor="component-outlined" style={{backgroundColor:"white"}}>Registration Number</InputLabel>
        <OutlinedInput id="component-outlined" value={name} style={{paddingRight: "100px"}} onChange={handleChange} label="Name" />
      </FormControl>
      <hr
        style={{
          color: "black",
          backgroundColor: "black",
          height: 1
        }}
      />
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Phone</InputLabel>
        <OutlinedInput id="component-outlined"  style={{paddingRight: "100px", textAlign:"left"}} value={name} onChange={handleChange} label="Name" />
      </FormControl>
      <FormControl variant="outlined" style={{marginLeft: "10%"}}>
        <InputLabel htmlFor="component-outlined">Fax</InputLabel>
        <OutlinedInput id="component-outlined"  value={name} onChange={handleChange} label="Name" />
      </FormControl>
      <FormControl variant="outlined"  style={{marginLeft: "60px"}}>
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
      </FormControl>
      <hr
        style={{
          color: "black",
          backgroundColor: "black",
          height: 1
        }}
      />
      <FormControl variant="outlined"  style={{marginTop: "30px",paddingRight: "100px"}}>
        <InputLabel htmlFor="component-outlined" style={{backgroundColor:"white"}}>Address Street 1</InputLabel>
        <OutlinedInput id="component-outlined" value={name} style={{paddingRight: "100px"}} onChange={handleChange} label="Name" />
      </FormControl>
      <FormControl variant="outlined"  style={{marginTop: "30px",paddingRight: "100px"}}>
        <InputLabel htmlFor="component-outlined" style={{backgroundColor:"white"}}>Address Street 2</InputLabel>
        <OutlinedInput id="component-outlined" value={name} style={{paddingRight: "100px"}} onChange={handleChange} label="Name" />
      </FormControl>

      <FormControl variant="outlined"  style={{marginTop: "30px",paddingRight: "100px"}}>
        <InputLabel htmlFor="component-outlined"> City</InputLabel>
        <OutlinedInput id="component-outlined" value={name} style={{paddingRight: "100px"}} onChange={handleChange} label="Name" />
      </FormControl>
      <FormControl variant="outlined"  style={{marginTop: "30px",paddingRight: "100px"}}>
        <InputLabel htmlFor="component-outlined" style={{backgroundColor:"white"}}> Province</InputLabel>
        <OutlinedInput id="component-outlined" value={name} style={{paddingRight: "100px"}} onChange={handleChange} label="Name" />
      </FormControl>
      <FormControl variant="outlined"  style={{marginTop: "30px",paddingRight: "100px"}}>
        <InputLabel htmlFor="component-outlined" style={{backgroundColor:"white"}}>Zip/Postal Code</InputLabel>
        <OutlinedInput id="component-outlined" value={name} style={{paddingRight: "100px"}} onChange={handleChange} label="Name" />
      </FormControl>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={"2000"}
        onChange={handleChange}
        helperText="Please select your currency"
        variant="outlined"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="filled-full-width"
        label="Note"
        style={{ margin: 8 }}
        placeholder="Enter here!"
        helperText="Note about Organization!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
      />
      <TextField
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


      <hr
        style={{
          color: "black",
          backgroundColor: "black",
          height: 1
        }}
      />
    </form>
  );
}
